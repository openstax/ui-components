import React from "react";
import { getPreChatFields } from "./fieldMapping";

/**
 * Chat Controller
 *
 * This module manages the popup window for the chat system and handles
 * communication between the parent window and the chat popup using postMessage.
 *
 * The chat system opens in a popup window positioned at the bottom-right of
 * the screen, similar to common chat widgets.
 */

/**
 * Configuration for the chat popup window dimensions and positioning.
 */
const POPUP_CONFIG = {
  width: 500,
  height: 800,
} as const;

/**
 * Calculates the position for a popup window at the bottom-right of the screen.
 *
 * @returns Object with top and left pixel coordinates
 */
const calculateBottomRightPosition = () => {
  // Get the current window's position and size
  // screenX/screenY are more reliable than screenLeft/screenTop
  const rightX = (window.screenX || window.screenLeft) + window.outerWidth;
  const bottomY = (window.screenY || window.screenTop) + window.outerHeight;

  // Position popup at bottom-right
  const top = bottomY - POPUP_CONFIG.height;
  const left = rightX - POPUP_CONFIG.width;

  return { top, left };
};

/**
 * Generates the options string for window.open() to create a popup.
 *
 * @returns Formatted options string like "popup=true,width=500,height=800,top=100,left=200"
 */
const createPopupOptions = (): string => {
  const position = calculateBottomRightPosition();

  const options = {
    popup: true,
    width: POPUP_CONFIG.width,
    height: POPUP_CONFIG.height,
    ...position,
  };

  return Object.entries(options)
    .map(([k, v]) => `${k}=${v}`)
    .join(",");
};

/**
 * Hook that manages postMessage communication with the chat popup.
 *
 * Provides a safe way to send messages to the popup window with
 * origin validation.
 *
 * @param popup - Ref to the popup window
 * @param path - Full URL of the chat embed (used to determine origin)
 * @returns Function to send messages to the popup
 */
const usePostMessageChannel = (
  popup: React.MutableRefObject<Window | null>,
  path: string | undefined,
) => {
  // Extract and memoize the origin from the chat embed path
  // This is used to validate messages and restrict postMessage target
  const popupOrigin = React.useMemo(
    () => (path ? new URL(path).origin : undefined),
    [path],
  );

  // Create a memoized function to send messages to the popup
  const sendMessage = React.useCallback(
    <T,>(message: { type: string; data?: T }) => {
      // Safety checks: popup must exist and be open, and we must have an origin
      if (!popup.current || !popupOrigin) return;

      // Send the message with origin restriction for security
      popup.current.postMessage(message, popupOrigin);
    },
    [popup, popupOrigin],
  );

  return { sendMessage, popupOrigin };
};

/**
 * Hook that manages the chat popup window lifecycle and communication.
 *
 * Responsibilities:
 * - Opens the popup window
 * - Manages the popup lifecycle (creation, messaging, cleanup)
 * - Handles bidirectional communication via postMessage
 * - Sends pre-chat fields when the popup is ready
 * - Polls for popup closure and cleans up event listeners
 *
 * @param path - URL to the chat embed page
 * @param preChatFields - Pre-populated form fields to send to the chat
 * @returns Object with openChat function, or empty object if path is not provided
 */
export const useChatController = (
  path: string | undefined,
  preChatFields: ReturnType<typeof getPreChatFields>,
) => {
  // Store reference to the popup window
  const popup = React.useRef<Window | null>(null);

  const { sendMessage, popupOrigin } = usePostMessageChannel(popup, path);

  /**
   * Sends the pre-chat fields to the popup.
   * This is called when the popup signals it's ready.
   */
  const sendPreChatFields = React.useCallback(() => {
    sendMessage({ type: "preChatFields", data: preChatFields });
  }, [sendMessage, preChatFields]);

  /**
   * Initializes the chat popup with fields and opens the chat interface.
   * Called when the popup sends a "ready" message.
   */
  const init = React.useCallback(() => {
    sendPreChatFields();
    sendMessage({ type: "open" });
  }, [sendMessage, sendPreChatFields]);

  /**
   * Opens the chat popup window.
   *
   * This function:
   * 1. Checks if a popup is already open (prevents duplicates)
   * 2. Creates a new popup window positioned at bottom-right
   * 3. Sets up message listener for popup communication
   * 4. Polls for popup closure to clean up
   */
  const openChat = React.useCallback(() => {
    // Prevent opening multiple popups or opening without a path
    if (popup.current || !path) return;

    // Open the popup window with calculated position
    const options = createPopupOptions();
    popup.current = window.open(path, "_blank", options);

    // If popup was blocked by browser, bail out
    if (!popup.current) return;

    /**
     * Handles messages from the popup window.
     * Currently listens for "ready" message to initialize the chat.
     */
    const handleMessage = (e: MessageEvent) => {
      const { source, data: { type } } = e;

      // Security: only process messages from our popup
      if (source !== popup.current) return;

      // Initialize chat when popup signals ready
      if (type === "ready") init();
    };

    /**
     * Polls to detect when the popup is closed by the user.
     * Cleans up event listeners when closed.
     */
    const checkClosed = setInterval(() => {
      if (popup.current?.closed) {
        // Cleanup: remove message listener
        window.removeEventListener("message", handleMessage, false);
        popup.current = null;
        clearInterval(checkClosed);
      }
    }, 500); // Check every 500ms

    // Set up the message listener
    window.addEventListener("message", handleMessage, false);
  }, [path, init]);

  /**
   * Effect: Re-send pre-chat fields if they change while popup is open.
   * This ensures the popup always has the latest field values.
   */
  React.useEffect(() => {
    sendPreChatFields();
  }, [sendPreChatFields]);

  // Only return the openChat function if we have a valid path
  // This makes it easy for consumers to check if chat is available
  return path ? { openChat } : {};
};

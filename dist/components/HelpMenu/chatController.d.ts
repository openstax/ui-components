import { getPreChatFields } from "./fieldMapping";
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
export declare const useChatController: (path: string | undefined, preChatFields: ReturnType<typeof getPreChatFields>) => {
    openChat: () => void;
} | {
    openChat?: undefined;
};

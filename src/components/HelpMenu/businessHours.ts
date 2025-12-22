import React from "react";

/**
 * Business Hours Management
 *
 * This module handles business hours calculation, tracking, and formatting
 * for the help/support chat system. It determines when chat support is
 * available and formats the hours for display to users.
 */

export interface BusinessHours {
  startTime: number; // Unix timestamp in milliseconds
  endTime: number;   // Unix timestamp in milliseconds
}

export interface BusinessHoursResponse {
  businessHoursInfo: {
    businessHours: BusinessHours[];
  };
  timestamp?: number;
}

/**
 * Finds the currently active business hours window, if any.
 *
 * The grace period extends the hours window slightly before/after to handle
 * edge cases and provide a better user experience.
 *
 * @param hoursResponse - Business hours data from the server
 * @param gracePeriod - Milliseconds to extend the hours window (default: 5 seconds)
 * @returns The current business hours window, or undefined if outside hours
 */
const findCurrentBusinessHours = (
  hoursResponse: BusinessHoursResponse | undefined,
  gracePeriod: number,
): BusinessHours | undefined => {
  if (!hoursResponse) return undefined;

  const now = Date.now();
  const { businessHoursInfo: { businessHours } } = hoursResponse;

  // Find a hours window that encompasses the current time (with grace period)
  return businessHours.find(
    (h) => h.startTime - gracePeriod <= now && now < h.endTime + gracePeriod,
  );
};

/**
 * React hook that tracks current business hours and automatically updates
 * when the hours window ends.
 *
 * This hook:
 * 1. Determines if we're currently within business hours
 * 2. Sets a timeout to clear the hours when they end
 * 3. Uses smart comparison to avoid unnecessary re-renders
 *
 * @param hoursResponse - Business hours data from the server
 * @param gracePeriod - Milliseconds to extend the hours window (default: 5 seconds)
 * @returns The current business hours window, or undefined if outside hours
 */
export const useBusinessHours = (
  hoursResponse: BusinessHoursResponse | undefined,
  gracePeriod = 5_000,
): BusinessHours | undefined => {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [hours, setHours] = React.useState<BusinessHours | undefined>();

  React.useEffect(() => {
    const nextState = findCurrentBusinessHours(hoursResponse, gracePeriod);

    // Clear any existing timeout
    clearTimeout(timeoutRef.current);

    // If we're in business hours, set a timeout to unset them when they end
    if (nextState !== undefined) {
      // Schedule the update for end time, or at least 1 second in the future
      const dT = Math.max(nextState.endTime - Date.now(), 1000);
      timeoutRef.current = setTimeout(() => {
        setHours(undefined);
      }, dT);
    }

    // Only update state if the hours actually changed
    // This prevents unnecessary re-renders when the effect runs
    setHours((prev) =>
      prev !== undefined &&
      nextState !== undefined &&
      prev.startTime === nextState.startTime &&
      prev.endTime === nextState.endTime
        ? prev // Keep the same object reference if times haven't changed
        : nextState,
    );

    // Cleanup: clear timeout when component unmounts or effect re-runs
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [hoursResponse, gracePeriod]);

  return hours;
};

/**
 * Formats a business hours time range for display to users.
 *
 * Uses the Intl.DateTimeFormat API for proper localization.
 * Falls back to simple hour display if Intl is not available.
 *
 * @param startTime - Unix timestamp in milliseconds
 * @param endTime - Unix timestamp in milliseconds
 * @returns Formatted string like "9 AM - 5 PM CDT" or empty string if invalid
 *
 * @example
 * formatBusinessHoursRange(1609502400000, 1609531200000)
 * // Returns: "9 AM - 5 PM CST"
 */
export const formatBusinessHoursRange = (startTime: number, endTime: number): string => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Validate that we have real timestamps
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return "";
  }

  try {
    // Use Intl.DateTimeFormat for proper localized formatting
    const baseOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      hour12: true,
    };

    const start = new Intl.DateTimeFormat(undefined, baseOptions).format(startDate);
    const end = new Intl.DateTimeFormat(undefined, {
      ...baseOptions,
      timeZoneName: "short", // Include timezone in end time
    }).format(endDate);

    // Example output: "9 AM - 5 PM CDT"
    return `${start} - ${end}`;
  } catch (e) {
    // Fallback for environments without Intl support
    console.warn("Intl.DateTimeFormat not available, falling back to simple hours.", e);
    // Example output: "9 - 17"
    return `${startDate.getHours()} - ${endDate.getHours()}`;
  }
};

/**
 * React hook that provides a formatted hours range string.
 *
 * Combines useBusinessHours with formatBusinessHoursRange to provide
 * a ready-to-display string for the UI.
 *
 * @param businessHours - Business hours data from the server
 * @param gracePeriod - Optional grace period for hours window
 * @returns Formatted hours string, or undefined if outside business hours
 *
 * @example
 * const hoursDisplay = useHoursRange(businessHoursData);
 * // Returns: "9 AM - 5 PM CDT" or undefined
 */
export const useHoursRange = (
  businessHours: BusinessHoursResponse | undefined,
  gracePeriod?: number,
): string | undefined => {
  const hours = useBusinessHours(businessHours, gracePeriod);

  // Memoize the formatted string to avoid recalculating on every render
  return React.useMemo(
    () => (hours ? formatBusinessHoursRange(hours.startTime, hours.endTime) : undefined),
    [hours],
  );
};

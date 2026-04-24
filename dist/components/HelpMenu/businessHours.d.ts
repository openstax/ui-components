/**
 * Business Hours Management
 *
 * This module handles business hours calculation, tracking, and formatting
 * for the help/support chat system. It determines when chat support is
 * available and formats the hours for display to users.
 */
export interface BusinessHours {
    startTime: number;
    endTime: number;
}
export interface BusinessHoursResponse {
    businessHoursInfo: {
        businessHours: BusinessHours[];
    };
    timestamp?: number;
}
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
export declare const useBusinessHours: (hoursResponse: BusinessHoursResponse | undefined, gracePeriod?: number) => BusinessHours | undefined;
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
export declare const formatBusinessHoursRange: (startTime: number, endTime: number) => string;
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
export declare const useHoursRange: (businessHours: BusinessHoursResponse | undefined, gracePeriod?: number) => string | undefined;

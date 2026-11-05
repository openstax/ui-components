"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHoursRange = exports.formatBusinessHoursRange = exports.useBusinessHours = void 0;
const react_1 = __importDefault(require("react"));
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
const findCurrentBusinessHours = (hoursResponse, gracePeriod) => {
    if (!hoursResponse)
        return undefined;
    const now = Date.now();
    const { businessHoursInfo: { businessHours } } = hoursResponse;
    return businessHours.find((h) => h.startTime - gracePeriod <= now && now < h.endTime + gracePeriod);
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
const useBusinessHours = (hoursResponse, gracePeriod = 5000) => {
    const timeoutRef = react_1.default.useRef();
    const [hours, setHours] = react_1.default.useState();
    react_1.default.useEffect(() => {
        const nextState = findCurrentBusinessHours(hoursResponse, gracePeriod);
        clearTimeout(timeoutRef.current);
        if (nextState !== undefined) {
            // Schedule the update for end time, or at least 1 second in the future
            const dT = Math.max(nextState.endTime - Date.now(), 1000);
            timeoutRef.current = setTimeout(() => {
                setHours(undefined);
            }, dT);
        }
        // This prevents unnecessary re-renders when the effect runs
        setHours((prev) => prev !== undefined &&
            nextState !== undefined &&
            prev.startTime === nextState.startTime &&
            prev.endTime === nextState.endTime
            ? prev // Keep the same object reference if times haven't changed
            : nextState);
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [hoursResponse, gracePeriod]);
    return hours;
};
exports.useBusinessHours = useBusinessHours;
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
const formatBusinessHoursRange = (startTime, endTime) => {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return "";
    }
    try {
        const baseOptions = {
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
    }
    catch (e) {
        console.warn("Intl.DateTimeFormat not available, falling back to simple hours.", e);
        // Example output: "9 - 17"
        return `${startDate.getHours()} - ${endDate.getHours()}`;
    }
};
exports.formatBusinessHoursRange = formatBusinessHoursRange;
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
const useHoursRange = (businessHours, gracePeriod) => {
    const hours = (0, exports.useBusinessHours)(businessHours, gracePeriod);
    return react_1.default.useMemo(() => (hours ? (0, exports.formatBusinessHoursRange)(hours.startTime, hours.endTime) : undefined), [hours]);
};
exports.useHoursRange = useHoursRange;

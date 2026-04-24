/**
 * HelpMenu Hooks - Main Export File
 *
 * This file serves as the main export point for all HelpMenu-related
 * functionality, maintaining backward compatibility while organizing
 * code into focused, single-responsibility modules.
 *
 * The functionality is split into three main areas:
 * 1. Field Mapping (fieldMapping.ts) - Transforms application data to Salesforce fields
 * 2. Business Hours (businessHours.ts) - Manages and formats support hours
 * 3. Chat Controller (chatController.ts) - Manages the chat popup window
 */
export type { BusinessHours, BusinessHoursResponse } from "./businessHours";
export { useBusinessHours, formatBusinessHoursRange, useHoursRange, } from "./businessHours";
export { getPreChatFields } from "./fieldMapping";
export { useChatController } from "./chatController";
export interface ChatConfiguration {
    chatEmbedPath: string;
    businessHours?: import("./businessHours").BusinessHoursResponse;
    err?: {
        type: string;
        detail: string;
    };
}

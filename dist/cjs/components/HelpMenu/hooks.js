"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChatController = exports.getPreChatFields = exports.useHoursRange = exports.formatBusinessHoursRange = exports.useBusinessHours = void 0;
var businessHours_1 = require("./businessHours");
Object.defineProperty(exports, "useBusinessHours", { enumerable: true, get: function () { return businessHours_1.useBusinessHours; } });
Object.defineProperty(exports, "formatBusinessHoursRange", { enumerable: true, get: function () { return businessHours_1.formatBusinessHoursRange; } });
Object.defineProperty(exports, "useHoursRange", { enumerable: true, get: function () { return businessHours_1.useHoursRange; } });
var fieldMapping_1 = require("./fieldMapping");
Object.defineProperty(exports, "getPreChatFields", { enumerable: true, get: function () { return fieldMapping_1.getPreChatFields; } });
var chatController_1 = require("./chatController");
Object.defineProperty(exports, "useChatController", { enumerable: true, get: function () { return chatController_1.useChatController; } });

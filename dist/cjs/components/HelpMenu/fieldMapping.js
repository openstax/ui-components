"use strict";
/**
 * Field Mapping Utilities
 *
 * This module handles the mapping between application field names and
 * Salesforce field names for the help/support system pre-chat forms.
 *
 * The mapping is designed to work with data from multiple sources:
 * - Assignable platform (context, assignment, deployment IDs)
 * - OpenStax Accounts (user information)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreChatFields = exports.mapVisibleFields = exports.mapHiddenFields = void 0;
/**
 * Mapping configuration from application field names to Salesforce field names.
 * These field mappings are synchronized with:
 * assignments/packages/frontend/src/components/SupportInfo.tsx
 */
const HIDDEN_FIELDS_MAPPING = [
    ["assignmentId", "Assignment_Id"],
    ["contextId", "Context_Id"],
    ["deploymentId", "Deployment_Id"],
    ["platformId", "Platform_Id"],
    ["registration", "Registration_Id"],
    ["organizationName", "School"],
    ["userEmail", "Email"],
    ["userFirstName", "First_Name"],
    ["userId", "OpenStax_UUID"],
    ["userLastName", "Last_Name"],
];
/**
 * Maps application field names to Salesforce hidden fields.
 * Hidden fields are pre-populated but not shown to the end user.
 *
 * @param supportInfoMapping - Object containing application field values
 * @returns Object with Salesforce field names as keys and their values
 */
const mapHiddenFields = (supportInfoMapping) => Object.fromEntries(HIDDEN_FIELDS_MAPPING
    .map(([fromKey, toKey]) => [toKey, supportInfoMapping[fromKey]])
    .filter((tuple) => typeof tuple[0] === "string" && typeof tuple[1] === "string"));
exports.mapHiddenFields = mapHiddenFields;
/**
 * Checks if a value is a non-empty string.
 * Used to determine if form fields should be editable.
 */
const isValidString = (value) => typeof value === "string" && value.length > 0;
/**
 * Parses a full name into first and last name components.
 * Falls back to splitting on spaces if discrete firstName/lastName not available.
 *
 * @param userName - Full name string (e.g., "John Doe")
 * @param userFirstName - Optional discrete first name from accounts
 * @param userLastName - Optional discrete last name from accounts
 * @returns Tuple of [firstName, lastName]
 */
const parseName = (userName, userFirstName, userLastName) => {
    var _a;
    const nameParts = (_a = userName === null || userName === void 0 ? void 0 : userName.split(" ")) !== null && _a !== void 0 ? _a : [];
    // If we have discrete first/last names from accounts, use those
    // Otherwise, parse from userName: everything except last word is first name
    const firstName = userFirstName !== null && userFirstName !== void 0 ? userFirstName : nameParts.slice(0, -1).join(" ");
    const lastName = userLastName !== null && userLastName !== void 0 ? userLastName : nameParts.slice(-1).join("");
    return [firstName, lastName];
};
/**
 * Maps application field names to Salesforce visible fields.
 * Visible fields are shown in the pre-chat form and may be editable.
 *
 * Fields prefixed with '_' are standard Salesforce fields (non-custom).
 * Fields without prefix are custom Salesforce fields.
 *
 * Editability logic:
 * - If we receive user data from Accounts, fields are read-only
 * - If data is missing, fields are editable so user can provide it
 * - School field is always editable
 *
 * @param supportInfoMapping - Object containing application field values
 * @returns Object with field configurations including value and editability
 */
const mapVisibleFields = (supportInfoMapping) => {
    const { userName, userFirstName, userLastName, userEmail, organizationName } = supportInfoMapping;
    const [firstName, lastName] = parseName(userName, userFirstName, userLastName);
    const visibleEntries = [
        ["_firstName", firstName, !isValidString(userFirstName)],
        ["_lastName", lastName, !isValidString(userLastName)],
        ["_email", userEmail !== null && userEmail !== void 0 ? userEmail : "", !isValidString(userEmail)],
        ["School", organizationName !== null && organizationName !== void 0 ? organizationName : "", true], // School is always editable
    ];
    return Object.fromEntries(visibleEntries.map(([key, value, isEditableByEndUser]) => [
        key,
        { value, isEditableByEndUser },
    ]));
};
exports.mapVisibleFields = mapVisibleFields;
/**
 * Transforms contact form parameters into pre-chat field configuration.
 * This is the main entry point for preparing form data to send to Salesforce.
 *
 * @param contactFormParams - Array of key-value pairs from the contact form
 * @returns Object containing both visible and hidden fields for the chat system
 */
const getPreChatFields = (contactFormParams) => {
    const supportInfoMapping = Object.fromEntries(contactFormParams.map(({ key, value }) => [key, value]));
    return {
        visibleFields: (0, exports.mapVisibleFields)(supportInfoMapping),
        hiddenFields: (0, exports.mapHiddenFields)(supportInfoMapping),
    };
};
exports.getPreChatFields = getPreChatFields;

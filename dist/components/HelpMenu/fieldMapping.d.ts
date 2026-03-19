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
/**
 * Maps application field names to Salesforce hidden fields.
 * Hidden fields are pre-populated but not shown to the end user.
 *
 * @param supportInfoMapping - Object containing application field values
 * @returns Object with Salesforce field names as keys and their values
 */
export declare const mapHiddenFields: (supportInfoMapping: {
    [key: string]: string;
}) => {
    [k: string]: string;
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
export declare const mapVisibleFields: (supportInfoMapping: {
    [key: string]: string;
}) => {
    [k: string]: {
        value: string;
        isEditableByEndUser: boolean;
    };
};
/**
 * Transforms contact form parameters into pre-chat field configuration.
 * This is the main entry point for preparing form data to send to Salesforce.
 *
 * @param contactFormParams - Array of key-value pairs from the contact form
 * @returns Object containing both visible and hidden fields for the chat system
 */
export declare const getPreChatFields: (contactFormParams: {
    key: string;
    value: string;
}[]) => {
    visibleFields: {
        [k: string]: {
            value: string;
            isEditableByEndUser: boolean;
        };
    };
    hiddenFields: {
        [k: string]: string;
    };
};

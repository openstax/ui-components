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
] as const;

/**
 * Maps application field names to Salesforce hidden fields.
 * Hidden fields are pre-populated but not shown to the end user.
 *
 * @param supportInfoMapping - Object containing application field values
 * @returns Object with Salesforce field names as keys and their values
 */
export const mapHiddenFields = (supportInfoMapping: { [key: string]: string }) =>
  Object.fromEntries(
    HIDDEN_FIELDS_MAPPING
      .map(([fromKey, toKey]) => [toKey, supportInfoMapping[fromKey]])
      // Filter out entries where either key or value is missing
      .filter(
        (tuple): tuple is [string, string] =>
          typeof tuple[0] === "string" && typeof tuple[1] === "string",
      ),
  );

/**
 * Checks if a value is a non-empty string.
 * Used to determine if form fields should be editable.
 */
const isValidString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;

/**
 * Parses a full name into first and last name components.
 * Falls back to splitting on spaces if discrete firstName/lastName not available.
 *
 * @param userName - Full name string (e.g., "John Doe")
 * @param userFirstName - Optional discrete first name from accounts
 * @param userLastName - Optional discrete last name from accounts
 * @returns Tuple of [firstName, lastName]
 */
const parseName = (
  userName: string | undefined,
  userFirstName: string | undefined,
  userLastName: string | undefined,
): [string, string] => {
  const nameParts = userName?.split(" ") ?? [];

  // If we have discrete first/last names from accounts, use those
  // Otherwise, parse from userName: everything except last word is first name
  const firstName = userFirstName ?? nameParts.slice(0, -1).join(" ");
  // Last word is assumed to be last name (no middle name handling)
  const lastName = userLastName ?? nameParts.slice(-1).join("");

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
export const mapVisibleFields = (supportInfoMapping: { [key: string]: string }) => {
  const { userName, userFirstName, userLastName, userEmail, organizationName } = supportInfoMapping;

  const [firstName, lastName] = parseName(userName, userFirstName, userLastName);

  // Define visible fields with their values and editability
  const visibleEntries: [string, string, boolean][] = [
    ["_firstName", firstName, !isValidString(userFirstName)],
    ["_lastName", lastName, !isValidString(userLastName)],
    ["_email", userEmail ?? "", !isValidString(userEmail)],
    ["School", organizationName ?? "", true], // School is always editable
  ];

  return Object.fromEntries(
    visibleEntries.map(([key, value, isEditableByEndUser]) => [
      key,
      { value, isEditableByEndUser },
    ]),
  );
};

/**
 * Transforms contact form parameters into pre-chat field configuration.
 * This is the main entry point for preparing form data to send to Salesforce.
 *
 * @param contactFormParams - Array of key-value pairs from the contact form
 * @returns Object containing both visible and hidden fields for the chat system
 */
export const getPreChatFields = (contactFormParams: { key: string; value: string }[]) => {
  // Convert array of {key, value} pairs to a lookup object
  const supportInfoMapping = Object.fromEntries(
    contactFormParams.map(({ key, value }) => [key, value]),
  );

  return {
    visibleFields: mapVisibleFields(supportInfoMapping),
    hiddenFields: mapHiddenFields(supportInfoMapping),
  };
};

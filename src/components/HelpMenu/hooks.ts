import React from "react";

export interface ApiError {
  type: string;
  detail: string;
}

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

export interface ChatConfiguration {
  chatEmbedPath: string;
  businessHours?: BusinessHoursResponse;
  err?: ApiError;
}

// map assignable field name to Salesforce field name
// These are currently defined in:
// assignments/packages/frontend/src/components/SupportInfo.tsx
const hiddenFieldsMapping = [
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

const mapHiddenFields = (supportInfoMapping: { [key: string]: string }) =>
  Object.fromEntries(
    hiddenFieldsMapping
      .map(([fromKey, toKey]) => [toKey, supportInfoMapping[fromKey]])
      .filter(
        (tuple): tuple is [string, string] =>
          typeof tuple[0] === "string" && typeof tuple[1] == "string",
      ),
  );

const mapVisibleFields = (supportInfoMapping: { [key: string]: string }) => {
  // userFirstName, userLastName are from accounts
  const { userName, userFirstName, userLastName, userEmail, organizationName } = supportInfoMapping;
  const nameParts = userName?.split(" ") ?? [];
  // Multiple first names?
  const firstName = userFirstName ?? nameParts.slice(0, -1).join(" ");
  // Hopefully no middle name
  const lastName = userLastName ?? nameParts.slice(-1).join("");
  // Fields that start with '_' are standard, non-custom fields
  // If we don't get the info from accounts, then the field should be editable
  const isValid = (s: unknown) => typeof s === 'string' && s.length > 0;
  const visibleEntries: [string, string, boolean][] = [
    ["_firstName", firstName, !isValid(userFirstName)],
    ["_lastName", lastName, !isValid(userLastName)],
    ["_email", userEmail ?? "", !isValid(userEmail)],
    ["School", organizationName ?? "", true],
  ];
  return Object.fromEntries(
    visibleEntries.map(([key, value, isEditableByEndUser]) => [
      key,
      { value, isEditableByEndUser },
    ]),
  );
};

export const getPreChatFields = (contactFormParams: { key: string; value: string }[]) => {
  const supportInfoMapping = Object.fromEntries(
    contactFormParams.map(({ key, value }) => [key, value]),
  );
  return {
    visibleFields: mapVisibleFields(supportInfoMapping),
    hiddenFields: mapHiddenFields(supportInfoMapping),
  };
};

export const useBusinessHours = (
  hoursResponse: ChatConfiguration["businessHours"] | undefined,
  gracePeriod = 5_000,
) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [hours, setHours] = React.useState<BusinessHours | undefined>();

  React.useEffect(() => {
    let nextState: BusinessHours | undefined;
    if (hoursResponse !== undefined) {
      const now = Date.now();
      const { businessHoursInfo: { businessHours } } = hoursResponse;
      nextState = businessHours.find(
        (h) => h.startTime - gracePeriod <= now && now < h.endTime + gracePeriod,
      );
    }
    clearTimeout(timeoutRef.current);
    if (nextState !== undefined) {
      const dT = Math.max(nextState.endTime - Date.now(), 1000);
      // Unset business hours at the end time
      timeoutRef.current = setTimeout(() => {
        setHours(undefined);
      }, dT);
    }
    setHours((prev) =>
      prev !== undefined &&
      prev.startTime === nextState?.startTime &&
      prev.endTime === nextState?.endTime
        ? prev
        : nextState,
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [hoursResponse, gracePeriod]);

  return hours;
};

export const formatBusinessHoursRange = (startTime: number, endTime: number) => {
  // Ensure we are working with a real Date instance
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Bail if the timestamps are not valid numbers
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "";

  try {
    const baseOptions: Parameters<typeof Intl.DateTimeFormat>[1] = {
      hour: "numeric",
      hour12: true,
    };
    const start = new Intl.DateTimeFormat(undefined, baseOptions).format(startDate);
    const end = new Intl.DateTimeFormat(undefined, {
      ...baseOptions,
      timeZoneName: "short",
    }).format(endDate);
    // Ex: 9 AM - 5 PM CDT
    return `${start} - ${end}`;
  } catch (e) {
    console.warn("Intl.DateTimeFormat not available, falling back to simple hours.", e);
    // Ex: 9 - 17
    return `${startDate.getHours()} - ${endDate.getHours()}`;
  }
};

export const useHoursRange = (
  businessHours: ChatConfiguration["businessHours"],
  gracePeriod?: number,
) => {
  const hours = useBusinessHours(businessHours, gracePeriod);
  return React.useMemo(() => (
    hours ? formatBusinessHoursRange(hours.startTime, hours.endTime) : undefined
  ), [hours]);
};

export const useChatController = (
  path: string | undefined,
  preChatFields: ReturnType<typeof getPreChatFields>,
) => {
  const popup = React.useRef<null | Window>(null);
  const popupOrigin = React.useMemo(() => (path ? new URL(path).origin : undefined), [path]);

  const sendMessage = React.useCallback(
    <T>(message: { type: string; data?: T }) => {
      if (!popup.current || !popupOrigin) return;
      popup.current.postMessage(message, popupOrigin);
    },
    [popupOrigin],
  );

  const sendPreChatFields = React.useCallback(() => {
    sendMessage({ type: "preChatFields", data: preChatFields });
  }, [sendMessage, preChatFields]);

  const init = React.useCallback(() => {
    sendPreChatFields();
    sendMessage({ type: "open" });
  }, [sendMessage, sendPreChatFields]);

  const openChat = React.useCallback(() => {
    if (popup.current || !path) return;
    // const { origin } = new URL(path);
    const width = 500;
    const height = 800;

    // Calculate Bottom-Right Position
    const rightX = (window.screenX || window.screenLeft) + window.outerWidth;
    const bottomY = (window.screenY || window.screenTop) + window.outerHeight;
    const top = bottomY - height;
    const left = rightX - width;

    const options = Object.entries({ popup: true, width, height, top, left })
      .map(([k, v]) => `${k}=${v}`)
      .join(",");
    popup.current = window.open(path, "_blank", options);

    if (!popup.current) return;

    const handleMessage = (e: MessageEvent) => {
      const {
        source,
        data: { type },
      } = e;
      if (source !== popup.current) return;
      if (type === "ready") {
        init();
      }
    };

    const checkClosed = setInterval(() => {
      if (popup.current?.closed) {
        window.removeEventListener("message", handleMessage, false);
        popup.current = null;
        clearInterval(checkClosed);
      }
    }, 500);

    window.addEventListener("message", handleMessage, false);
  }, [path, init]);

  React.useEffect(() => {
    sendPreChatFields();
  }, [sendPreChatFields]);

  return path ? { openChat } : {};
};

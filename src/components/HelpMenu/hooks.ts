import React from "react";
import { embeddedChatEvents } from "./constants";

export interface EmbedInterface {
  prechatAPI: {
    setVisiblePrechatFields: (
      fields: {
        [key: string]: {
          value: string,
          isEditableByEndUser: boolean,
        };
      },
    ) => void;
    setHiddenPrechatFields: (fields: { [key: string]: string }) => void;
  };
  utilAPI: {
    launchChat: () => Promise<void>;
  };
  settings: {
    language: string;
    hideChatButtonOnLoad: boolean;
  };
  init: (
    orgId: string,
    app: string,
    deploymentURL: string,
    { scrt2URL }: { scrt2URL: string },
  ) => void;
}

export interface WindowWithEmbed extends Window {
  embeddedservice_bootstrap?: EmbedInterface;
}

export interface ChatEmbedServiceConfiguration {
  orgId: string;
  app: string;
  deploymentURL: string;
  scrt2URL: string;
  scriptUrl: string;
  businessHoursURL: string;
}

export interface BusinessHours {
  startTime: number;
  endTime: number;
}

export interface BusinessHoursResponse {
  businessHoursInfo: {
    businessHours: BusinessHours[];
  };
}

export interface ChatEmbed extends BusinessHours {
  openChat: () => void;
}

export const isBusinessHours = (x: unknown): x is BusinessHours => (
  typeof x === 'object' &&
  x !== null &&
  'startTime' in x &&
  typeof (x as any).startTime === 'number' &&
  'endTime' in x &&
  typeof (x as any).endTime === 'number'
);

export const isBusinessHoursArray = (x: unknown): x is BusinessHours[] =>
  Array.isArray(x) && x.every(isBusinessHours);

export const isBusinessHoursResponse = (x: unknown): x is BusinessHoursResponse => (
  typeof x === 'object' &&
  x !== null &&
  'businessHoursInfo' in x &&
  typeof (x as any).businessHoursInfo === 'object' &&
  (x as any).businessHoursInfo !== null &&
  'businessHours' in (x as any).businessHoursInfo &&
  isBusinessHoursArray((x as any).businessHoursInfo.businessHours)
);

const getEmbeddedService = () => (window as WindowWithEmbed).embeddedservice_bootstrap;

export const useScript = (src: string) => {
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    // Already in the DOM? No need to add it again.
    if (document.querySelector(`script[src="${src}"]`)) {
      setReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      setReady(true);
      setError(null);
    }
    script.onerror = () => {
      setError(new Error(`Failed to load ${src}`));
      setReady(false);
    };
    document.body.appendChild(script);
  }, [src]);

  return { ready, error };
};

export const getChatEmbed = ({ businessHoursInfo }: BusinessHoursResponse) => {
  const now = Date.now();
  const gracePeriod = 5_000;
  const todaysHours = businessHoursInfo.businessHours
    .find(({ startTime, endTime }) => startTime - gracePeriod <= now && now < endTime + gracePeriod)

  const openChat = async () => {
    const svc = getEmbeddedService();
    if (!svc) return undefined;
    return await svc.utilAPI.launchChat();
  }

  return todaysHours ? { ...todaysHours, openChat } : null;
};

export const usePreChatFields = (contactFormParams: { key: string, value: string }[]) => {
  const { visibleFields, hiddenFields } = React.useMemo(() => {
    // map assignable field name to Salesforce field name
    // These are currently defined in:
    // assignments/packages/frontend/src/components/SupportInfo.tsx
    const hiddenFieldsMapping = [
      ['assignmentId', 'Assignment_Id'],
      ['contextId', 'Context_Id'],
      ['deploymentId', 'Deployment_Id'],
      ['platformId', 'Platform_Id'],
      ['registration', 'Registration_Id'],
      ['schoolName', 'School'],
      ['userEmail', 'Email'],
      ['userFirstName', 'First_Name'],
      ['userId', 'OpenStax_UUID'],
      ['userLastName', 'Last_Name'],
    ];
    const supportInfoMapping = Object.fromEntries(
      contactFormParams.map(({key, value}) => [key, value])
    );
    const hiddenFields = Object.fromEntries(
      hiddenFieldsMapping
        .map(([fromKey, toKey]) => [toKey, supportInfoMapping[fromKey]])
        .filter((tuple): tuple is [string, string] => tuple[1] !== undefined)
    );
    const { userName, userFirstName, userLastName, userEmail } = supportInfoMapping;
    const nameParts = userName?.split(' ') ?? [];
    // Multiple first names?
    const firstName = userFirstName ?? nameParts.slice(0, -1).join(' ');
    // Hopefully no middle name
    const lastName = userLastName ?? nameParts.slice(-1).join('');
    // Unless we used the name from accounts, assume we are wrong and allow
    // the user to edit it
    const visibleFields = {
      _firstName: {
        value: firstName,
        isEditableByEndUser: userFirstName === undefined,
      },
      _lastName: {
        value: lastName,
        isEditableByEndUser: userLastName === undefined,
      },
      _email: {
        value: userEmail ?? '',
        isEditableByEndUser: userEmail === undefined,
      },
    };
    return { visibleFields, hiddenFields };
  }, [contactFormParams]);
  const ready = React.useRef(false);
  
  const onReady = React.useCallback(() => {
    const svc = getEmbeddedService();
    ready.current = true;
    if (!svc) return;
    svc.prechatAPI.setVisiblePrechatFields(visibleFields);
    svc.prechatAPI.setHiddenPrechatFields(hiddenFields);
  }, [visibleFields, hiddenFields]);

  React.useEffect(() => {
    // Ready -> set fields -> fields changed -> set fields again
    if (ready.current) onReady();
    window.addEventListener(embeddedChatEvents.READY, onReady);
    return () => {
      window.removeEventListener(embeddedChatEvents.READY, onReady);
    }
  }, [onReady]);
};

export const useBusinessHours = (businessHoursURL: string, timeout: number) => {
  const [hours, setHours] = React.useState<BusinessHoursResponse | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const isFetchingRef = React.useRef(false);
  const lastFetchedAtRef = React.useRef<number | null>(null);
  const abortCtrlRef = React.useRef<AbortController | null>(null);

  const doFetch = React.useCallback(async () => {
    // abort any previous request
    abortCtrlRef.current?.abort();

    const controller = new AbortController();
    abortCtrlRef.current = controller;

    isFetchingRef.current = true;
    setError(null);

    try {
      const res = await fetch(businessHoursURL, controller);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (!isBusinessHoursResponse(data)) {
        setError(new Error('Invalid business hours response'));
        setHours(null);
      } else {
        setHours(data);
      }

      lastFetchedAtRef.current = Date.now();
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      setError(err);
      setHours(null);
    } finally {
      isFetchingRef.current = false;
    }
  }, [businessHoursURL]);

  const handleStart = React.useCallback(() => {
      if (isFetchingRef.current) return;

      const now = Date.now();
      const last = lastFetchedAtRef.current;
      if (last && now - last < timeout) {
        return;
      }

      doFetch();
  }, [doFetch, timeout]);

  const handleEnd = React.useCallback(() => {
    setHours(null);
  }, []);

  React.useEffect(() => {
    const init = () => {
      handleStart();
      // This ready event happens every time the chat is closed
      // Avoid unnecessary refetching by only handling it once
      window.removeEventListener(embeddedChatEvents.READY, init);
    };
    window.addEventListener(embeddedChatEvents.READY, init);
    window.addEventListener(embeddedChatEvents.BUSINESS_HOURS_STARTED, handleStart);
    window.addEventListener(embeddedChatEvents.BUSINESS_HOURS_ENDED, handleEnd);
    return () => {
      abortCtrlRef.current?.abort();
      window.removeEventListener(embeddedChatEvents.READY, init);
      window.removeEventListener(embeddedChatEvents.BUSINESS_HOURS_STARTED, handleStart);
      window.removeEventListener(embeddedChatEvents.BUSINESS_HOURS_ENDED, handleEnd);
    }
  }, [handleStart, handleEnd]);

  return { hours, error };
};

export const useEmbeddedChatService = ({
  orgId,
  app,
  deploymentURL,
  scrt2URL,
  scriptUrl,
  businessHoursURL,
}: ChatEmbedServiceConfiguration) => {
  const { ready: scriptLoaded, error: scriptError } = useScript(scriptUrl);
  const { hours, error: fetchError } = useBusinessHours(businessHoursURL, 5000);
  const chatEmbed = React.useMemo(() => hours && getChatEmbed(hours), [hours]);

  React.useEffect(() => {
    if (!scriptLoaded || typeof window === 'undefined') return;

    try {
      const svc = getEmbeddedService();
      if (!svc) throw new Error('Embed service unavailable');
      svc.settings.language = 'en_US';
      svc.settings.hideChatButtonOnLoad = true;
      svc.init(orgId, app, deploymentURL, { scrt2URL });
    } catch (e) {
      /* istanbul ignore next */
      console.error('Error initializing Embedded Messaging', e);
    }

  }, [scriptLoaded, orgId, app, deploymentURL, scrt2URL]);

  return { chatEmbed, error: scriptError ?? fetchError };
};

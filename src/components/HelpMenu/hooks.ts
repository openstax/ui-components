import React from "react";
import { embeddedChatEvents } from "./constants";

export interface WindowWithEmbed extends Window {
  embeddedservice_bootstrap?: any;
}

export interface ChatEmbedServiceConfiguration {
  orgId: string,
  app: string,
  deploymentURL: string,
  scrt2URL: string,
  scriptUrl: string,
  businessHoursURL: string,
}

export interface BusinessHours {
  startTime: number;
  endTime: number;
}

export interface BusinessHoursResponse {
  businessHoursInfo: {
    isActive: boolean;
    businessHours: BusinessHours[];
  };
}

export interface ChatEmbed extends BusinessHours {
  openChat: () => void;
}

export const useScript = (src: string) => {
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const scriptRef = React.useRef<HTMLScriptElement | null>(null);

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
    scriptRef.current = script;
  }, [src]);

  return { ready, error };
};

export const getBusinessHours = async (
  businessHoursURL: string,
  signal?: AbortSignal
) => {
  const res = await fetch(businessHoursURL, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as BusinessHoursResponse;
};

export const getChatEmbed = async (businessHoursURL: string, signal?: AbortSignal) => {
  const { businessHoursInfo } = await getBusinessHours(businessHoursURL, signal);

  const today = new Date().toISOString().slice(0, 10);
  const todaysHours = businessHoursInfo.businessHours.find(
    (h: BusinessHours) => today === new Date(h.startTime).toISOString().slice(0, 10)
  );

  const openChat = async () => {
    const svc = (window as WindowWithEmbed).embeddedservice_bootstrap;
    if (!svc) return undefined;
    return await svc.utilAPI.launchChat();
  }

  return !businessHoursInfo.isActive || todaysHours === undefined
    ? null
    : { ...todaysHours, openChat };
};

export const useEmbeddedChatService = ({
  orgId,
  app,
  deploymentURL,
  scrt2URL,
  scriptUrl,
  businessHoursURL,
}: ChatEmbedServiceConfiguration) => {
  const [chatEmbed, setChatEmbed] = React.useState<ChatEmbed | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [fetchError, setFetchError] = React.useState<Error | null>(null);

  const { ready: scriptLoaded, error: scriptError } = useScript(scriptUrl);
  const controllerRef = React.useRef<AbortController | null>(null);

  const updateChatEmbed = React.useCallback(({ signal }: AbortController) => {
    return () => {
      setLoading(true);
      setFetchError(null);

      return getChatEmbed(businessHoursURL, signal)
        .then(setChatEmbed)
        .catch((err) => {
          /* istanbul ignore next */
          if ((err as any).name !== "AbortError") {
            setFetchError(err);
            setChatEmbed(null);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [businessHoursURL]);

  React.useEffect(() => {
    if (!scriptLoaded || typeof window === 'undefined') return;

    controllerRef.current = new AbortController();
    const update = updateChatEmbed(controllerRef.current);

    // Don't try to set business hours until we know the chat is ready
    window.addEventListener(embeddedChatEvents.READY, update);
    window.addEventListener(embeddedChatEvents.BUSINESS_HOURS_STARTED, update);
    window.addEventListener(embeddedChatEvents.BUSINESS_HOURS_ENDED, update);

    try {
      // `embeddedservice_bootstrap` is injected by the script we just added
      const svc = (window as WindowWithEmbed).embeddedservice_bootstrap;
      svc.settings.language = 'en_US';
      svc.settings.hideChatButtonOnLoad = true;
      svc.init(orgId, app, deploymentURL, { scrt2URL });
    } catch (e) {
      /* istanbul ignore next */
      console.error('Error initializing Embedded Messaging', e);
    }

    return () => {
      controllerRef.current?.abort();
      controllerRef.current = null;
      window.removeEventListener(embeddedChatEvents.READY, update);
      window.removeEventListener(embeddedChatEvents.BUSINESS_HOURS_STARTED, update);
      window.removeEventListener(embeddedChatEvents.BUSINESS_HOURS_ENDED, update);
    };
  }, [scriptLoaded, updateChatEmbed, orgId, app, deploymentURL, scrt2URL]);

  return { chatEmbed, loading, error: scriptError ?? fetchError };
}

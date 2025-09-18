import React from 'react';
import { NavBarMenuButton, NavBarMenuItem } from './NavBarMenuButtons';
import { colors } from '../theme';
import styled from 'styled-components';
import { BodyPortal } from './BodyPortal';

export const HelpMenuButton = styled(NavBarMenuButton)`
  color: ${colors.palette.gray};
  font-size: 1.4rem;
`;

export const HelpMenuItem = styled(NavBarMenuItem)`
  color: ${colors.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${colors.palette.neutralLighter};
  }
  :hover {
    color: ${colors.palette.neutralDarker};
    text-decoration: none;
  }
`;

const IframeWrapper = styled(BodyPortal)`
  background-color: ${colors.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`;

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;

function PutAway({onClick, className}: {onClick: () => void; className?: string}) {
  return (
    <div className={className}>
      <button type='button' onClick={onClick} aria-label='close form'>
          Back
      </button>
    </div>
  );
}

const StyledPutAway = styled(PutAway)`
  border-top: 0.1rem solid ${colors.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${colors.palette.neutralBright};
  padding-left: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;

  @media(min-width: 56em) {
    padding: 0 calc(50vw - 43rem);
  }

  button {
    height: 3rem;
    background-color: ${colors.palette.white};
    border: 1px solid ${colors.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`;

/**
 * SVG icon representing a "new tab" indicator
 * Used to visually indicate when a link or action will open in a new tab/window
 * 
 * Dimensions: 12x11 pixels
 * Uses theme color: colors.palette.neutralThin
 */
export const NewTabIcon = () => (
  <svg
    role='img'
    width='12'
    height='11'
    viewBox='0 0 12 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>new tab</title>
    <path
      d='M12 0.832214V3.49855C12 3.94565 11.4592 4.1648 11.1464 3.85211L10.4025 3.10817L5.32915 8.18157C5.13387 8.37684 4.81731 8.37684 4.62204 8.18157L4.15065 7.71017C3.95538 7.5149 3.95538 7.19832 4.15065 7.00307L9.22408 1.92963L8.48027 1.18578C8.16629 0.871798 8.38867 0.332214 8.83383 0.332214H11.5C11.7761 0.332214 12 0.556069 12 0.832214ZM8.47977 5.97376L8.14644 6.30709C8.10001 6.35352 8.06318 6.40864 8.03805 6.46931C8.01293 6.52997 8 6.59499 8 6.66065V9.66555H1.33333V2.99888H6.83333C6.96594 2.99887 7.0931 2.9462 7.18688 2.85244L7.52021 2.51911C7.83519 2.20411 7.6121 1.66555 7.16667 1.66555H1C0.447708 1.66555 0 2.11326 0 2.66555V9.99888C0 10.5512 0.447708 10.9989 1 10.9989H8.33333C8.88562 10.9989 9.33333 10.5512 9.33333 9.99888V6.3273C9.33333 5.88184 8.79475 5.65876 8.47977 5.97376Z'
      fill={colors.palette.neutralThin}
    />
  </svg>
);

export interface HelpMenuProps {
  contactFormParams: { key: string; value: string }[];
  children?: React.ReactNode;
}

declare global {
  interface Window {
    embeddedservice_bootstrap?: any;
  }
}
export interface BusinessHours {
  startTime: number;
  endTime: number;
}

export interface ChatContext extends BusinessHours {
  openChat: () => void;
}

function useScript(src: string): boolean {
  const [ready, setReady] = React.useState(false);
  const scriptRef = React.useRef<HTMLScriptElement | null>(null);

  React.useEffect(() => {
    // Already in the DOM? No need to add it again.
    if (document.querySelector(`script[src="${src}"]`)) {
      setReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => setReady(true);
    script.onerror = () => console.warn(`Failed to load ${src}`);
    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      scriptRef.current?.remove();
    };
  }, [src]);

  return ready;
}

export function useWebMessagingDeployment() {
  const [chatContext, setChatContext] = React.useState<ChatContext | null>(null);
  const orgId = '00DU0000000Kwch';
  const app = 'Web_Messaging_Deployment';
  const deployment = 'ESWWebMessagingDeployme1716235390398';
  const scrt2URL = 'https://openstax.my.salesforce-scrt.com';
  const scriptUrl =
    `https://openstax.my.site.com/${deployment}/assets/js/bootstrap.min.js`;

  const scriptLoaded = useScript(scriptUrl);

  React.useEffect(() => {
    if (!scriptLoaded || typeof window === 'undefined') return;

    let cancelled = false;

    const openChat = () => {
      const svc = window.embeddedservice_bootstrap
      svc.utilAPI.launchChat()
        .catch((err: Error) => {
          console.error(err)
        })
    }

    // Get the business hours from salesforce
    const fetchHours = async () => {
      try {
        const res = await fetch(
          `${scrt2URL}/embeddedservice/v1/businesshours?orgId=${orgId}&esConfigName=${app}`
        );
        const { businessHoursInfo }: {
          businessHoursInfo: {
            isActive: boolean
            businessHours: BusinessHours[]
          }
        } = await res.json();

        if (cancelled) return;

        const today = (new Date()).toISOString().slice(0, 10);
        const todaysHours = businessHoursInfo.businessHours.find(
          (h: BusinessHours) => today === (new Date(h.startTime)).toISOString().slice(0, 10)
        );
        const newChatContext = !businessHoursInfo.isActive || todaysHours === undefined
          ? null
          : { ...todaysHours, openChat }
        setChatContext(newChatContext);
      } catch (e) {
        if (!cancelled) {
          console.error('Error fetching business hours', e);
          setChatContext(null);
        }
      }
    };

    const handleBusinessHours = () => {
      void fetchHours();
    };

    // Don't try to set business hours until we know the chat is ready
    window.addEventListener('onEmbeddedMessagingReady', handleBusinessHours);
    window.addEventListener('onEmbeddedMessagingBusinessHoursStarted', handleBusinessHours);
    window.addEventListener('onEmbeddedMessagingBusinessHoursEnded', handleBusinessHours);

    try {
      // `embeddedservice_bootstrap` is injected by the script we just added
      const svc = window.embeddedservice_bootstrap;
      svc.settings.language = 'en_US';
      svc.settings.hideChatButtonOnLoad = true;
      svc.init(orgId, app, `https://openstax.my.site.com/${deployment}`, { scrt2URL });
    } catch (e) {
      console.error('Error initializing Embedded Messaging', e);
    }

    return () => {
      cancelled = true;
      window.removeEventListener('onEmbeddedMessagingReady', handleBusinessHours);
      window.removeEventListener('onEmbeddedMessagingBusinessHoursStarted', handleBusinessHours);
      window.removeEventListener('onEmbeddedMessagingBusinessHoursEnded', handleBusinessHours);
    };
  }, [scriptLoaded, orgId, app, scrt2URL]);

  return { chatContext };
}

const formatBusinessHoursRange = (startTime: number, endTime: number) => {
  // Ensure we are working with a real Date instance
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Bail if the timestamps are not valid numbers
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return '';

  try {
    const baseOptions: Parameters<typeof Intl.DateTimeFormat>[1] = {
      hour: 'numeric', hour12: true
    };
    const start = new Intl.DateTimeFormat(undefined, baseOptions).format(startDate);
    const end = new Intl.DateTimeFormat(undefined, {
      ...baseOptions, timeZoneName: 'short'
    }).format(endDate);
    // Ex: 9 AM - 5 PM CDT
    return `${start} - ${end}`;
  } catch (e) {
    console.warn(
      'Intl.DateTimeFormat not available, falling back to simple hours.', e
    );
    return `${startDate.getHours()} - ${endDate.getHours()}`;
  }
}

export const HelpMenu: React.FC<HelpMenuProps> = ({ contactFormParams, children }) => {
  const [showIframe, setShowIframe] = React.useState<string | undefined>();
  const { chatContext } = useWebMessagingDeployment();

  const contactFormUrl = React.useMemo(() => {
    const formUrl = 'https://openstax.org/embedded/contact';
    const params = contactFormParams
      .map(({key, value}) => encodeURIComponent(`${key}=${value}`))
      .map((p) => `body=${p}`)
      .join('&');

    return `${formUrl}?${params}`;
  }, [contactFormParams]);

  const hoursRange = React.useMemo(
    () => chatContext == null ? '' : formatBusinessHoursRange(
      chatContext.startTime, chatContext.endTime
    ), [chatContext]
  );

  React.useEffect(() => {
    const closeIt = ({data}: MessageEvent) => {
      if (data === 'CONTACT_FORM_SUBMITTED') {
        setShowIframe(undefined);
      }
    };

    window.addEventListener('message', closeIt, false);
    return () => window.removeEventListener('message', closeIt, false);
  }, []);

  return (
    <>
      <HelpMenuButton label='Help' aria-label='Help menu'>
        {chatContext !== null
          ? (
            <HelpMenuItem onAction={() => chatContext.openChat()}>
              Chat With Us ({hoursRange})
            </HelpMenuItem>
          ) : (
            <HelpMenuItem onAction={() => setShowIframe(contactFormUrl)}>
              Report an issue
            </HelpMenuItem>
          )
        }
        {children}
      </HelpMenuButton>

      {showIframe && (
        <IframeWrapper>
          <Iframe title='Contact form' src={showIframe} />
          <StyledPutAway onClick={() => setShowIframe(undefined)} />
        </IframeWrapper>
      )}
    </>
  );
};

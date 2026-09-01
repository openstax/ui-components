import React from 'react';
import classNames from 'classnames';
import { composeRenderProps } from 'react-aria-components';
import { NavBarBaseButtonProps, NavBarMenuButton, NavBarMenuItem } from '../NavBarMenuButtons';
import { colors } from '../../theme';
import { BodyPortal } from '../BodyPortal';
import { CSSPropertiesWithVariables } from '../../types';
import { ChatConfiguration, getPreChatFields, useChatController, useHoursRange } from './hooks';
import './HelpMenu.css';

export const HelpMenuButton = ({ className, style, ...props }: NavBarBaseButtonProps) => {
  // composeRenderProps normalises the object and render-callback forms of style so a
  // caller-supplied callback is merged rather than dropped. The caller still spreads last
  // and can override the CSS variables set here.
  const buttonStyle = composeRenderProps(
    style,
    (resolvedStyle): CSSPropertiesWithVariables => ({
      '--help-menu-button-color': colors.palette.gray,
      ...resolvedStyle
    })
  );

  return (
    <NavBarMenuButton
      className={composeRenderProps(className, (resolved) => classNames('help-menu-button', resolved))}
      style={buttonStyle}
      {...props}
    />
  );
};

export const HelpMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NavBarMenuItem>
>(({ className, style, ...props }, ref) => {
  // Deliberately a spread rather than composeRenderProps: see the note on
  // ProfileMenuItem. NavBarMenuItem spreads style as well, so composing only here would
  // lose these variables; both need composing together once CORE-2710 (#137) is on main.
  const menuItemStyle: CSSPropertiesWithVariables = {
    '--help-menu-item-color': colors.palette.neutralDarker,
    '--help-menu-item-focus-bg': colors.palette.neutralLighter,
    ...style
  };

  return (
    <NavBarMenuItem
      ref={ref}
      className={composeRenderProps(className, (resolved) => classNames('help-menu-item', resolved))}
      style={menuItemStyle}
      {...props}
    />
  );
});
HelpMenuItem.displayName = 'HelpMenuItem';

const iframeWrapperStyle: CSSPropertiesWithVariables = {
  '--help-menu-iframe-wrapper-bg': colors.palette.neutralBright,
};

const putAwayStyle: CSSPropertiesWithVariables = {
  '--help-menu-put-away-border-color': colors.palette.pale,
  '--help-menu-put-away-bg': colors.palette.neutralBright,
  '--help-menu-put-away-button-bg': colors.palette.white,
  '--help-menu-put-away-button-border-color': colors.palette.pale,
};

function PutAway({onClick, className}: {onClick: () => void; className?: string}) {
  return (
    <div className={classNames('help-menu-put-away', className)} style={putAwayStyle}>
      <button type='button' onClick={onClick} aria-label='close form'>
          Back
      </button>
    </div>
  );
}

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
  chatConfig?: Partial<ChatConfiguration>;
  children?: React.ReactNode;
}

export const HelpMenu: React.FC<HelpMenuProps> = ({ contactFormParams, chatConfig, children }) => {
  const [showIframe, setShowIframe] = React.useState<string | undefined>();
  const { chatEmbedPath, businessHours, err: chatError } = React.useMemo(() => (
    chatConfig ?? {}
  ), [chatConfig]);
  const hoursRange = useHoursRange(businessHours);
  const preChatFields = React.useMemo(() => (
    getPreChatFields(contactFormParams)
  ), [contactFormParams]);
  const { openChat } = useChatController(chatEmbedPath, preChatFields);

  const contactFormUrl = React.useMemo(() => {
    const formUrl = 'https://openstax.org/embedded/contact';
    const params = contactFormParams
      .map(({key, value}) => encodeURIComponent(`${key}=${value}`))
      .map((p) => `body=${p}`)
      .join('&');

    return `${formUrl}?${params}`;
  }, [contactFormParams]);
  
  React.useEffect(() => {
    const closeIt = ({data}: MessageEvent) => {
      if (data === 'CONTACT_FORM_SUBMITTED') {
        setShowIframe(undefined);
      }
    };

    window.addEventListener('message', closeIt, false);
    return () => window.removeEventListener('message', closeIt, false);
  }, []);

  if (chatError) {
    // Silently fail while leaving some indication as to why
    console.error('Error getting chat config', chatError);
  }

  return (
    <>
      <HelpMenuButton label='Help' aria-label='Help menu'>
        {hoursRange && openChat
          ? (
            <HelpMenuItem onAction={() => openChat()}>
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
        <BodyPortal className='help-menu-iframe-wrapper' style={iframeWrapperStyle}>
          <iframe className='help-menu-iframe' title='Contact form' src={showIframe} />
          <PutAway onClick={() => setShowIframe(undefined)} />
        </BodyPortal>
      )}
    </>
  );
};

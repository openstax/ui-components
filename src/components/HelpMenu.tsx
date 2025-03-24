import React from 'react';
import { NavBarMenuButton, NavBarMenuItem } from './NavBarMenuButtons';
import { colors } from '../theme';
import styled from 'styled-components';

export const styledMenu = {
  Button: styled(NavBarMenuButton)`
    color: ${colors.palette.gray};
    font-size: 1.4rem;
  `,
  Item: styled(NavBarMenuItem)`
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
  `,
};

const IframeWrapper = styled.div`
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
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`;

const newTabIcon = <svg
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
    fill='#6F6F6F'
  />
</svg>;

export const useHelpMenu = (actions: {label: string; callback: () => void}[] = []) => {
  const [showIframe, setShowIframe] = React.useState<string | undefined>();

  function HelpMenu({contactFormParams}: {contactFormParams: { key: string; value: string }[]}) {
    const contactFormUrl = React.useMemo(() => {
      const formUrl = 'https://openstax.org/embedded/contact';
      const params = contactFormParams
        .map(({key, value}) => encodeURIComponent(`${key}=${value}`))
        .map((p) => `body=${p}`)
        .join('&');

      return `${formUrl}?${params}`;
    }, [contactFormParams]);

    return (
      <>
        <styledMenu.Button label='Help' aria-label='Help menu'>
          {actions.map((action, i) => <styledMenu.Item key={i} onAction={action.callback}>
            {action.label}
          </styledMenu.Item>
          )}
          <styledMenu.Item
            onAction={() => setShowIframe(contactFormUrl)}
          >
            Report an issue
          </styledMenu.Item>
          <styledMenu.Item
            href='https://help.openstax.org/s/global-search/assignable'
            target='_blank'
          >
            Support center&nbsp;
            {newTabIcon}
          </styledMenu.Item>
          <styledMenu.Item
            href='https://openstax.org/accessibility-statement'
            target='_blank'
          >
            Accessibility statement&nbsp;
            {newTabIcon}
          </styledMenu.Item>
          <styledMenu.Item
            onAction={() => {
              window.parent.postMessage({type: 'TriggerConsentModalMessage'}, '*');
            }}
          >
            Cookie settings
          </styledMenu.Item>
        </styledMenu.Button>
      </>
    );
  }

  function ContactFormIframe() {
    React.useEffect(
      () => {
        const closeIt = ({data}: MessageEvent) => {
          if (data === 'CONTACT_FORM_SUBMITTED') {
            setShowIframe(undefined);
          }
        };

        window.addEventListener('message', closeIt, false);

        return () => window.removeEventListener('message', closeIt, false);
      },
      []
    );

    if (!showIframe) {
      return null;
    }

    return (
      <IframeWrapper>
        <Iframe title='Contact form' src={showIframe} />
        <StyledPutAway onClick={() => setShowIframe(undefined)} />
      </IframeWrapper>
    );
  }

  return [HelpMenu, ContactFormIframe] as const;
};

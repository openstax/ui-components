import React from 'react';
import { ButtonLink } from "./Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .cky-btn-revisit { display: none; }
`;

type ManageCookiesLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  wrapper?: (button: React.ReactElement) => React.ReactElement;
};

// documentation for this at https://www.cookieyes.com/documentation/change-cookie-consent-using-cookieyes/
export const ManageCookiesLink = ({children, className, wrapper, ...props}: ManageCookiesLinkProps) => {
  const inBrowser = typeof window === 'object';
  const [cookieYesLoaded, setCookieYesLoaded] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const observerRef = React.useRef<MutationObserver | null>(null);

  React.useEffect(() => {
    if (inBrowser && !cookieYesLoaded) {
      const handleCkyLoaded = () => setCookieYesLoaded(true);
      if ('getCkyConsent' in window) {
        handleCkyLoaded();
      } else {
        document.addEventListener('cookieyes_banner_load', handleCkyLoaded);
        return () => document.removeEventListener('cookieyes_banner_load', handleCkyLoaded);
      }
    }
    return;
  }, [cookieYesLoaded, inBrowser]);

  // Cleanup observer on unmount
  React.useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Store the button reference
    const button = buttonRef.current;

    // Call any existing onClick handler
    if (props.onClick) {
      props.onClick(e);
    }

    // Set up MutationObserver to detect when CookieYes modal closes
    if (button && inBrowser) {
      // Wait for the modal to appear in the DOM
      setTimeout(() => {
        const ckyModal = document.querySelector('.cky-modal');

        if (ckyModal) {
          // Clean up any existing observer
          if (observerRef.current) {
            observerRef.current.disconnect();
          }

          // Create new observer to watch for class changes
          observerRef.current = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target as HTMLElement;
                // Check if cky-modal-open class was removed
                if (!target.classList.contains('cky-modal-open')) {
                  // Modal closed - restore focus
                  button.focus();
                  // Clean up observer
                  if (observerRef.current) {
                    observerRef.current.disconnect();
                    observerRef.current = null;
                  }
                  break;
                }
              }
            }
          });

          // Start observing the modal element for class changes
          observerRef.current.observe(ckyModal, {
            attributes: true,
            attributeFilter: ['class']
          });
        }
      }, 100); // Small delay to allow CookieYes to add the modal to DOM
    }
  };

  if (!inBrowser) { return <><GlobalStyle /></>; }

  const button = <ButtonLink
    ref={buttonRef}
    className={`cky-banner-element${className ? ` ${className}` : ''}`}
    {...props}
    onClick={handleClick}
  >{children || 'Manage Cookies'}</ButtonLink>;

  return <>
    <GlobalStyle />
    {cookieYesLoaded
       ? typeof wrapper === 'function'
         ? wrapper(button)
         : button
       : null
    }
  </>;
};

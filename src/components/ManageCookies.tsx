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
  const timeoutIdRef = React.useRef<number | null>(null);
  const observerTimeoutIdRef = React.useRef<number | null>(null);

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

  // Helper function to clean up observer and timeouts
  const cleanupObserverAndTimeouts = React.useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (observerTimeoutIdRef.current !== null) {
      clearTimeout(observerTimeoutIdRef.current);
      observerTimeoutIdRef.current = null;
    }
  }, []);

  // Helper function to clear the initialization timeout
  const clearInitTimeout = React.useCallback(() => {
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  }, []);

  // Cleanup observer and timeouts on unmount
  React.useEffect(() => {
    return () => {
      clearInitTimeout();
      cleanupObserverAndTimeouts();
    };
  }, [clearInitTimeout, cleanupObserverAndTimeouts]);

  const onClick = props.onClick;
  const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    // Call any existing onClick handler
    onClick?.(e);

    // Early return if prerequisites aren't met
    if (!button || !inBrowser) {
      return;
    }

    // Clear any existing timeout from previous clicks
    clearInitTimeout();

    // Wait for the modal to appear in the DOM
    timeoutIdRef.current = window.setTimeout(() => {
      timeoutIdRef.current = null;
      const ckyModal = document.querySelector('.cky-modal');

      if (!ckyModal) {
        return;
      }

      // Clean up any existing observer and timeouts
      cleanupObserverAndTimeouts();

      // Create new observer to watch for class changes
      observerRef.current = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target as HTMLElement;
            // Check if cky-modal-open class was removed
            if (!target.classList.contains('cky-modal-open')) {
              // Modal closed - restore focus
              button.focus();
              // Clean up observer and safety timeout
              cleanupObserverAndTimeouts();
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

      // Safety timeout: disconnect observer after 10 seconds if modal never closes properly
      observerTimeoutIdRef.current = window.setTimeout(() => {
        cleanupObserverAndTimeouts();
      }, 10000);
    }, 100); // Small delay to allow CookieYes to add the modal to DOM
  }, [inBrowser, onClick, clearInitTimeout, cleanupObserverAndTimeouts]);

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

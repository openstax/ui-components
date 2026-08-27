import React from 'react';
import { ButtonLink } from "./Button";

const revisitStyleId = 'openstax-manage-cookies-style';
const revisitStyleCss = '.cky-btn-revisit { display: none; }';

// Every mounted ManageCookiesLink shares one style element. How many of them
// are relying on it is tracked on the element itself rather than in a module
// variable so the count can never disagree with what is in the document.
const getRevisitStyle = () =>
  document.head.querySelector<HTMLStyleElement>(`#${revisitStyleId}`);

const claimRevisitStyle = () => {
  const existing = getRevisitStyle();

  if (existing) {
    existing.dataset.mountCount = String(Number(existing.dataset.mountCount) + 1);
    return;
  }

  const style = document.createElement('style');
  style.id = revisitStyleId;
  style.textContent = revisitStyleCss;
  style.dataset.mountCount = '1';
  document.head.appendChild(style);
};

const releaseRevisitStyle = () => {
  const style = getRevisitStyle();

  if (!style) { return; }

  const remaining = Number(style.dataset.mountCount) - 1;

  if (remaining > 0) {
    style.dataset.mountCount = String(remaining);
  } else {
    style.remove();
  }
};

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

  // Inject global style to hide CookieYes revisit button when component mounts.
  // Layout effect in the browser so the rule applies before the first paint.
  const useIsomorphicLayoutEffect = inBrowser ? React.useLayoutEffect : React.useEffect;

  useIsomorphicLayoutEffect(() => {
    if (!inBrowser) return;

    claimRevisitStyle();

    return releaseRevisitStyle;
  }, [inBrowser]);

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

  // For SSR, render the style element inline to prevent flash of unstyled content
  if (!inBrowser) {
    return <style dangerouslySetInnerHTML={{ __html: revisitStyleCss }} />;
  }

  const button = <ButtonLink
    ref={buttonRef}
    className={`cky-banner-element${className ? ` ${className}` : ''}`}
    {...props}
    onClick={handleClick}
  >{children || 'Manage Cookies'}</ButtonLink>;

  return cookieYesLoaded
    ? typeof wrapper === 'function'
      ? wrapper(button)
      : button
    : null;
};

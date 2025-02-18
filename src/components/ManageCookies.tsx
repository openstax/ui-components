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
  }, [inBrowser]);

  if (!inBrowser) { return <><GlobalStyle /></>; }

  const button = <ButtonLink
    className={`cky-banner-element${className ? ` ${className}` : ''}`}
    {...props}
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

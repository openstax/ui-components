import React from 'react';
import { ButtonLink } from "./Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .osano-cm-widget { display: none; }
`

type ManageCookiesLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  wrapper?: (button: React.ReactElement) => React.ReactElement
}

// documentation for this at https://docs.osano.com/hiding-the-cookie-widget
export const ManageCookiesLink = (props: ManageCookiesLinkProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  const osano = typeof window === 'undefined' ? undefined : (window as any).Osano

  if (osano === undefined || osano.cm.mode === 'debug') {
    return null;
  }

  const button = <ButtonLink
    {...props}
    onClick={e => {
      osano.cm.showDrawer('osano-cm-dom-info-dialog-open')
      props.onClick?.(e)
    }}
  >{props.children || 'Manage Cookies'}</ButtonLink>;

  return <>
    <GlobalStyle />
    {typeof props.wrapper === 'function'
      ? props.wrapper(button)
      : button
    }
  </>
};

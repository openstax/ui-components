import React from 'react';
import { ButtonLink } from "./Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .osano-cm-widget { display: none; }
`

type ManageCookiesLinkProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  children?: (button: React.ReactElement) => React.ReactElement
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
  >Manage Cookies</ButtonLink>;

  return <>
    <GlobalStyle />
    {typeof props.children === 'function'
      ? props.children(button)
      : button
    }
  </>
};

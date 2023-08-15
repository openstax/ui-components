import React from 'react';
import { ButtonLink } from "./Button";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  .osano-cm-widget { display: none; }
`

// documentation for this at https://docs.osano.com/hiding-the-cookie-widget
export const ManageCookiesLink = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  const osano = typeof window === 'undefined' ? undefined : (window as any).Osano

  if (osano === undefined || osano.cm.mode === 'debug') {
    return null;
  }

  return <>
    <GlobalStyle />
    <ButtonLink
      {...props}
      onClick={e => {
        osano.cm.showDrawer('osano-cm-dom-info-dialog-open')
        props.onClick?.(e)
      }}
    >Manage Cookies</ButtonLink>
  </>
};

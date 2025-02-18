import React from 'react';
import styled from "styled-components";
import { ManageCookiesLink } from "./ManageCookies";

export const WithoutCookieYes = () => <>
  <div className="cky-btn-revisit">mock CookieYes cookie button</div>

  <h2>Standalone</h2>
  <ManageCookiesLink />

  <h2>Inside a styled container</h2>
  <SomeContainer>
    if there is some container like a footer or whatever that sets colors: <ManageCookiesLink />
  </SomeContainer>

  <h2>As a list item</h2>
  <ul>
    <li>use a function child to provide wrappers that will only be included if the link is shown</li>
    <ManageCookiesLink wrapper={button => <li>{button}</li>} />
  </ul>
</>;

const SomeContainer = styled.div`
  a, button {
    color: #ccc;

    &:hover {
      color: #000;
    }
  }
`;

export const WithCookieYes = () => {
  React.useEffect(() => {
    document.dispatchEvent(new CustomEvent('cookieyes_banner_load', {}));
  }, []);

  return <>
    <div className="cky-btn-revisit">mock CookieYes cookie button</div>

    <h2>Standalone</h2>
    <ManageCookiesLink />

    <h2>Inside a styled container</h2>
    <SomeContainer>
      if there is some container like a footer or whatever that sets colors: <ManageCookiesLink />
    </SomeContainer>

    <h2>As a list item</h2>
    <ul>
      <li>use a function child to provide wrappers that will only be included if the link is shown</li>
      <ManageCookiesLink wrapper={button => <li>{button}</li>} />
    </ul>
  </>;
};

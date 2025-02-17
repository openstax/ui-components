import React from 'react';
import styled from "styled-components";
import { ManageCookiesLink } from "./ManageCookies";

export const WithoutCookieYes = () => <>
  <div className="cky-btn-revisit">mock CookieYes cookie button</div>

  <ManageCookiesLink />

  <ul>
    <li>in a list</li>
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
    (window as any).getCkyConsent = jest.fn();
    return () => { delete (window as any).getCkyConsent }
  }, []);

  return <>
    <div className="cky-btn-revisit">mock CookieYes cookie button</div>

    <ManageCookiesLink />

    <SomeContainer>
      if there is some container like a footer or whatever that sets colors, it works
      <ManageCookiesLink />
    </SomeContainer>

    <ul>
      <li>in a list</li>
      <li>use a function child to provide wrappers that will only be included if the link is shown</li>
      <ManageCookiesLink wrapper={button => <li>{button}</li>} />
    </ul>
  </>;
};

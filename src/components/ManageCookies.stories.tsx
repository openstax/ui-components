import React from 'react';
import { ManageCookiesLink } from "./ManageCookies";
import "./ManageCookies.stories.css";
import "../theme/theme.css";

/*
 * CookieYes renders its revisit badge as a fixed circle wrapping a button, and ships
 * rules for both the wrapper and the button. Reproducing those competing rules is the
 * whole point of this mock - a bare .cky-btn-revisit div disappears under almost any
 * selector, so it cannot show whether ManageCookiesLink actually wins the cascade.
 */
const CookieYesBadge = () => <>
  <style>{`
    .cky-btn-revisit-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 15px;
      left: 15px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #d4450c;
      z-index: 999999;
    }
    .cky-btn-revisit-wrapper .cky-btn-revisit {
      display: flex;
      border: none;
      background: none;
      color: #fff;
      cursor: pointer;
    }
  `}</style>
  <div className="cky-btn-revisit-wrapper">
    <button className="cky-btn-revisit" aria-label="Cookie settings">C</button>
  </div>
</>;

export const WithoutCookieYes = () => <>
  <CookieYesBadge />

  <h2>Standalone</h2>
  <ManageCookiesLink />

  <h2>Inside a styled container</h2>
  <div className="story-cookies-container">
    if there is some container like a footer or whatever that sets colors: <ManageCookiesLink />
  </div>

  <h2>As a list item</h2>
  <ul>
    <li>use a function child to provide wrappers that will only be included if the link is shown</li>
    <ManageCookiesLink wrapper={button => <li>{button}</li>} />
  </ul>
</>;

export const WithCookieYes = () => {
  React.useEffect(() => {
    document.dispatchEvent(new CustomEvent('cookieyes_banner_load', {}));
  }, []);

  return <>
    <CookieYesBadge />

    <h2>Standalone</h2>
    <ManageCookiesLink />

    <h2>Inside a styled container</h2>
    <div className="story-cookies-container">
      if there is some container like a footer or whatever that sets colors: <ManageCookiesLink />
    </div>

    <h2>As a list item</h2>
    <ul>
      <li>use a function child to provide wrappers that will only be included if the link is shown</li>
      <ManageCookiesLink wrapper={button => <li>{button}</li>} />
    </ul>
  </>;
};

import React from 'react';
import { CSSPropertiesWithVariables } from '../types';
import classNames from 'classnames';
import * as Constants from '../constants';
import theme from '../theme';
import { BodyPortal } from './BodyPortal';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';
import './NavBar.css';

type Logo = React.HTMLProps<HTMLAnchorElement> & { alt?: string };

type NavBarProps = React.PropsWithChildren<{
  maxWidth?: number;
  navDesktopHeight?: number;
  navMobileHeight?: number;
  logo?: boolean | Logo;
  justifyContent?: string;
  ariaLabel?: string;
  className?: string;
  style?: CSSPropertiesWithVariables;
  /**
   * Element the bar is rendered as. Defaults to 'nav', which exposes a
   * navigation landmark. Use 'header' or 'div' when the bar holds no
   * navigation links, so it doesn't advertise navigation that isn't there.
   */
  tagName?: 'nav' | 'header' | 'div';
}>

export const NavBar = ({
  logo = false,
  maxWidth,
  navDesktopHeight,
  navMobileHeight,
  justifyContent,
  ariaLabel,
  className,
  style,
  tagName = 'nav',
  ...props
}: NavBarProps) => {
  const logoIsObject = typeof logo === 'object';
  const renderAnchor = logoIsObject && 'href' in logo;
  const {alt = 'OpenStax Logo', ...anchorProps} = logoIsObject ? logo : {};
  const logoComponent = logo ? <OpenstaxLogo alt={alt} /> : null;

  const wrapperStyle: CSSPropertiesWithVariables = {
    '--navbar-z-index': theme.zIndex.navbar,
    '--navbar-padding-mobile': `${theme.padding.navbar.mobile}rem`,
    '--navbar-padding-desktop': `${theme.padding.navbar.desktop}rem`,
    ...style
  };

  const barStyle: CSSPropertiesWithVariables = {
    '--navbar-max-width': maxWidth ? `${maxWidth}rem` : undefined,
    '--navbar-justify-content': justifyContent,
    '--navbar-height-mobile': `${navMobileHeight || Constants.navMobileHeight}rem`,
    '--navbar-height-desktop': `${navDesktopHeight || Constants.navDesktopHeight}rem`,
  };

  return (
    <BodyPortal
      tagName={tagName}
      ariaLabel={ariaLabel}
      slot='nav'
      className={classNames('navbar-wrapper', className)}
      style={wrapperStyle}
      {...props}
    >
      <div className="navbar-bar" style={barStyle}>
        {renderAnchor ? <a {...anchorProps}>{logoComponent}</a> : logoComponent}
        {props.children}
      </div>
    </BodyPortal>
  );
};

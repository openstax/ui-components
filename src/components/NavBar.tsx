import React from 'react';
import { CSSPropertiesWithVariables } from '../types';
import classNames from 'classnames';
import * as Constants from '../constants';
import { BodyPortal } from './BodyPortal';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';
import './NavBar.css';
import '../theme/theme.css';

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
  ...props
}: NavBarProps) => {
  const logoIsObject = typeof logo === 'object';
  const renderAnchor = logoIsObject && 'href' in logo;
  const {alt = 'OpenStax Logo', ...anchorProps} = logoIsObject ? logo : {};
  const logoComponent = logo ? <OpenstaxLogo alt={alt} /> : null;

  const barStyle: CSSPropertiesWithVariables = {
    '--navbar-max-width': maxWidth ? `${maxWidth}rem` : undefined,
    '--navbar-justify-content': justifyContent,
    '--navbar-height-mobile': `${navMobileHeight || Constants.navMobileHeight}rem`,
    '--navbar-height-desktop': `${navDesktopHeight || Constants.navDesktopHeight}rem`,
  };

  return (
    <BodyPortal
      tagName='nav'
      ariaLabel={ariaLabel}
      slot='nav'
      className={classNames('navbar-wrapper', className)}
      style={style}
      {...props}
    >
      <div className="navbar-bar" style={barStyle}>
        {renderAnchor ? <a {...anchorProps}>{logoComponent}</a> : logoComponent}
        {props.children}
      </div>
    </BodyPortal>
  );
};

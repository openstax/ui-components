import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import * as Constants from '../constants';
import theme from '../theme';
import { BodyPortal } from './BodyPortal';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';
import './NavBar.css';
export const NavBar = ({ logo = false, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, className, style, tagName = 'nav', ...props }) => {
    const logoIsObject = typeof logo === 'object';
    const renderAnchor = logoIsObject && 'href' in logo;
    const { alt = 'OpenStax Logo', ...anchorProps } = logoIsObject ? logo : {};
    const logoComponent = logo ? _jsx(OpenstaxLogo, { alt: alt }) : null;
    const wrapperStyle = {
        '--navbar-z-index': theme.zIndex.navbar,
        '--navbar-padding-mobile': `${theme.padding.navbar.mobile}rem`,
        '--navbar-padding-desktop': `${theme.padding.navbar.desktop}rem`,
        ...style
    };
    const barStyle = {
        '--navbar-max-width': maxWidth ? `${maxWidth}rem` : undefined,
        '--navbar-justify-content': justifyContent,
        '--navbar-height-mobile': `${navMobileHeight || Constants.navMobileHeight}rem`,
        '--navbar-height-desktop': `${navDesktopHeight || Constants.navDesktopHeight}rem`,
    };
    return (_jsx(BodyPortal, { tagName: tagName, ariaLabel: ariaLabel, slot: 'nav', className: classNames('navbar-wrapper', className), style: wrapperStyle, ...props, children: _jsxs("div", { className: "navbar-bar", style: barStyle, children: [renderAnchor ? _jsx("a", { ...anchorProps, children: logoComponent }) : logoComponent, props.children] }) }));
};

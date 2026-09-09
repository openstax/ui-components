import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import * as Constants from '../constants';
import { BodyPortal } from './BodyPortal';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';
import './NavBar.css';
import '../theme/theme.css';
export const NavBar = ({ logo = false, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, className, style, ...props }) => {
    const logoIsObject = typeof logo === 'object';
    const renderAnchor = logoIsObject && 'href' in logo;
    const { alt = 'OpenStax Logo', ...anchorProps } = logoIsObject ? logo : {};
    const logoComponent = logo ? _jsx(OpenstaxLogo, { alt: alt }) : null;
    const barStyle = {
        '--navbar-max-width': maxWidth ? `${maxWidth}rem` : undefined,
        '--navbar-justify-content': justifyContent,
        '--navbar-height-mobile': `${navMobileHeight || Constants.navMobileHeight}rem`,
        '--navbar-height-desktop': `${navDesktopHeight || Constants.navDesktopHeight}rem`,
    };
    return (_jsx(BodyPortal, { tagName: 'nav', ariaLabel: ariaLabel, slot: 'nav', className: classNames('navbar-wrapper', className), style: style, ...props, children: _jsxs("div", { className: "navbar-bar", style: barStyle, children: [renderAnchor ? _jsx("a", { ...anchorProps, children: logoComponent }) : logoComponent, props.children] }) }));
};

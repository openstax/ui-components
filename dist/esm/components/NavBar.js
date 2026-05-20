import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import * as Constants from '../constants';
import theme from '../theme';
import { BodyPortal } from './BodyPortal';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';
const BarWrapper = styled(BodyPortal) `
  overflow: visible;
  z-index: ${theme.zIndex.navbar};
  background: ${theme.colors.palette.white};
  position: relative;
  padding: 0 ${theme.padding.navbar.mobile}rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  ${theme.breakpoints.desktop(css `
    padding: 0 ${theme.padding.navbar.mobile}rem;
  `)}
  min-width: 0;
`;
const StyledNavBar = styled.div `
  overflow: visible;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
  height: ${props => props.navMobileHeight}rem;
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}rem;` : null}
  margin: 0 auto;
  ${props => theme.breakpoints.desktop(css `
    height: ${props.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;
export const NavBar = ({ logo = false, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, ...props }) => {
    const logoIsObject = typeof logo === 'object';
    const renderAnchor = logoIsObject && 'href' in logo;
    const { alt = 'OpenStax Logo', ...anchorProps } = logoIsObject ? logo : {};
    const logoComponent = logo ? _jsx(OpenstaxLogo, { alt: alt }) : null;
    return _jsx(BarWrapper, { tagName: 'nav', ariaLabel: ariaLabel, slot: 'nav', ...props, children: _jsxs(StyledNavBar, { maxWidth: maxWidth, navDesktopHeight: navDesktopHeight || Constants.navDesktopHeight, navMobileHeight: navMobileHeight || Constants.navMobileHeight, justifyContent: justifyContent, children: [renderAnchor ? _jsx("a", { ...anchorProps, children: logoComponent }) : logoComponent, props.children] }) });
};

import { navDesktopHeight, navMobileHeight } from '../../src/constants';
import styled, { css } from 'styled-components';
import theme from '../../src/theme';
import { NavBarLogo as OpenstaxLogo } from './NavBarLogo';

const BarWrapper = styled.div`
  overflow: visible;
  z-index: ${theme.zIndex.navbar};
  background: ${theme.colors.palette.white};
  position: relative;
  padding: 0 ${theme.padding.navbar.mobile}rem;
  box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
  ${theme.breakpoints.desktop(css`
    padding: 0 ${theme.padding.navbar.mobile}rem;
  `)}
`;

const StyledNavBar = styled.div<{
  maxWidth?: number;
  navDesktopHeight: number;
  navMobileHeight: number;
  justifyContent?: string;
}>`
  overflow: visible;
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
  height: ${props => props.navMobileHeight}rem;
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}rem;` : null}
  margin: 0 auto;
  ${props => theme.breakpoints.desktop(css`
    height: ${props.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;

type Logo = React.HTMLProps<HTMLAnchorElement> & { alt?: string };

type NavBarProps = React.PropsWithChildren<{
  maxWidth?: number;
  navDesktopHeight?: number;
  navMobileHeight?: number;
  logo?: boolean | Logo;
  justifyContent?: string;
}>

export const NavBar = ({ logo = false, maxWidth, ...props }: NavBarProps) => {
  const logoIsObject = typeof logo === 'object';
  const renderAnchor = logoIsObject && 'href' in logo;
  const {alt = 'OpenStax Logo', ...anchorProps} = logoIsObject ? logo : {};
  const logoComponent = logo ? <OpenstaxLogo alt={alt} /> : null;

  return <BarWrapper>
    <StyledNavBar
      maxWidth={maxWidth}
      navDesktopHeight={props.navDesktopHeight || navDesktopHeight}
      navMobileHeight={props.navMobileHeight || navMobileHeight}
      justifyContent={props.justifyContent}
    >
      {renderAnchor ? <a {...anchorProps}>{logoComponent}</a> : logoComponent}
      {props.children}
    </StyledNavBar>
  </BarWrapper>
};

import { navDesktopHeight, navMobileHeight } from '../../src/constants';
import styled, { css } from 'styled-components';
import theme from '../../src/theme';
import OpenstaxLogo from './NavBarLogo';

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

const anchorProps = ({alt, ...props}: Logo) => props;

export const NavBar = ({ logo, maxWidth, ...props }: NavBarProps) => {
  const alt = (logo && logo['alt']) || 'OpenStax Logo';
  const logoComponent = logo ? <OpenstaxLogo alt={alt} /> : null;
  const renderAnchor = typeof logo === 'object' && 'href' in logo;

  return <BarWrapper>
    <StyledNavBar
      maxWidth={maxWidth}
      navDesktopHeight={props.navDesktopHeight || navDesktopHeight}
      navMobileHeight={props.navMobileHeight || navMobileHeight}
      justifyContent={props.justifyContent}
    >
      {renderAnchor ? <a {...anchorProps(logo)}>{logoComponent}</a> : logoComponent}
      {props.children}
    </StyledNavBar>
  </BarWrapper>
};

export default NavBar;

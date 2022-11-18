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
}>`
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.navMobileHeight}rem;
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}rem;` : null}
  margin: 0 auto;
  ${props => theme.breakpoints.desktop(css`
    height: ${props.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;

type NavBarProps = React.PropsWithChildren<{
  maxWidth?: number;
  navDesktopHeight?: number;
  navMobileHeight?: number;
  logo?: boolean | React.HTMLProps<HTMLAnchorElement> & { alt?: string };
}>

const LinkWrapper = ({renderWrapper, wrapper, children}: {
  renderWrapper: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}) => renderWrapper ? wrapper(children) : <>{children}</>;

export const NavBar = (props: NavBarProps) => {
  const alt = typeof props.logo === 'object' && props.logo.alt ?
    props.logo.alt : 'OpenStax Logo';

  return <BarWrapper>
    <StyledNavBar
      maxWidth={props.maxWidth}
      navDesktopHeight={props.navDesktopHeight || navDesktopHeight}
      navMobileHeight={props.navMobileHeight || navMobileHeight}
    >
      <LinkWrapper
        renderWrapper={typeof props.logo === 'object'}
        wrapper={(children: React.ReactNode) =>
        <a {...props.logo as object}>{children}</a>}
      >
        {props.logo ? <OpenstaxLogo alt={alt} /> : null}
      </LinkWrapper>
      {props.children}
    </StyledNavBar>
  </BarWrapper>
};

export default NavBar;

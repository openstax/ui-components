import { maxNavWidth, navDesktopHeight, navMobileHeight } from '../../src/constants';
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
  maxWidth: number;
  navDesktopHeight: number;
  navMobileHeight: number;
}>`
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.navMobileHeight}rem;
  max-width: ${props => props.maxWidth}rem;
  margin: 0 auto;
  ${props => theme.breakpoints.desktop(css`
    height: ${props.navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;

interface NavBarProps extends React.PropsWithChildren<{
  maxWidth?: number;
  navDesktopHeight?: number;
  navMobileHeight?: number;
}> {}

const NavBar = (props: NavBarProps) => (
  <BarWrapper>
    <StyledNavBar
      maxWidth={props.maxWidth || maxNavWidth}
      navDesktopHeight={props.navDesktopHeight || navDesktopHeight}
      navMobileHeight={props.navMobileHeight || navMobileHeight}
    >
      {props.children}
    </StyledNavBar>
  </BarWrapper>
);

export const NavBarWithLogo = (props: NavBarProps & {
  href?: string;
  alt: string;
  headerImageMobileHeight?: number;
  headerImageDesktopHeight?: number;
}) => {
  const LinkWrapper = ({
    href, wrapper, children,
  }: {
    href?: string;
    wrapper: Function;
    children: React.ReactNode;
  }) => href ? wrapper(children) : children;

  return (
    <NavBar>
      <LinkWrapper
        href={props.href}
        wrapper={(children: React.ReactNode) => <a href={props.href}>{children}</a>}
      >
        <OpenstaxLogo alt={props.alt} />
      </LinkWrapper>
      {props.children}
    </NavBar>
  )
}

export default NavBar;

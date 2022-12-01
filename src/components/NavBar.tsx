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

type NavBarProps = React.PropsWithChildren<{
  maxWidth?: number;
  navDesktopHeight?: number;
  navMobileHeight?: number;
  logo?: boolean | React.HTMLProps<HTMLAnchorElement> & { alt?: string };
  justifyContent?: string;
}>

const LinkWrapper = ({renderWrapper, wrapper, children}: {
  renderWrapper: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: React.ReactNode;
}) => renderWrapper ? wrapper(children) : <>{children}</>;

export const NavBar = ({ logo, maxWidth, ...props }: NavBarProps) => {
  const alt = (logo && logo['alt']) || 'OpenStax Logo';
  const renderWrapper = typeof logo === 'object' ? 'href' in logo : !!logo;

  return <BarWrapper>
    <StyledNavBar
      maxWidth={maxWidth}
      navDesktopHeight={props.navDesktopHeight || navDesktopHeight}
      navMobileHeight={props.navMobileHeight || navMobileHeight}
      justifyContent={props.justifyContent}
    >
      <LinkWrapper
        renderWrapper={renderWrapper}
        wrapper={(children: React.ReactNode) =>
          <a {...logo as object}>{children}</a>}
      >
        {logo ? <OpenstaxLogo alt={alt} /> : null}
      </LinkWrapper>
      {props.children}
    </StyledNavBar>
  </BarWrapper>
};

export default NavBar;

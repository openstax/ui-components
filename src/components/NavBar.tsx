import styled, { css } from 'styled-components';
import theme from '../../src/theme';
import openstaxLogo from '../assets/logo.svg';

// TODO: Heights in mockup are shorter than in REX?

export const BarWrapper = styled.div`
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

export const navDesktopHeight = 6.0;
export const navMobileHeight = 5.2;
const headerImageDesktopHeight = 3.5;
const headerImageMobileHeight = 2.8;

export const NavBar = styled.div`
  overflow: visible;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${navMobileHeight}rem;
  margin: 0 auto;
  ${theme.breakpoints.desktop(css`
    height: ${navDesktopHeight}rem;
  `)}
  @media print { display: none; }
`;

export const HeaderImage = styled.img`
  display: block;
  width: auto;
  height: ${headerImageMobileHeight}rem;
  ${theme.breakpoints.desktop(css`
    height: ${headerImageDesktopHeight}rem;
  `)}
`;

export default (props: React.PropsWithChildren<{

}>) => (
  <BarWrapper>
    <NavBar>
      <HeaderImage
        role='img'
        src={openstaxLogo}
        alt={'alt'}
      />
      {props.children}
    </NavBar>
  </BarWrapper>
);

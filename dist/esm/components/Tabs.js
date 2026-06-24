import { jsx as _jsx } from "react/jsx-runtime";
import * as RAC from "react-aria-components";
import { colors } from "../theme";
import styled, { css } from "styled-components";
import { palette } from "../theme/palette";
export const tabListBaseCss = `
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`;
export const tabBaseCss = css `
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
  white-space: nowrap;
  font-size: ${({ size }) => size === 'small' ? '1.6' : (size === 'large' ? '2.4' : '1.8')}rem;

  &:hover {
    cursor: pointer;
  }
`;
export const buttonBarWrapperCss = `
  border: 0.1rem solid ${colors.palette.pale};
  border-radius: 0.5rem;
`;
export const buttonBarItemCss = css `
  padding: 0 1.6rem;
  min-height: ${({ size }) => size === 'small' ? '2.8' : (size === 'large' ? '4.8' : '4.0')}rem;
  background: #fff;
  border-right: 0.1rem solid ${colors.palette.pale};

  &:first-child {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-left: 0;
  }
  &:last-child {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    border-right: 0;
  }

  &[data-selected=true] {
    background: ${colors.palette.neutralLight};
    box-shadow: inset 0 0 0 0.1rem ${colors.palette.pale};
  }
  &:hover:not([data-selected=true]) {
    background: ${colors.palette.neutralLighter};
  }
`;
const buttonBarCss = css `
  [role="tablist"] {
    ${buttonBarWrapperCss}
  }

  [role="tab"] {
    ${buttonBarItemCss}
  }
`;
const tabsCss = css `
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${colors.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({ size }) => size === 'small' ? '2.9' : '4.8'}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${palette.darkGreen};
    }
  }
`;
const StyledTabs = styled(RAC.Tabs) `
  [role="tablist"] {
    ${tabListBaseCss}
  }

  [role="tab"] {
    ${tabBaseCss}
  }

  ${(props) => props.variant === "button-bar" ? buttonBarCss : tabsCss}
`;
export const Tabs = ({ variant, size = "medium", className, children, ...restProps }) => {
    return (_jsx(StyledTabs, { variant: variant, size: size, className: className, ...restProps, children: children }));
};
export { TabList, Tab, TabPanel } from "react-aria-components";

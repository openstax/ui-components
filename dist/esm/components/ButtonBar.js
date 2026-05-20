import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { buttonBarItemCss, buttonBarWrapperCss, tabBaseCss, tabListBaseCss, } from "./Tabs";
const Wrapper = styled.div `
  ${tabListBaseCss}
  ${buttonBarWrapperCss}

  > * {
    all: unset;
    ${tabBaseCss}
    ${buttonBarItemCss}
  }
`;
export const ButtonBar = ({ size = "medium", children, ...restProps }) => {
    return (_jsx(Wrapper, { size: size, ...restProps, children: children }));
};

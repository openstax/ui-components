import React from "react";
import styled from "styled-components";
import {
  buttonBarItemCss,
  buttonBarWrapperCss,
  tabBaseCss,
  tabListBaseCss,
  TabsProps,
} from "./Tabs";

type ButtonBarProps = Pick<TabsProps, "size"> & {
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  ${tabListBaseCss}
  ${buttonBarWrapperCss}

  > * {
    all: unset;
    ${tabBaseCss}
    ${buttonBarItemCss}
  }
`;

export const ButtonBar = ({
  size = "medium",
  children,
  ...restProps
}: ButtonBarProps) => {
  return (
    <Wrapper size={size} {...restProps}>
      {children}
    </Wrapper>
  );
};

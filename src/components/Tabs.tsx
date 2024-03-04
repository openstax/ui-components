import React from "react";
import * as RAC from "react-aria-components";
import { colors } from "../theme";
import styled, { css } from "styled-components";
import { palette } from "../../src/theme/palette";

type TabsProps = {
  variant?: "button-bar";
  size?: "large" | "medium" | "small";
  className?: string;
  children?: React.ReactNode;
} & RAC.TabsProps;

const buttonBarCss = css`
  [role="tablist"] {
    border: 0.1rem solid ${colors.palette.pale};
    border-radius: 0.5rem;
  }

  [role="tab"] {
    padding: 0 1.6rem;
    min-height: ${({ size }: TabsProps) =>
      size === 'small' ? '2.8' : ( size === 'large' ? '4.8' : '4.0')}rem;
    background: #fff;

    &[data-selected] {
      background: ${colors.palette.neutralLight};
    }
    &:hover:not([data-selected]) {
      background: ${colors.palette.neutralLighter};
    }
  }

  &[data-orientation="horizontal"] [role="tab"] {
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
  }
`;

const tabsCss = css`
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${colors.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({ size }: TabsProps) =>
      size === 'small' ? '2.9' : '4.8'}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected], &:hover {
      border-color: ${palette.darkGreen};
    }
  }
`;

const StyledTabs = styled(RAC.Tabs)`
  [role="tablist"] {
    overflow-x: auto;
    overscroll-behavior: contain;
    display: flex;
  }

  &[data-orientation="horizontal"] [role="tablist"] {
    flex-direction: row;
  }

  [role="tab"] {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
    white-space: nowrap;
    font-size: ${({ size }: TabsProps) =>
      size === 'small' ? '1.6' : (size === 'large' ? '2.4' : '1.8')}rem;

    &:hover {
      cursor: pointer;
    }
  }

  ${(props: TabsProps) =>
    props.variant === "button-bar" ? buttonBarCss : tabsCss}
`;

export const Tabs = ({
  variant,
  size = "medium",
  className,
  children,
  ...restProps
}: TabsProps) => {
  return (
    <StyledTabs
      variant={variant}
      size={size}
      className={className}
      {...restProps}
    >
      {children}
    </StyledTabs>
  );
};

export { TabList, Tab, TabPanel, TabsContext, TabListStateContext } from "react-aria-components";

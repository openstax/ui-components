import React from "react";
import * as AC from "react-aria-components";
import { colors } from "../theme";
import styled, { css } from "styled-components";

type TabsProps = {
  variant?: "button-bar";
  size?: "large" | "small";
  className?: string;
  children?: React.ReactNode;
} & AC.TabsProps;

const buttonBarCss = css`
  .react-aria-TabList {
    border: 0.1rem solid ${colors.palette.pale};
    border-radius: 0.5rem;
  }

  .react-aria-Tab {
    padding: 0 1.6rem;
    min-height: ${({ size }: TabsProps) =>
      size === "large" ? "4.8rem" : "2.8rem"};

    &[data-selected] {
      background: ${colors.palette.neutralLight};
    }
    &:hover:not([data-selected]) {
      background: ${colors.palette.neutralLighter};
    }
  }

  &[data-orientation="horizontal"] .react-aria-Tab {
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

  &[data-orientation="vertical"] .react-aria-Tab {
    border-bottom: 0.1rem solid ${colors.palette.pale};

    &:first-child {
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
      border-top: 0;
    }
    &:last-child {
      border-bottom-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      border-bottom: 0;
    }
  }
`;

const tabsCss = css`
  .react-aria-TabList {
    border-bottom: 0.1rem solid ${colors.palette.pale};
  }

  &[data-orientation="vertical"] .react-aria-TabList {
    border: none;
  }

  .react-aria-Tab {
    padding: 0 1.6rem;
    height: ${({ size }: TabsProps) =>
      size === "large" ? "4.8rem" : "2.8rem"};
    border-bottom: 0.4rem solid transparent;

    &[data-selected] {
      border-color: #63a524;
    }
    &:hover:not([data-selected]) {
      border-color: ${colors.palette.neutralLighter};
    }
  }
`;

const StyledTabs = styled(AC.Tabs)`
  .react-aria-TabList {
    overflow-y: scroll;
    overscroll-behavior: contain;
    display: flex;
  }

  &[data-orientation="vertical"] .react-aria-TabList {
    flex-direction: column;
    overflow: scroll;
  }
  &[data-orientation="horizontal"] .react-aria-TabList {
    flex-direction: row;
  }

  .react-aria-Tab {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
    white-space: nowrap;
    font-size: ${({ size }: TabsProps) =>
      size === "large" ? "1.6rem" : "1.4rem"};

    &:hover {
      cursor: pointer;
    }
  }

  ${(props: TabsProps) =>
    props.variant === "button-bar" ? buttonBarCss : tabsCss}
`;

export const Tabs = ({
  variant,
  size = "large",
  className,
  children,
  ...restProps
}: TabsProps & AC.TabsProps) => {
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

export { TabList, Tab, TabPanel } from "react-aria-components";

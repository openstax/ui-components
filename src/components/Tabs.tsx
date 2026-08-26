import React from "react";
import * as RAC from "react-aria-components";
import { palette } from "../theme/palette";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../types";
import './Tabs.css';

export type TabsProps = {
  variant?: "button-bar";
  size?: "large" | "medium" | "small";
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & RAC.TabsProps;

export const Tabs = ({
  variant,
  size = "medium",
  className,
  children,
  style,
  ...restProps
}: TabsProps) => {
  const tabsClass = classNames('tabs', {
    'tabs-button-bar': variant === 'button-bar',
    'tabs-small': size === 'small',
    'tabs-medium': size === 'medium',
    'tabs-large': size === 'large',
  }, className);

  const additionalStyle: CSSPropertiesWithVariables = {
    '--tabs-border-color': palette.pale,
    '--tabs-active-border-color': palette.darkGreen,
    '--tabs-button-selected-bg': palette.neutralLight,
    '--tabs-button-hover-bg': palette.neutralLighter,
  };

  return (
    <RAC.Tabs
      className={tabsClass}
      style={{...additionalStyle, ...style}}
      {...restProps}
    >
      {children}
    </RAC.Tabs>
  );
};

export { TabList, Tab, TabPanel } from "react-aria-components";

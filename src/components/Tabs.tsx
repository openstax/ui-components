import * as RAC from "react-aria-components";
import { palette } from "../theme/palette";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../types";
import './Tabs.css';

export type TabsProps = {
  variant?: "button-bar";
  size?: "large" | "medium" | "small";
} & RAC.TabsProps;

export const Tabs = ({
  variant,
  size = "medium",
  className,
  style,
  ...restProps
}: TabsProps) => {
  const variantClassName = classNames('tabs', {
    'tabs-button-bar': variant === 'button-bar',
    'tabs-small': size === 'small',
    'tabs-medium': size === 'medium',
    'tabs-large': size === 'large',
  });

  const cssVariables: CSSPropertiesWithVariables = {
    '--tabs-border-color': palette.pale,
    '--tabs-active-border-color': palette.darkGreen,
    '--tabs-button-selected-bg': palette.neutralLight,
    '--tabs-button-hover-bg': palette.neutralLighter,
  };

  // className and style may each be a render callback, so resolve them against the
  // render props before merging. RAC folds its own defaultStyle in for us.
  return (
    <RAC.Tabs
      {...restProps}
      className={(values) => classNames(
        variantClassName,
        typeof className === 'function' ? className(values) : className
      )}
      style={(values) => ({
        ...cssVariables,
        ...(typeof style === 'function' ? style(values) : style),
      })}
    />
  );
};

export { TabList, Tab, TabPanel } from "react-aria-components";

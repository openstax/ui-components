import type { CSSProperties } from "react";
import * as RAC from "react-aria-components";
import { palette } from "../theme/palette";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../types";
import './Tabs.css';

// style is widened to CSSPropertiesWithVariables so callers can override the documented
// --tabs-* custom properties without casting. Note the Omit: intersecting a narrower
// style over RAC.TabsProps would collapse its `T | ((values) => T)` union and break the
// render-callback form, so the original has to be removed before the wider one is added.
export type TabsProps = {
  variant?: "button-bar";
  size?: "large" | "medium" | "small";
  style?: CSSPropertiesWithVariables
    | ((values: RAC.TabsRenderProps & { defaultStyle: CSSProperties }) => CSSPropertiesWithVariables | undefined);
} & Omit<RAC.TabsProps, 'style'>;

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

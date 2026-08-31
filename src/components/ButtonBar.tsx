import React from "react";
import { palette } from "../theme/palette";
import classNames from "classnames";
import { CSSPropertiesWithVariables } from "../types";
import './ButtonBar.css';

type ButtonBarProps = {
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
  // widened from React.CSSProperties so callers can override the documented
  // --button-bar-* custom properties without casting
  style?: CSSPropertiesWithVariables;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;

export const ButtonBar = ({
  size = "medium",
  children,
  className,
  style: customStyle,
  ...restProps
}: ButtonBarProps) => {
  const buttonBarClass = classNames('button-bar', {
    'button-bar-small': size === 'small',
    'button-bar-medium': size === 'medium',
    'button-bar-large': size === 'large',
  }, className);

  const style: CSSPropertiesWithVariables = {
    '--button-bar-border-color': palette.pale,
    '--button-bar-selected-bg': palette.neutralLight,
    '--button-bar-hover-bg': palette.neutralLighter,
    ...customStyle,
  };

  return (
    <div className={buttonBarClass} style={style} {...restProps}>
      {children}
    </div>
  );
};

import React from "react";
import { palette } from "../theme/palette";
import classNames from "classnames";
import './ButtonBar.css';

type ButtonBarProps = {
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

export const ButtonBar = ({
  size = "medium",
  children,
  ...restProps
}: ButtonBarProps) => {
  const buttonBarClass = classNames('button-bar', {
    'button-bar-small': size === 'small',
    'button-bar-medium': size === 'medium',
    'button-bar-large': size === 'large',
  });

  const style = {
    '--button-bar-border-color': palette.pale,
    '--button-bar-selected-bg': palette.neutralLight,
    '--button-bar-hover-bg': palette.neutralLighter,
  } as React.CSSProperties;

  return (
    <div className={buttonBarClass} style={style} {...restProps}>
      {children}
    </div>
  );
};

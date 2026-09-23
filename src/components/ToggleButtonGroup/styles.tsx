import React from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  composeRenderProps,
} from "react-aria-components";
import classNames from "classnames";
import "./ToggleButtonGroup.css";
import "../../theme/theme.css";

// composeRenderProps normalises the string and render-callback forms of className so a
// caller-supplied callback is composed rather than dropped. Consumers wrap these with
// styled(), which supplies a plain string, so composing rather than replacing matters.
export const StyledToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  ({ className, ...props }, ref) => (
    <ToggleButtonGroup
      ref={ref}
      {...props}
      className={composeRenderProps(className, (resolved) => classNames('toggle-button-group', resolved))}
    />
  )
);
StyledToggleButtonGroup.displayName = 'StyledToggleButtonGroup';

export const StyledToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ className, ...props }, ref) => (
    <ToggleButton
      ref={ref}
      {...props}
      className={composeRenderProps(className, (resolved) => classNames('toggle-button', resolved))}
    />
  )
);
StyledToggleButton.displayName = 'StyledToggleButton';

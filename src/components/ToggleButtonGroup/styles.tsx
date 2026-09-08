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
export const StyledToggleButtonGroup = ({ className, ...props }: ToggleButtonGroupProps) => (
  <ToggleButtonGroup
    {...props}
    className={composeRenderProps(className, (resolved) => classNames('toggle-button-group', resolved))}
  />
);

export const StyledToggleButton = ({ className, ...props }: ToggleButtonProps) => (
  <ToggleButton
    {...props}
    className={composeRenderProps(className, (resolved) => classNames('toggle-button', resolved))}
  />
);

import React from "react";
import { Button, ButtonProps, composeRenderProps } from "react-aria-components";
import classNames from "classnames";
import "./NavBarButton.css";
import "../theme/theme.css";

// className is deliberately not re-declared here: ButtonProps types it as
// `string | ((values: ButtonRenderProps) => string)`, and re-declaring it as `string`
// would intersect away the render-callback form that RAC supports for state-based
// styling (isPressed, isFocusVisible, ...).
export type NavBarButtonProps = Omit<ButtonProps, "aria-label"> & {
  label?: string;
  icon?: string | React.ReactNode;
  "aria-label"?: string;
} & ({ label: string } | { "aria-label": string });

export const NavBarButton = React.forwardRef<React.ElementRef<typeof Button>, NavBarButtonProps>(
  ({ label, icon, className, "aria-label": ariaLabel, ...props }, ref) => (
    <Button
      ref={ref}
      className={composeRenderProps(className, (resolved) => classNames("navbar-button", resolved))}
      aria-label={ariaLabel}
      {...props}
    >
      {icon &&
        (typeof icon === "string" ? (
          <img aria-hidden="true" src={icon} alt="" />
        ) : (
          icon
        ))}
      {label ? <span>{label}</span> : null}
    </Button>
  )
);
NavBarButton.displayName = "NavBarButton";

import React from "react";
import { Button, ButtonProps } from "react-aria-components";
import classNames from "classnames";
import "./NavBarButton.css";

export type NavBarButtonProps = Omit<ButtonProps, "aria-label"> & {
  label?: string;
  icon?: string | React.ReactNode;
  className?: string;
  "aria-label"?: string;
} & ({ label: string } | { "aria-label": string });

export const NavBarButton = React.forwardRef<React.ElementRef<typeof Button>, NavBarButtonProps>(
  ({ label, icon, className, "aria-label": ariaLabel, ...props }, ref) => (
    <Button
      ref={ref}
      className={classNames("navbar-button", className)}
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

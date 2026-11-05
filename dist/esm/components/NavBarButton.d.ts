import React from "react";
import { ButtonProps } from "react-aria-components";
import "./NavBarButton.css";
import "../theme/theme.css";
export type NavBarButtonProps = Omit<ButtonProps, "aria-label"> & {
    label?: string;
    icon?: string | React.ReactNode;
    "aria-label"?: string;
} & ({
    label: string;
} | {
    "aria-label": string;
});
export declare const NavBarButton: React.ForwardRefExoticComponent<NavBarButtonProps & React.RefAttributes<HTMLButtonElement>>;

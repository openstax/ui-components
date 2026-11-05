import React from "react";
import { PopoverProps } from "react-aria-components";
import { NavBarButtonProps } from "./NavBarButton";
import "./NavBarMenuButtons.css";
import "../theme/theme.css";
export declare const NavBarMenuItem: React.ForwardRefExoticComponent<Omit<import("react-aria-components").MenuItemProps<object> & React.RefAttributes<object>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverContainer: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const NavBarPopover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export type NavBarBaseButtonProps = React.PropsWithChildren<{
    popoverProps?: PopoverProps;
}> & NavBarButtonProps;
export declare const NavBarPopoverButton: (props: NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const NavBarMenuButton: (props: NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element;

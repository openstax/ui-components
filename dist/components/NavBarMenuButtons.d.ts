import React from "react";
import { PopoverProps } from "react-aria-components";
import { NavBarButtonProps } from "./NavBarButton";
export declare const NavBarMenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>), any, {}, never>;
export declare const PopoverContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare type NavBarBaseButtonProps = React.PropsWithChildren<{
    popoverProps?: PopoverProps;
}> & NavBarButtonProps;
export declare const NavBarPopoverButton: (props: NavBarBaseButtonProps) => JSX.Element;
export declare const NavBarMenuButton: (props: NavBarBaseButtonProps) => JSX.Element;

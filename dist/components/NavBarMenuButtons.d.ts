import React from "react";
import { PopoverProps } from "react-aria-components";
import { NavBarButtonProps } from "./NavBarButton";
export declare const NavBarMenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null), any, {}, never>;
export declare const PopoverContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const NavBarPopover: import("styled-components").StyledComponent<(props: PopoverProps & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare type NavBarBaseButtonProps = React.PropsWithChildren<{
    popoverProps?: PopoverProps;
}> & NavBarButtonProps;
export declare const NavBarPopoverButton: (props: NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const NavBarMenuButton: (props: NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element;

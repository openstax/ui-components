import React from "react";
import { PopoverProps } from "react-aria-components";
import { NavBarButtonProps } from "./NavBarButton";
export declare const NavBarMenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>), any, {}, never>;
export declare const PopoverContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare type NavBarItemProps = React.PropsWithChildren<{
    label?: string;
    icon?: string | React.ReactNode;
    buttonProps?: NavBarButtonProps;
    popoverProps?: PopoverProps;
    className?: string;
}> & ({
    label: string;
    icon?: React.ReactNode;
    "aria-label"?: string;
} | {
    label?: never;
    icon: React.ReactNode;
    "aria-label": string;
});
export declare const NavBarPopoverButton: (props: NavBarItemProps) => JSX.Element;
export declare const NavBarMenuButton: (props: NavBarItemProps) => JSX.Element;

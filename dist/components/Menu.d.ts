import React from "react";
import { ButtonProps, PopoverProps } from "react-aria-components";
export declare const Menu: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>), any, {}, never>;
export declare const MenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>), any, {}, never>;
export declare const MenuGenericContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface MenuProps {
    label: string;
    icon?: string | React.ReactNode;
    buttonProps?: ButtonProps;
    popoverProps?: PopoverProps;
    className?: string;
}
export declare const MenuButton: ({ label, icon, ...props }: React.PropsWithChildren<MenuProps>) => JSX.Element;

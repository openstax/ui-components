import React from 'react';
import { ButtonProps, PopoverProps } from 'react-aria-components';
export declare const MenuButton: import("styled-components").StyledComponent<(props: ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, any, {}, never>;
export declare const MenuPopover: import("styled-components").StyledComponent<(props: PopoverProps & React.RefAttributes<HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, any, {}, never>;
export interface MenuProps {
    buttonLabel: string;
    buttonIcon?: string | React.ReactNode;
    buttonProps?: ButtonProps;
    popoverProps?: PopoverProps;
}
export declare const Menu: ({ buttonLabel, buttonIcon, ...props }: React.PropsWithChildren<MenuProps>) => JSX.Element;

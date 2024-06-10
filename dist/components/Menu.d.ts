import React from 'react';
import { ButtonProps, PopoverProps } from 'react-aria-components';
export interface MenuProps {
    buttonLabel: string;
    buttonIcon: string | React.ReactNode;
    buttonProps?: ButtonProps;
    popoverProps?: PopoverProps;
}
export declare const Menu: ({ buttonLabel, buttonIcon, ...props }: React.PropsWithChildren<MenuProps>) => JSX.Element;

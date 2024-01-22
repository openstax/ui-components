import React from 'react';
import { ButtonVariant } from '../theme/buttons';
export declare const DropdownMenu: ({ children, disabled, id, text, variant, width, }: React.PropsWithChildren<{
    disabled?: boolean | undefined;
    id: string;
    text: string;
    variant: ButtonVariant;
    width?: string | undefined;
}>) => JSX.Element;
export declare const DropdownMenuItemButton: ({ children, onClick, ...buttonProps }: React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) => JSX.Element;

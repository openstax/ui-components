import React from 'react';
import { ButtonVariant } from "../theme/buttons";
import './Button.css';
export { applyButtonVariantStyles } from "../theme/buttons";
export declare const buttonCss = "button-base";
/**
 * Link style CSS fragment for backwards compatibility.
 *
 * @deprecated This export is deprecated. Use the ButtonLink component instead.
 * @note Breaking change: Previously returned a styled-components css fragment,
 * now returns a plain CSS string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
export declare const linkStyle: string;
interface ButtonOptions {
    variant?: ButtonVariant;
}
type ButtonBase = React.ComponentPropsWithoutRef<'button'> & ButtonOptions;
export interface ButtonProps extends ButtonBase {
    isWaiting?: never;
    waitingText?: never;
}
export interface WaitingButtonProps extends ButtonBase {
    isWaiting: boolean;
    waitingText: string;
}
export declare const Button: React.ForwardRefExoticComponent<(ButtonProps | WaitingButtonProps) & React.RefAttributes<HTMLButtonElement>>;
export declare const LinkButton: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & ButtonOptions & React.RefAttributes<HTMLAnchorElement>>;
export declare const PlainButton: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const ButtonLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

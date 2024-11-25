/// <reference types="react" />
import { ButtonVariant } from "../theme/buttons";
interface ButtonOptions {
    variant?: ButtonVariant;
}
declare type ButtonBase = React.ComponentPropsWithoutRef<'button'> & ButtonOptions;
declare type LinkButtonBase = React.ComponentPropsWithoutRef<'a'> & ButtonOptions;
interface ButtonProps extends ButtonBase {
    isWaiting?: never;
    waitingText?: never;
}
interface WaitingButtonProps extends ButtonBase {
    isWaiting: boolean;
    waitingText: string;
}
export declare const Button: (props: ButtonProps | WaitingButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const LinkButton: ({ variant, ...props }: LinkButtonBase) => import("react/jsx-runtime").JSX.Element;
export declare const linkStyle: import("styled-components").FlattenSimpleInterpolation;
export declare const PlainButton: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const ButtonLink: import("styled-components").StyledComponent<"button", any, {}, never>;
export {};

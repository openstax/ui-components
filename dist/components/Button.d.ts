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
export declare const Button: (props: ButtonProps | WaitingButtonProps) => JSX.Element;
export declare const LinkButton: ({ variant, ...props }: LinkButtonBase) => JSX.Element;
export {};

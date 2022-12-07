import { ButtonVariant } from "../theme/buttons";
interface ButtonBase extends React.ComponentPropsWithoutRef<'button'> {
    variant?: ButtonVariant;
}
interface ButtonProps extends ButtonBase {
    isWaiting?: never;
    waitingText?: never;
}
interface WaitingButtonProps extends ButtonBase {
    isWaiting: boolean;
    waitingText: string;
}
export declare const Button: (props: ButtonProps | WaitingButtonProps) => JSX.Element;
export {};

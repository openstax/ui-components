import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
export declare const StyledLabel: import("styled-components").StyledComponent<"label", any, {
    isDisabled?: boolean;
}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    isDisabled?: boolean;
}, never>;
type RadioProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;
export declare const Radio: ({ children, disabled, labelAs, ...props }: RadioProps & {
    tooltipText?: string;
    labelAs?: string;
}) => import("react/jsx-runtime").JSX.Element;
export {};

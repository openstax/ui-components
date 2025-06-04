import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
export declare const StyledLabel: import("styled-components").StyledComponent<"label", any, {
    isDisabled?: boolean | undefined;
}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    isDisabled?: boolean | undefined;
}, never>;
declare type RadioProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;
export declare const Radio: ({ children, disabled, ...props }: RadioProps & {
    tooltipText?: string;
}) => import("react/jsx-runtime").JSX.Element;
export {};

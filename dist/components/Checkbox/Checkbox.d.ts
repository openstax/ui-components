import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import { InputHTMLAttributes } from "react";
declare type CheckboxProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    variant?: CheckboxVariant;
    size?: CheckboxSize;
    bold?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;
export declare const Checkbox: ({ children, disabled, variant, bold, size, labelProps, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};

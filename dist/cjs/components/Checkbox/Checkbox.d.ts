import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import { InputHTMLAttributes } from "react";
import "./Checkbox.css";
import '../../theme/theme.css';
type CheckboxProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    variant?: CheckboxVariant;
    size?: CheckboxSize;
    bold?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;
export declare const Checkbox: ({ children, disabled, variant, bold, size, labelProps, className, style, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};

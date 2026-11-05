import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import { InputHTMLAttributes } from "react";
import "./Checkbox.css";
import '../../theme/theme.css';
type CheckboxProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    variant?: CheckboxVariant;
    /** Exposes the mixed state, for a checkbox that summarises a set of others. Does not change `checked`. */
    indeterminate?: boolean;
    size?: CheckboxSize;
    bold?: boolean;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;
export declare const Checkbox: ({ children, disabled, variant, bold, size, labelProps, className, style, indeterminate, onClick, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};

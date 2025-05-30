import { CheckboxProps as RACCheckboxProps } from "react-aria-components";
import { PropsWithChildren } from "react";
import { checkboxVariants } from "./sharedCheckboxStyles";
declare type Variant = keyof typeof checkboxVariants;
declare type Size = 1.4 | 1.6 | 1.8 | 2;
export interface CheckboxProps extends PropsWithChildren<Omit<RACCheckboxProps, 'children'>> {
    size?: Size;
    variant?: Variant;
    bold?: boolean;
}
export declare const CheckboxRAC: ({ size, variant, bold, children, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};

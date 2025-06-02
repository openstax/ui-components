import { CheckboxProps as RACCheckboxProps } from "react-aria-components";
import { PropsWithChildren } from "react";
import { CheckboxSize, CheckboxVariant } from "./sharedCheckboxStyles";
export interface CheckboxRACProps extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
    size?: CheckboxSize;
    variant?: CheckboxVariant;
    bold?: boolean;
}
export declare const CheckboxRAC: ({ size, variant, bold, children, ...props }: CheckboxRACProps) => import("react/jsx-runtime").JSX.Element;

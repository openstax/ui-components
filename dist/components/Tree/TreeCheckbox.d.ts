import { CheckboxProps as RACCheckboxProps } from "react-aria-components";
import { PropsWithChildren } from "react";
import { CheckboxSize, CheckboxVariant } from "../Checkbox/sharedCheckboxStyles";
export interface CheckboxRACProps extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
    size?: CheckboxSize;
    variant?: CheckboxVariant;
    bold?: boolean;
}
export declare const TreeCheckbox: ({ size, variant, bold, children, ...props }: CheckboxRACProps) => import("react/jsx-runtime").JSX.Element;

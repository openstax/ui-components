import { CheckboxProps as RACCheckboxProps } from "react-aria-components";
import { PropsWithChildren } from "react";
import { CheckboxSize, CheckboxVariant } from "../Checkbox/sharedCheckboxStyles";
import "../Checkbox/Checkbox.css";
import '../../theme/theme.css';
export interface TreeCheckboxProps extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
    size?: CheckboxSize;
    variant?: CheckboxVariant;
    bold?: boolean;
}
export declare const TreeCheckbox: ({ size, variant, bold, children, isDisabled, className, style, ...props }: TreeCheckboxProps) => import("react/jsx-runtime").JSX.Element;

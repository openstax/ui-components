import { PropsWithChildren } from "react";
import { InputHTMLAttributes } from "react";
declare type CheckboxVariant = keyof typeof checkboxVariants;
declare type CheckboxSize = 1.4 | 1.6 | 1.8 | 2;
export declare const checkboxVariants: {
    readonly primary: {
        readonly accentColor: "#026AA1";
        readonly boxShadow: "none";
    };
    readonly light: {
        readonly accentColor: "#ffffff";
        readonly boxShadow: "0 0 1px 0";
    };
};
declare type CheckboxProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    variant?: CheckboxVariant;
    size?: CheckboxSize;
    bold?: boolean;
}>;
export declare const Checkbox: ({ children, variant, bold, size, ...props }: CheckboxProps) => JSX.Element;
export {};

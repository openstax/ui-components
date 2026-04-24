export declare type ButtonVariant = keyof typeof buttonStyleSets;
interface ButtonStyleSet {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    color: string;
    outline: string;
    shadow: string;
    fontWeight?: number;
}
declare const buttonStyleSets: {
    readonly primary: ButtonStyleSet;
    readonly light: ButtonStyleSet;
    readonly secondary: ButtonStyleSet;
};
export declare const applyButtonVariantStyles: (variant: ButtonVariant) => import("styled-components").FlattenSimpleInterpolation;
export {};

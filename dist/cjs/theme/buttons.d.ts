import type { CssFragment } from "../theme";
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
/**
 * Gets the button style set for a specific variant.
 * Use this for binding theme colors to CSS custom properties.
 *
 * @param variant - The button variant to get styles for
 * @returns ButtonStyleSet containing all variant-specific colors
 */
export declare const getButtonVariantStyles: (variant: ButtonVariant) => ButtonStyleSet;
/**
 * Applies button variant styles based on the specified variant.
 *
 * @param variant - The button variant to apply
 * @returns CSS string with button styles
 * @type {CssFragment}
 * @deprecated This function is deprecated. Use getButtonVariantStyles() with CSS custom properties instead.
 * @note Breaking change: Previously returned FlattenSimpleInterpolation from styled-components,
 * now returns a plain string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
export declare const applyButtonVariantStyles: (variant: ButtonVariant) => CssFragment;
export {};

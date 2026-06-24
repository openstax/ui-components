"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyButtonVariantStyles = exports.getButtonVariantStyles = void 0;
const palette_1 = require("./palette");
// https://stackoverflow.com/a/54598743
const asButtonStyleSetTypes = (st) => st;
const buttonStyleSets = asButtonStyleSetTypes({
    primary: {
        background: palette_1.palette.orange,
        backgroundActive: "#b03808",
        backgroundHover: "#be3c08",
        color: palette_1.palette.white,
        outline: palette_1.palette.white,
        shadow: palette_1.palette.black,
    },
    light: {
        background: palette_1.palette.white,
        backgroundActive: palette_1.palette.neutralLight,
        backgroundHover: palette_1.palette.white,
        color: palette_1.palette.neutralDarker,
        fontWeight: 400,
        outline: palette_1.palette.white,
        shadow: palette_1.palette.black,
    },
    secondary: {
        background: palette_1.palette.darkGray,
        backgroundActive: "#4c4c4c",
        backgroundHover: "#646464",
        color: palette_1.palette.white,
        outline: palette_1.palette.white,
        shadow: palette_1.palette.black,
    },
});
/**
 * Gets the button style set for a specific variant.
 * Use this for binding theme colors to CSS custom properties.
 *
 * @param variant - The button variant to get styles for
 * @returns ButtonStyleSet containing all variant-specific colors
 */
const getButtonVariantStyles = (variant) => {
    return buttonStyleSets[variant];
};
exports.getButtonVariantStyles = getButtonVariantStyles;
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
const applyButtonVariantStyles = (variant) => {
    var _a;
    const set = buttonStyleSets[variant];
    return `
    background-color: ${set.background};
    color: ${set.color};
    font-weight: ${(_a = set.fontWeight) !== null && _a !== void 0 ? _a : 700};

    &:not([disabled]) {
      &:hover {
        background: ${set.backgroundHover};
      }
      &:active {
        background: ${set.backgroundActive};
      }
    }

    &:focus {
      outline: solid ${set.outline};
      box-shadow: inset 0 0 0 0.3rem ${set.shadow};
    }
  `;
};
exports.applyButtonVariantStyles = applyButtonVariantStyles;

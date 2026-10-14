"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = exports.defaultFocusOutline = exports.padding = exports.zIndex = exports.colors = void 0;
const palette_1 = require("./theme/palette");
exports.colors = {
    palette: palette_1.palette,
    link: {
        color: '#026AA1',
        hover: '#005481',
    }
};
exports.zIndex = [
    'navbar',
    'sidebar',
    'modals',
    'toasts'
].reduce((result, key, index) => {
    result[key] = (index + 1) * 10;
    return result;
}, {});
exports.padding = {
    navbar: {
        desktop: 3.2,
        mobile: 1.6,
    },
};
/**
 * Default focus outline styles for accessibility.
 *
 * @type {CssFragment}
 * @note Breaking change: Previously returned FlattenSimpleInterpolation from styled-components,
 * now returns a plain string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
exports.defaultFocusOutline = `
  outline: 0.2rem auto Highlight;
  outline: 0.2rem auto -webkit-focus-ring-color;
`;
const mobileNavBreak = 38.75; // 620px
const mobileBreak = 75; // 1200px
const desktopBreak = mobileBreak + .0625; // 1201px
/**
 * Breakpoints for responsive design.
 *
 * @note Breaking change: The `desktop()` helper function has been removed as part of
 * the migration away from styled-components. Use `desktopBreak` directly in media queries instead.
 *
 * Migration example:
 * ```
 * // Old (with styled-components):
 * ${theme.breakpoints.desktop(css`padding: 2rem;`)}
 *
 * // New (plain CSS):
 * @media screen and (min-width: ${theme.breakpoints.desktopBreak}em) {
 *   padding: 2rem;
 * }
 * ```
 */
exports.breakpoints = {
    mobileNavBreak,
    mobileBreak,
    desktopBreak,
};
const theme = {
    colors: exports.colors,
    zIndex: exports.zIndex,
    padding: exports.padding,
    breakpoints: exports.breakpoints
};
exports.default = theme; // eslint-disable-line import/no-default-export

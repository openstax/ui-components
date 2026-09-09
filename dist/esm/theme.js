import { palette } from "./theme/palette";
export const colors = {
    palette: palette,
    link: {
        color: '#026AA1',
        hover: '#005481',
    }
};
export const zIndex = [
    'navbar',
    'sidebar',
    'modals',
    'toasts'
].reduce((result, key, index) => {
    result[key] = (index + 1) * 10;
    return result;
}, {});
export const padding = {
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
export const defaultFocusOutline = `
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
export const breakpoints = {
    mobileNavBreak,
    mobileBreak,
    desktopBreak,
};
const theme = {
    colors,
    zIndex,
    padding,
    breakpoints
};
export default theme; // eslint-disable-line import/no-default-export

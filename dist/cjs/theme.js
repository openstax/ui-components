"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breakpoints = exports.defaultFocusOutline = exports.padding = exports.zIndex = exports.colors = void 0;
const styled_components_1 = require("styled-components");
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
exports.defaultFocusOutline = (0, styled_components_1.css) `
  outline: 0.2rem auto Highlight;
  outline: 0.2rem auto -webkit-focus-ring-color;
`;
const mobileNavBreak = 38.75; // 620px
const mobileBreak = 75; // 1200px
const desktopBreak = mobileBreak + .0625; // 1201px
exports.breakpoints = {
    mobileNavBreak,
    mobileBreak,
    desktopBreak,
    desktop: (style) => (0, styled_components_1.css) `
    @media screen and (min-width: ${desktopBreak}em) {
      ${style}
    }
  `,
};
const theme = {
    colors: exports.colors,
    zIndex: exports.zIndex,
    padding: exports.padding,
    breakpoints: exports.breakpoints
};
exports.default = theme; // eslint-disable-line import/no-default-export

import { css, FlattenSimpleInterpolation } from "styled-components";
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
}, {} as { [key: string]: number });

export const padding = {
  navbar: {
    desktop: 3.2,
    mobile: 1.6,
  },
};

const mobileNavBreak = 38.75; // 620px
const mobileBreak = 75; // 1200px
const desktopBreak = mobileBreak + .0625; // 1201px
export const breakpoints = {
  mobileNavBreak,
  mobileBreak,
  desktopBreak,
  desktop: (style: FlattenSimpleInterpolation) => css`
    @media screen and (min-width: ${desktopBreak}em) {
      ${style}
    }
  `,
};

const theme = {
  colors,
  zIndex,
  padding,
  breakpoints
};

export default theme; // eslint-disable-line import/no-default-export

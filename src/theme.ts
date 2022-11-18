import { css, FlattenSimpleInterpolation } from "styled-components";

const palette = {
  red: "#ca2026",
  danger: "#c2002f",
  darkRed: "#c22032",
  lightRed: "#e298a0",
  paleRed: "#FBE7EA",
  green: "#77af42",
  lightGreen: "#8bc753",
  paleGreen: "#e0edd3",
  darkGreen: "#63a524",
  darkerGreen: "4e7226",
  paleYellow: "#ffffbb",
  teal: "#0dc0de",
  blue: "#007da4",
  mediumBlue: "#026AA1",
  lightBlue: "#34bdd8",
  neutralLightBlue: "#0dc0dc",
  tangerine: "#ffbd3e",
  gray: "#5e5e5e",
  darkGray: "#757575",
  pale: "#d5d5d5",
  light: "#e4e4e4",
  white: "#ffffff",
  neutralLightest: "#f9f9f9", // nearly white
  neutralCool: "#f6f7f8", // cool bright gray
  neutralBright: "#f5f5f5", // bright gray
  neutralLighter: "#f1f1f1", // light gray
  neutralLight: "#e5e5e5", // light gray
  neutralMedium: "#a0a0a0", // light gray
  neutral: "#818181", // gray
  neutralThin: "#6f6f6f", // medium gray
  neutralDark: "#5f6163", // dark gray
  neutralFeedback: "#555", // another dark gray
  neutralDarker: "#424242", // very dark gray
  black: "#000000",
  orange: "#D4450C"
} as const;

const buttonVariants = {
  orange: {
    background: palette.orange,
    backgroundActive: "#b03808",
    backgroundHover: "#be3c08",
    color: palette.white,
  },
  light: {
    background: palette.white,
    backgroundActive: "#e5e5e5",
    backgroundHover: "#f1f1f1",
    color: palette.neutralDarker,
  },
  gray: {
    background: "#757575",
    backgroundActive: "#4c4c4c",
    backgroundHover: "#646464",
    color: palette.white,
  }
} as const;

export const colors = {
  palette: palette,
  button: {...buttonVariants, default: buttonVariants.orange},
};

export const typography = {
  button: {
    default: {
      fontWeight: 700,
    },
    light: {
      fontWeight: 400,
    }
  }
};

export const zIndex = [
  'navbar',
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

const mobileBreak = 75; // 1200px
const desktopBreak = mobileBreak + .0625; // 1201px
const breakpoints = {
  desktop: (style: FlattenSimpleInterpolation) => css`
    @media screen and (min-width: ${desktopBreak}em) {
      ${style}
    }
  `,
};

const theme = {
  colors,
  typography,
  zIndex,
  padding,
  breakpoints
};

export default theme;
export type ButtonVariant = keyof typeof buttonVariants;

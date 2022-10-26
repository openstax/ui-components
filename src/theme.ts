const palette = {
  red: "#ca2026",
  danger: "#c2002f",
  darkRed: "#c22032",
  lightRed: "#e298a0",
  paleRed: "#FBE7EA",
  green: "#77af42",
  lightGreen: "#8bc753",
  darkGreen: "#63a524",
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
};

export const colors = {
  palette: palette,
  button: {
    background: palette.orange,
    backgroundHover: "#E74B0D",
    backgroundActive: "#C5400B"
  },
};

const theme = {
  colors: colors,
};

export default theme;

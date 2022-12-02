import { palette } from "./palette";

export const buttonVariants = {
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

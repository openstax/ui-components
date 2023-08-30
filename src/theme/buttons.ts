import { css } from "styled-components/macro";
import { palette } from "./palette";

export type ButtonVariant = keyof typeof buttonStyleSets;

interface ButtonStyleSet {
  background: string;
  backgroundActive: string;
  backgroundHover: string;
  color: string;
  fontWeight?: number;
}

// https://stackoverflow.com/a/54598743
const asButtonStyleSetTypes = <T>(st: { [K in keyof T]: ButtonStyleSet }) => st;

const buttonStyleSets = asButtonStyleSetTypes({
  primary: {
    background: palette.orange,
    backgroundActive: "#b03808",
    backgroundHover: "#be3c08",
    color: palette.white,
  },
  light: {
    background: palette.white,
    backgroundActive: palette.neutralLight,
    backgroundHover: palette.white,
    color: palette.neutralDarker,
    fontWeight: 400,
  },
  secondary: {
    background: palette.darkGray,
    backgroundActive: "#4c4c4c",
    backgroundHover: "#646464",
    color: palette.white,
  },
} as const);

export const applyButtonVariantStyles = (variant: ButtonVariant) => {
  const set = buttonStyleSets[variant];
  return css`
    background-color: ${set.background};
    color: ${set.color};
    font-weight: ${set.fontWeight ?? 700};

    &:not([disabled]) {
      &:hover {
        background: ${set.backgroundHover};
      }
      &:active {
        background: ${set.backgroundActive};
      }
    }
  `;
};

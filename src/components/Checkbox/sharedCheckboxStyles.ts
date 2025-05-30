import { colors } from "../../theme";
import { whiteCheckmark, grayCheckmark, redCheckmark } from "../svgs/checkmarksvgs";

export type CheckboxVariant = keyof typeof checkboxVariants;
export type CheckboxSize = 1.4 | 1.6 | 1.8 | 2;

export const checkboxVariants = {
  primary: {
    backgroundColor: colors.palette.mediumBlue,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.neutralThin}`,
    checkedBorder: `1px solid ${colors.palette.mediumBlue}`,
    backgroundImage: whiteCheckmark
  },
  light: {
    backgroundColor: colors.palette.white,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.pale}`,
    checkedBorder: `1px solid ${colors.palette.pale}`,
    backgroundImage: grayCheckmark
  },
  error: {
    backgroundColor: colors.palette.paleRed,
    color: colors.palette.darkRed,
    unCheckedBorder: `1px solid ${colors.palette.lightRed}`,
    checkedBorder: `1px solid ${colors.palette.lightRed}`,
    backgroundImage: redCheckmark
  },
  disabled: {
    backgroundColor: colors.palette.white,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.pale}`,
    checkedBorder: `1px solid ${colors.palette.pale}`,
    backgroundImage: 'none'
  }
} as const;
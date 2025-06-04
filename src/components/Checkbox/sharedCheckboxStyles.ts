import { css } from "styled-components";
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

// Checkbox label styles
export const checkboxLabelStyles = css<{
  bold?: boolean;
  variant: CheckboxVariant;
  isDisabled?: boolean;
}>`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ isDisabled, variant }) =>
    isDisabled
      ? colors.palette.neutralLight
      : checkboxVariants[variant].color};
`;

// Checkbox input/selection styles
export const checkboxInputStyles = css<{
  variant: CheckboxVariant;
  checkboxSize: CheckboxSize;
  isDisabled?: boolean;
}>`
  appearance: none;
  background-color: ${colors.palette.white};
  opacity: ${({ isDisabled }) => (isDisabled ? '0.4' : '1')};
  border: ${({ isDisabled, variant }) =>
    isDisabled
      ? `1px solid ${colors.palette.pale}`
      : checkboxVariants[variant].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${({ checkboxSize }) => checkboxSize}rem;
  height: ${({ checkboxSize }) => checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    border-radius: 0.2rem;
    width: ${({ checkboxSize }) => checkboxSize}rem;
    height: ${({ checkboxSize }) => checkboxSize}rem;
    border: ${({ variant }) => checkboxVariants[variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${({ variant }) => checkboxVariants[variant].backgroundColor};
    background-image: url('${({ variant }) => checkboxVariants[variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(0);
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
  }
`;

export const checkboxSelectionSlotCheckedStyles = css<{ isDisabled?: boolean }>`
  transform: scale(1);
  opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
`;
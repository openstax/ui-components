import { Checkbox as RACCheckbox, CheckboxProps as RACCheckboxProps } from "react-aria-components";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import { whiteCheckmark, grayCheckmark, redCheckmark } from "./svgs/checkmarksvgs";
import { colors } from "../theme";

const checkboxVariants = {
  primary: {
    backgroundColor: colors.palette.mediumBlue,
    borderColor: colors.palette.mediumBlue,
    checkmark: whiteCheckmark
  },
  light: {
    backgroundColor: colors.palette.white,
    borderColor: colors.palette.pale,
    checkmark: grayCheckmark
  },
  error: {
    backgroundColor: colors.palette.paleRed,
    borderColor: colors.palette.lightRed,
    checkmark: redCheckmark
  },
  disabled: {
    backgroundColor: colors.palette.white,
    borderColor: colors.palette.pale,
    checkmark: 'none'
  }
} as const;

type Variant = keyof typeof checkboxVariants;
type Size = 1.4 | 1.6 | 1.8 | 2;

const StyledCheckbox = styled(RACCheckbox)<{
  $variant: Variant;
  $size: Size;
  $bold: boolean;
}>`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  gap: 1.2rem;
  color: inherit;

  input[type="checkbox"] {
    appearance: none;
    width: ${({ $size }) => $size}rem;
    height: ${({ $size }) => $size}rem;
    margin: 0;
    display: grid;
    place-content: center;
    border: 1px solid ${({ $variant }) => checkboxVariants[$variant].borderColor};
    border-radius: 0.2rem;
    background-color: ${colors.palette.white};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ $variant }) => checkboxVariants[$variant].backgroundColor};
      background-image: url(${({ $variant }) => checkboxVariants[$variant].checkmark});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 80%;
      transform: scale(0);
      transition: transform 0.2s ease-in-out;
      border-radius: 0.2rem;
    }

    &:checked::before {
      transform: scale(1);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;

export interface CheckboxProps extends PropsWithChildren<Omit<RACCheckboxProps, 'children'>> {
  size?: Size;
  variant?: Variant;
  bold?: boolean;
}

export const Checkbox = ({
  size = 1.6,
  variant = 'primary',
  bold = false,
  children,
  ...props
}: CheckboxProps) => {
  return (
    <StyledCheckbox $size={size} $variant={variant} $bold={bold} {...props}>
      {children}
    </StyledCheckbox>
  );
};
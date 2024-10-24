import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { whiteCheckmark, grayCheckmark, redCheckmark } from "./svgs/checkmarksvgs";

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

const StyledLabel = styled.label<{ bold: boolean; variant: CheckboxVariant; isDisabled?: boolean; }>`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${props => props.bold ? 700 : 400};
  color: ${(props => props.isDisabled ? colors.palette.neutralLight : checkboxVariants[props.variant].color)};
`;

// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; isDisabled?: boolean; }>`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${colors.palette.white};
  opacity: ${(props => props.isDisabled ? '0.4' : '1')};
  border: ${props => props.isDisabled ? `1px solid ${colors.palette.pale}` : checkboxVariants[props.variant].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${props => props.checkboxSize}rem;
  height: ${props => props.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: ${props => props.checkboxSize}rem;
    height: ${props => props.checkboxSize}rem;
    border: ${props => checkboxVariants[props.variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${props => checkboxVariants[props.variant].backgroundColor};
    background-image: url('${props => checkboxVariants[props.variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${(props => props.isDisabled ? 0 : 1)};
  }
  `;

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  bold?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;

export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, ...props }: CheckboxProps) => {
  return (
    <StyledLabel bold={bold} variant={variant} isDisabled={disabled} {...labelProps}>
      <StyledInput {...props} type="checkbox" variant={variant} checkboxSize={size} isDisabled={disabled} />
      {children}
    </StyledLabel>
  );
};

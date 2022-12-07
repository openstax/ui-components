import { PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

type CheckboxVariant = keyof typeof checkboxVariants;
type CheckboxSize = 1.4 | 1.6 | 1.8 | 2;

export const checkboxVariants = {
  primary: {
    accentColor: colors.palette.mediumBlue,
    boxShadow: 'none',
  },
  light: {
    accentColor: colors.palette.white,
    boxShadow: '0 0 1px 0',
  }
} as const;

const StyledLabel = styled.label<{ bold: boolean; }>`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${props => props.bold ? 700 : 400}
`;

const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; }>`
  accent-color: ${props => checkboxVariants[props.variant].accentColor};
  width: ${props => props.checkboxSize}rem;
  height: ${props => props.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  &:checked {
    box-shadow: ${props => checkboxVariants[props.variant].boxShadow};
  }
`;

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  bold?: boolean;
}>;

export const Checkbox = ({ children, variant = 'primary', bold = false, size = 1.6, ...props }: CheckboxProps) => {
  return (
    <StyledLabel bold={bold}>
      <StyledInput {...props} type="checkbox" variant={variant} checkboxSize={size} />
      {children}
    </StyledLabel>
  );
};

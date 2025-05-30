import { Checkbox as RACCheckbox, CheckboxProps as RACCheckboxProps } from "react-aria-components";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import { checkboxVariants } from "./sharedCheckboxStyles";
import { colors } from "../../theme";

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

  &[data-checked] [data-slot="selection"] {
    background-color: ${({ $variant }) => checkboxVariants[$variant].backgroundColor};
    background-image: url(${({ $variant }) => checkboxVariants[$variant].backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
    border: ${({ $variant }) => checkboxVariants[$variant].checkedBorder};
  }

  [data-slot="selection"] {
    width: ${({ $size }) => $size}rem;
    height: ${({ $size }) => $size}rem;
    margin: 0;
    border-radius: 0.2rem;
    background-color: ${colors.palette.white};
    border: ${({ $variant }) => checkboxVariants[$variant].unCheckedBorder};
    transition: all 0.2s ease-in-out;
  }

  &[data-disabled] [data-slot="selection"] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export interface CheckboxProps extends PropsWithChildren<Omit<RACCheckboxProps, 'children'>> {
  size?: Size;
  variant?: Variant;
  bold?: boolean;
}

export const CheckboxRAC = ({
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
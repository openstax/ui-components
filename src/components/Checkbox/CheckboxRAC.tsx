import styled from "styled-components";
import { colors } from "../../theme";
import {
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  Text
} from "react-aria-components";
import { PropsWithChildren } from "react";
import { checkboxVariants, CheckboxSize, CheckboxVariant } from "./sharedCheckboxStyles";

export interface CheckboxRACProps
  extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  bold?: boolean;
}

const StyledCheckbox = styled(RACCheckbox)<{
  $variant: CheckboxVariant;
  $size: CheckboxSize;
  $bold: boolean;
}>`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  gap: 1.2rem;
  color: inherit;

  &[data-disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  [data-slot="selection"] {
    appearance: none;
    width: ${({ $size }) => $size}rem;
    height: ${({ $size }) => $size}rem;
    margin: 0;
    border-radius: 0.2rem;
    display: grid;
    place-content: center;
    border: ${({ $variant }) => checkboxVariants[$variant].unCheckedBorder};
    background-color: ${colors.palette.white};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 0.2rem;
      background-color: ${({ $variant }) => checkboxVariants[$variant].backgroundColor};
      background-image: url('${({ $variant }) => checkboxVariants[$variant].backgroundImage}');
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
      transform: scale(0);
    }
  }

  &[data-selected] [data-slot="selection"]::before {
    transform: scale(1);
    opacity: ${(props => props.isDisabled ? 0 : 1)};
  }
`;

export const CheckboxRAC = ({
  size = 1.6,
  variant = "primary",
  bold = false,
  children,
  ...props
}: CheckboxRACProps) => {
  return (
    <StyledCheckbox
      {...props}
      $variant={variant}
      $size={size}
      $bold={bold}
    >
      <div slot="selection" data-slot="selection" />
      <Text>{children}</Text>
    </StyledCheckbox>
  );
};
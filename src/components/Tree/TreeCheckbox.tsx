import styled from "styled-components";
import {
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps
} from "react-aria-components";
import { PropsWithChildren } from "react";
import { 
  checkboxLabelStyles,
  checkboxInputStyles,
  checkboxSelectionSlotCheckedStyles,
  CheckboxSize, 
  CheckboxVariant 
} from "../Checkbox/sharedCheckboxStyles";

export interface TreeCheckboxProps
  extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  bold?: boolean;
}

const StyledCheckbox = styled(RACCheckbox) <{
  variant: CheckboxVariant;
  checkboxSize: CheckboxSize;
  bold: boolean;
  isDisabled?: boolean;
}>`
  ${checkboxLabelStyles}

  [data-slot="selection"] {
    ${checkboxInputStyles}
  }

  &[data-selected] [data-slot="selection"]::before {
    ${checkboxSelectionSlotCheckedStyles}
  }
`;

export const TreeCheckbox = ({
  size = 1.6,
  variant = "primary",
  bold = false,
  children,
  ...props
}: TreeCheckboxProps) => {
  return (
    <StyledCheckbox
      {...props}
      variant={variant}
      checkboxSize={size}
      bold={bold}
    >
      <div data-slot="selection" />
      {children}
    </StyledCheckbox>
  );
};
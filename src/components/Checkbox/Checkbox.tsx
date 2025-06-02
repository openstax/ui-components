import { LabelHTMLAttributes, PropsWithChildren } from "react";
import {  checkboxLabelStyles, checkboxInputStyles, CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

const StyledLabel = styled.label<{ bold: boolean; variant: CheckboxVariant; isDisabled?: boolean; }>`
  ${checkboxLabelStyles}
`;

// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; isDisabled?: boolean; }>`
  ${checkboxInputStyles}
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

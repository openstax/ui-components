import { LabelHTMLAttributes, PropsWithChildren } from "react";
import {  checkboxLabelStyles, checkboxInputStyles, CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { useLabelTooltip } from '../Tooltip';

const StyledLabel = styled.label<{ bold: boolean; variant: CheckboxVariant; isDisabled?: boolean; }>`
  ${checkboxLabelStyles}
  position: relative;
`;

// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; isDisabled?: boolean; }>`
  ${checkboxInputStyles}
`;

const LabelWithTooltipWrapper = styled.div`
  display: inline-block;
`;

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  bold?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  tooltipText?: string;
}>;

export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, tooltipText, ...props }: CheckboxProps) => {
  const { triggerRef, triggerProps, openTooltip, tooltip } = useLabelTooltip(tooltipText);

  return tooltipText
    ? <LabelWithTooltipWrapper>
        <StyledLabel ref={triggerRef} bold={bold} variant={variant} isDisabled={disabled} {...triggerProps} {...labelProps}>
          <StyledInput {...props} type="checkbox" onFocus={openTooltip} variant={variant} checkboxSize={size} isDisabled={disabled} disabled={disabled} />
          {children}
          {tooltip}
        </StyledLabel>
      </LabelWithTooltipWrapper>
    : <StyledLabel bold={bold} variant={variant} isDisabled={disabled} {...labelProps}>
        <StyledInput {...props} type="checkbox" variant={variant} checkboxSize={size} isDisabled={disabled} disabled={disabled} />
        {children}
      </StyledLabel>;
};

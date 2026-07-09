import React, { LabelHTMLAttributes, PropsWithChildren } from "react";
import {  checkboxLabelStyles, checkboxInputStyles, CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import {useTooltipTriggerState} from 'react-stately';
import {useTooltipTrigger} from 'react-aria';
import { CustomTooltip } from '../Tooltip';

const StyledLabel = styled.label<{ bold: boolean; variant: CheckboxVariant; isDisabled?: boolean; }>`
  ${checkboxLabelStyles}
`;

// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; isDisabled?: boolean; }>`
  ${checkboxInputStyles}
`;

const LabelWithTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
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
  const state = useTooltipTriggerState({delay: 0});
  const ref = React.useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger({delay: 0}, state, ref);

  return tooltipText
    ? <LabelWithTooltipWrapper>
        <StyledLabel ref={ref} bold={bold} variant={variant} isDisabled={disabled} {...triggerProps} {...labelProps}>
          <StyledInput {...props} type="checkbox" onFocus={() => state.open()} variant={variant} checkboxSize={size} isDisabled={disabled} disabled={disabled} />
          {children}
          {state.isOpen && (
            <CustomTooltip state={state} {...tooltipProps} placement='right'>{tooltipText}</CustomTooltip>
          )}
        </StyledLabel>
      </LabelWithTooltipWrapper>
    : <StyledLabel bold={bold} variant={variant} isDisabled={disabled} {...labelProps}>
        <StyledInput {...props} type="checkbox" variant={variant} checkboxSize={size} isDisabled={disabled} disabled={disabled} />
        {children}
      </StyledLabel>;
};

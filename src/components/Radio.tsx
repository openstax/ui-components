import React from 'react';
import { PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import {useTooltipTriggerState} from 'react-stately';
import {useTooltipTrigger} from 'react-aria';
import { CustomTooltip } from './Tooltip';

export const StyledLabel = styled.label<{isDisabled?: boolean}>`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${(props => props.isDisabled ? colors.palette.pale : 'inherit')};
  width: 100%;
  position: relative;
`;

// https://moderncss.dev/pure-css-custom-styled-radio-buttons/
export const StyledInput = styled.input<{isDisabled?: boolean}>`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${colors.palette.white};
  opacity: ${(props => props.isDisabled ? '40%' : '100%')};
  font: inherit;
  color: ${colors.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${(props => props.isDisabled ? '#e6e6e6' : 'currentColor')};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${colors.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${(props => props.isDisabled ? 0 : 1)};
  }
`;

const LabelWithTooltipWrapper = styled.div`
  display: inline-flex;
`;

type RadioProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const Radio = ({ children, disabled, ...props }: RadioProps & {tooltipText?: string}) => {

  let state = useTooltipTriggerState({delay: 0});
  let ref = React.useRef(null);
  let inputRef = React.useRef(null);

  // Get props for the trigger and its tooltip
  let { triggerProps, tooltipProps } = useTooltipTrigger({delay: 0}, state, ref);

  return props.tooltipText && disabled
    ? <LabelWithTooltipWrapper>
        <StyledLabel ref={ref} isDisabled={true} aria-disabled={true} {...triggerProps}>
          <StyledInput ref={inputRef} onFocus={() => state.open()} isDisabled={true} aria-disabled={true} {...props} type="radio" />
          {children}
        {state.isOpen && (
          <CustomTooltip state={state} {...tooltipProps} placement='right'>{props.tooltipText}</CustomTooltip>
        )}
        </StyledLabel>
      </LabelWithTooltipWrapper>
    : <StyledLabel isDisabled={disabled} aria-disabled={disabled}>
        <StyledInput isDisabled={disabled} aria-disabled={disabled} {...props} type="radio" />
        {children}
      </StyledLabel>;
};

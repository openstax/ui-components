import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { colors } from "../theme";
import styled from "styled-components";
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipTrigger } from 'react-aria';
import { CustomTooltip } from './Tooltip';
export const StyledLabel = styled.label `
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${(props => props.isDisabled ? colors.palette.pale : 'inherit')};
  width: 100%;
  position: relative;
`;
// https://moderncss.dev/pure-css-custom-styled-radio-buttons/
export const StyledInput = styled.input `
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${colors.palette.white};
  opacity: ${(props => props.isDisabled ? '0.4' : '1')};
  font: inherit;
  color: ${colors.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${colors.palette.neutralThin};
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
const LabelWithTooltipWrapper = styled.div `
  display: inline-block;
`;
export const Radio = ({ children, disabled, labelAs, ...props }) => {
    const state = useTooltipTriggerState({ delay: 0 });
    const ref = React.useRef(null);
    const { triggerProps, tooltipProps } = useTooltipTrigger({ delay: 0 }, state, ref);
    return props.tooltipText
        ? _jsx("div", { children: _jsx(LabelWithTooltipWrapper, { children: _jsxs(StyledLabel, { ref: ref, as: labelAs, isDisabled: disabled, ...triggerProps, children: [_jsx(StyledInput, { type: "radio", onFocus: () => state.open(), isDisabled: disabled, disabled: disabled, ...props }), children, state.isOpen && (_jsx(CustomTooltip, { state: state, ...tooltipProps, placement: 'right', children: props.tooltipText }))] }) }) })
        : _jsxs(StyledLabel, { isDisabled: disabled, as: labelAs, children: [_jsx(StyledInput, { type: "radio", isDisabled: disabled, disabled: disabled, ...props }), children] });
};

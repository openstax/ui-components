import { PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { useLabelTooltip } from './Tooltip';

export const StyledLabel = styled.label<{isDisabled?: boolean}>`
  font-size: 1.6rem;
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

const LabelWithTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
`;

type RadioProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const Radio = ({ children, disabled, labelAs, tooltipText, ...props }: RadioProps & {
  tooltipText?: string;
  labelAs?: string;
}) => {
  const { triggerRef, triggerProps, labelDescription, tooltip } = useLabelTooltip(tooltipText);

  return tooltipText
    ? <div>
        <LabelWithTooltipWrapper>
          <StyledLabel ref={triggerRef} as={labelAs as any} isDisabled={disabled} {...triggerProps}>
            <StyledInput {...props} type="radio" isDisabled={disabled} disabled={disabled} />
            {children}
            {labelDescription}
          </StyledLabel>
          {tooltip}
        </LabelWithTooltipWrapper>
      </div>
    : <StyledLabel isDisabled={disabled} as={labelAs as any}>
        <StyledInput type="radio" isDisabled={disabled} disabled={disabled} {...props} />
        {children}
      </StyledLabel>;
};

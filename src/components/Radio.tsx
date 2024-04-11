import { PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

const StyledLabel = styled.label<{disabled?: boolean}>`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${(props => props.disabled ? colors.palette.neutral : 'inherit')}
`;

// https://moderncss.dev/pure-css-custom-styled-radio-buttons/
const StyledInput = styled.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${colors.palette.white};
  font: inherit;
  color: ${colors.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &:disabled {
    background-color: ${colors.palette.neutralLightest};
  }

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${colors.palette.mediumBlue};
  }

  &:checked::before {
    opacity: 1;
  }
`;

type RadioProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>;

export const Radio = ({ children, ...props }: RadioProps) => {
  return (
    <StyledLabel disabled={props.disabled}>
      <StyledInput {...props} type="radio" />
      {children}
    </StyledLabel>
  );
};

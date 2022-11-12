import { ButtonColor, colors } from "../theme";
import styled from "styled-components";

const StyledButton = styled.button<{ color: ButtonColor }>`
  background-color: ${props =>
    colors.button[props.color].background};
  color: ${props => colors.button[props.color].color};
  font-size: 1.6rem;
  font-weight: ${props => props.color === 'light' ? '400' : '700'};
  line-height: 2rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${props => colors.button[props.color].backgroundHover};
    }
    &:active {
      background: ${props => colors.button[props.color].backgroundActive};
    }
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`;

interface ButtonBase extends React.ComponentPropsWithoutRef<'button'> {
  color?: ButtonColor;
}

interface ButtonProps extends ButtonBase {
  isWaiting?: never;
  waitingText?: never;
}

interface WaitingButtonProps extends ButtonBase {
  isWaiting: boolean;
  waitingText: string;
}

const Button = (props: ButtonProps | WaitingButtonProps) => {
  const { disabled, isWaiting, waitingText, children, ...otherProps } = props;

  return <StyledButton
    {...otherProps}
    disabled={isWaiting || disabled}
    color={props.color || 'orange'}
  >
    {(isWaiting && waitingText) || children}
  </StyledButton>;
}

export default Button;

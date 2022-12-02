import styled from "styled-components";
import { applyButtonVariantStyles, ButtonVariant } from "../theme/buttons";

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  ${props => applyButtonVariantStyles(props.variant)}

  font-size: 1.6rem;
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`;

interface ButtonBase extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
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
  const {
    disabled,
    isWaiting,
    waitingText,
    children,
    variant = 'primary',
    ...otherProps
  } = props;

  return <StyledButton
    {...otherProps}
    disabled={isWaiting || disabled}
    variant={variant}
  >
    {(isWaiting && waitingText) || children}
  </StyledButton>;
}

export default Button;

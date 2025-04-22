import styled, {css} from "styled-components";
import theme from '../../src/theme';
import { applyButtonVariantStyles, ButtonVariant } from "../theme/buttons";

export { applyButtonVariantStyles };
export const buttonCss = css<{variant?: ButtonVariant}>`
  ${props => applyButtonVariantStyles(props.variant || 'primary')}

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
  border-radius: 0.5rem;
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

interface ButtonOptions {
  variant?: ButtonVariant;
}

type ButtonBase = React.ComponentPropsWithoutRef<'button'> & ButtonOptions;
type LinkButtonBase = React.ComponentPropsWithoutRef<'a'> & ButtonOptions;

interface ButtonProps extends ButtonBase {
  isWaiting?: never;
  waitingText?: never;
}

interface WaitingButtonProps extends ButtonBase {
  isWaiting: boolean;
  waitingText: string;
}

export const Button = styled((props: ButtonProps | WaitingButtonProps) => {
  const {
    disabled,
    isWaiting,
    waitingText,
    children,
    variant,
    ...otherProps
  } = props;

  return <button
    {...otherProps}
    disabled={isWaiting || disabled}
  >
    {(isWaiting && waitingText) || children}
  </button>;
})`
  ${buttonCss}
`

export const LinkButton = styled(({ variant, ...props}: LinkButtonBase) =>
  <a {...props}>{props.children}</a>
)`
  ${buttonCss}
`;

export const linkStyle = css`
  color: ${theme.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${theme.colors.link.hover};
  }
`;

export const PlainButton = styled.button`
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
`;

// tslint:disable-next-line:variable-name
export const ButtonLink = styled(PlainButton)`
  ${linkStyle}
`;

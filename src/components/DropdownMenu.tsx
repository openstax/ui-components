import { Button, Menu, MenuItem, MenuProps, MenuTrigger, MenuTriggerProps, Popover } from 'react-aria-components';
import styled from 'styled-components';
import { ButtonVariant, applyButtonVariantStyles } from '../theme/buttons';
import { palette } from '../theme/palette';

const StyledButton = styled(Button)<{ variant: ButtonVariant; width?: string }>`
  ${(props) => applyButtonVariantStyles(props.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  position: relative;
  justify-content: center;
  line-height: 2rem;
  min-height: 2.5rem;
  padding: 0 1.5rem 0 0.5rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  ${(props) => props.width ? `width: ${props.width}` : null}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.4;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  :after {
    background: ${(props) => props.variant === 'light' ? palette.black : palette.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    position: absolute;
    height: 0.5rem;
    margin-top: -0.25rem;
    right: 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`;

const StyledMenu = styled(Menu)`
  margin-top: -0.6rem;
  background-color: ${palette.white};
  border: 0.1rem solid ${palette.pale};
  padding: 0.3rem 0;
  cursor: pointer;
  color: ${palette.black};

  [role="menuitem"] {
    font-size: 1.6rem;
    min-height: 2.5rem;
    line-height: 2rem;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background-color: ${palette.pale};
    }
  }
`;

interface DropdownMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  text?: string;
  variant: ButtonVariant;
  width?: string;
  disabled?: boolean;
}

export const DropdownMenu = <T extends object>(
  { text, children, variant, width, disabled, ...props }: DropdownMenuButtonProps<T>
) => {
  return (
    <MenuTrigger {...props}>
      <StyledButton variant={variant} width={width} isDisabled={disabled}>{text}</StyledButton>
      <Popover>
        <StyledMenu {...props}>
          {children}
        </StyledMenu>
      </Popover>
    </MenuTrigger>
  );
};

export { MenuItem as DropdownMenuItem };

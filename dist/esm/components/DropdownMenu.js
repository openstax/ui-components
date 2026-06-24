import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';
import styled from 'styled-components';
import { applyButtonVariantStyles } from '../theme/buttons';
import { palette } from '../theme/palette';
const StyledButton = styled(Button) `
  ${(props) => applyButtonVariantStyles(props.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  position: relative;
  justify-content: space-between;
  line-height: 2rem;
  min-height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  ${(props) => props.width ? `width: ${props.width};` : null}
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
    height: 0.6rem;
    margin-top: -0.25rem;
    right: 1rem;
    transform: rotate(135deg);
    width: 0.6rem;
  }
`;
const StyledMenu = styled(Menu) `
  margin-top: -0.6rem;
  background-color: ${palette.white};
  border: 0.1rem solid ${palette.pale};
  padding: 0;
  cursor: pointer;
  color: ${palette.black};

  [role="menuitem"] {
    display: block;
    color: inherit;
    text-decoration: none;
    font-size: 1.6rem;
    min-height: 2.5rem;
    line-height: 2rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background-color: ${palette.neutralLighter};
    }
  }
`;
export const DropdownMenu = ({ text, children, variant, width, disabled, ...props }) => {
    return (_jsxs(MenuTrigger, { ...props, children: [_jsx(StyledButton, { variant: variant, width: width, isDisabled: disabled, children: text }), _jsx(Popover, { children: _jsx(StyledMenu, { ...props, children: children }) })] }));
};
export { MenuItem as DropdownMenuItem };

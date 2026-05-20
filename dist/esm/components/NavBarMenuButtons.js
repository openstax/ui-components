import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogTrigger, Menu, MenuItem, MenuTrigger, Popover, } from "react-aria-components";
import styled from "styled-components";
import { colors, defaultFocusOutline } from "../../src/theme";
import { NavBarButton } from "./NavBarButton";
export const NavBarMenuItem = styled(MenuItem) ``;
export const PopoverContainer = styled.div `
  padding: 1.6rem;
`;
export const NavBarPopover = styled(Popover) `
  margin-top: -1rem;
  border-top: 0.4rem solid ${colors.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${NavBarMenuItem} {
    font-size: 1.6rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover,
    &[data-hovered],
    &[data-focused] {
      background: ${colors.palette.neutralLighter};
    }

    &:focus-visible {
      ${defaultFocusOutline}
      outline-offset: -0.2rem;
    }

    &:active {
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${colors.palette.neutralBright};
    }
  }
`;
const NavBarBaseButton = ({ isMenu, children, popoverProps, ...props }) => {
    const Trigger = isMenu ? MenuTrigger : DialogTrigger;
    const Content = isMenu ? Menu : Dialog;
    return (_jsxs(Trigger, { children: [_jsx(NavBarButton, { ...props }), _jsx(NavBarPopover, { ...popoverProps, children: _jsx(Content, { children: children }) })] }));
};
export const NavBarPopoverButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: false }));
export const NavBarMenuButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: true }));

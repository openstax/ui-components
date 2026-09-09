import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Menu, MenuTrigger } from 'react-aria-components';
import styled from 'styled-components';
import { colors, defaultFocusOutline } from '../../theme';
import { NavBarPopover, NavBarMenuItem } from '../NavBarMenuButtons';
import { UserIcon } from './UserIcon';
export const ProfileMenuButton = styled(Button) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${colors.palette.white};
  background-color: ${colors.palette.darkTeal};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  }

  &[data-focused],
  &[data-focus-visible] {
    ${defaultFocusOutline}
    outline-offset: 0.2rem;
  }

  svg {
    width: 1.5rem;
  }
`;
export const ProfileMenuPopover = styled(NavBarPopover) `
  min-width: 10rem;
  margin-top: 0.4rem;
`;
export const ProfileMenuItem = styled(NavBarMenuItem) `
  color: ${colors.palette.neutralDarker};
  text-decoration: none;
`;
function getInitials(user) {
    var _a, _b;
    const first = ((_a = user === null || user === void 0 ? void 0 : user.firstName) === null || _a === void 0 ? void 0 : _a.charAt(0)) || '';
    const last = ((_b = user === null || user === void 0 ? void 0 : user.lastName) === null || _b === void 0 ? void 0 : _b.charAt(0)) || '';
    if (!first && !last) {
        return null;
    }
    return (first + last).toUpperCase();
}
export const ProfileMenu = ({ user, onAction, ariaLabel = 'Account actions', children, 'data-testid': testId, }) => {
    const displayInitials = getInitials(user);
    return (_jsxs(MenuTrigger, { children: [_jsx(ProfileMenuButton, { "aria-label": ariaLabel, "data-testid": testId, children: displayInitials || _jsx(UserIcon, {}) }), _jsx(ProfileMenuPopover, { placement: "bottom end", children: _jsx(Menu, { onAction: onAction, children: children }) })] }));
};
export { UserIcon } from './UserIcon';

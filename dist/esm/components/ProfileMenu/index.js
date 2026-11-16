import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import { Button, composeRenderProps, Menu, MenuTrigger } from 'react-aria-components';
import { NavBarPopover, NavBarMenuItem } from '../NavBarMenuButtons';
import { UserIcon } from './UserIcon';
import './ProfileMenu.css';
import '../../theme/theme.css';
export const ProfileMenuButton = React.forwardRef(({ className, ...props }, ref) => (
// style is deliberately not destructured: with the theme defaults moved into
// ProfileMenu.css there is nothing left to merge it with, so it passes straight through
// in ...props and react-aria handles both the object and render-callback forms.
_jsx(Button, { ref: ref, className: composeRenderProps(className, (resolved) => classNames('profile-menu-button', resolved)), ...props })));
ProfileMenuButton.displayName = 'ProfileMenuButton';
export const ProfileMenuPopover = React.forwardRef(({ className, ...props }, ref) => (_jsx(NavBarPopover, { ref: ref, className: composeRenderProps(className, (resolved) => classNames('profile-menu-popover', resolved)), ...props })));
ProfileMenuPopover.displayName = 'ProfileMenuPopover';
export const ProfileMenuItem = React.forwardRef(({ className, ...props }, ref) => (
// style passes through in ...props — see the note on ProfileMenuButton above.
_jsx(NavBarMenuItem, { ref: ref, className: composeRenderProps(className, (resolved) => classNames('profile-menu-item', resolved)), ...props })));
ProfileMenuItem.displayName = 'ProfileMenuItem';
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
    return (_jsxs(MenuTrigger, { children: [_jsx(ProfileMenuButton, { "aria-label": ariaLabel, "data-testid": testId, children: displayInitials || _jsx(UserIcon, {}) }), _jsx(ProfileMenuPopover, { placement: "bottom end", isNonModal: true, children: _jsx(Menu, { onAction: onAction, children: children }) })] }));
};
export { UserIcon } from './UserIcon';

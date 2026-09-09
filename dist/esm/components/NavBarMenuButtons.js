import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { composeRenderProps, Dialog, DialogTrigger, Menu, MenuItem, MenuTrigger, Popover, } from "react-aria-components";
import { NavBarButton } from "./NavBarButton";
import "./NavBarMenuButtons.css";
import "../theme/theme.css";
export const NavBarMenuItem = React.forwardRef(({ className, ...props }, ref) => (
// style is deliberately not destructured: with the theme defaults moved into
// NavBarMenuButtons.css there is nothing left to merge it with, so it passes straight
// through in ...props and react-aria handles both the object and render-callback forms.
// That is why this needs no composeRenderProps for style (cf. CORE-2710) — the bug that
// one guards against was us overwriting the caller's style, which we no longer do.
_jsx(MenuItem, { ref: ref, className: composeRenderProps(className, (resolved) => classNames("navbar-menu-item", resolved)), ...props })));
NavBarMenuItem.displayName = "NavBarMenuItem";
export const PopoverContainer = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames("navbar-popover-container", className), ...props })));
PopoverContainer.displayName = "PopoverContainer";
export const NavBarPopover = React.forwardRef(({ className, ...props }, ref) => (
// style passes through in ...props — see the note on NavBarMenuItem above.
_jsx(Popover, { ref: ref, className: composeRenderProps(className, (resolved) => classNames("navbar-popover", resolved)), ...props })));
NavBarPopover.displayName = "NavBarPopover";
const NavBarBaseButton = ({ isMenu, children, popoverProps, ...props }) => {
    const Trigger = isMenu ? MenuTrigger : DialogTrigger;
    const Content = isMenu ? Menu : Dialog;
    return (_jsxs(Trigger, { children: [_jsx(NavBarButton, { ...props }), _jsx(NavBarPopover, { ...popoverProps, children: _jsx(Content, { children: children }) })] }));
};
export const NavBarPopoverButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: false }));
export const NavBarMenuButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: true }));

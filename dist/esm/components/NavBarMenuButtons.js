import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { composeRenderProps, Dialog, DialogTrigger, Menu, MenuItem, MenuTrigger, Popover, } from "react-aria-components";
import { colors } from "../theme";
import { NavBarButton } from "./NavBarButton";
import "./NavBarMenuButtons.css";
export const NavBarMenuItem = React.forwardRef(({ className, style, ...props }, ref) => {
    // composeRenderProps normalises the object and render-callback forms of style so a
    // caller-supplied callback is merged rather than dropped. The caller still spreads last
    // and can override the CSS variables set here.
    const menuItemStyle = composeRenderProps(style, (resolvedStyle) => ({
        '--navbar-menu-item-hover-bg': colors.palette.neutralLighter,
        '--navbar-menu-item-border-color': colors.palette.neutralBright,
        ...resolvedStyle
    }));
    return (_jsx(MenuItem, { ref: ref, className: composeRenderProps(className, (resolved) => classNames("navbar-menu-item", resolved)), style: menuItemStyle, ...props }));
});
NavBarMenuItem.displayName = "NavBarMenuItem";
export const PopoverContainer = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames("navbar-popover-container", className), ...props })));
PopoverContainer.displayName = "PopoverContainer";
export const NavBarPopover = React.forwardRef(({ className, style, ...props }, ref) => {
    const popoverStyle = composeRenderProps(style, (resolvedStyle) => ({
        '--navbar-popover-border-color': colors.palette.darkGreen,
        ...resolvedStyle
    }));
    return (_jsx(Popover, { ref: ref, className: composeRenderProps(className, (resolved) => classNames("navbar-popover", resolved)), style: popoverStyle, ...props }));
});
NavBarPopover.displayName = "NavBarPopover";
const NavBarBaseButton = ({ isMenu, children, popoverProps, ...props }) => {
    const Trigger = isMenu ? MenuTrigger : DialogTrigger;
    const Content = isMenu ? Menu : Dialog;
    return (_jsxs(Trigger, { children: [_jsx(NavBarButton, { ...props }), _jsx(NavBarPopover, { ...popoverProps, children: _jsx(Content, { children: children }) })] }));
};
export const NavBarPopoverButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: false }));
export const NavBarMenuButton = (props) => (_jsx(NavBarBaseButton, { ...props, isMenu: true }));

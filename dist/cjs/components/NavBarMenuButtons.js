"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarMenuButton = exports.NavBarPopoverButton = exports.NavBarPopover = exports.PopoverContainer = exports.NavBarMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_aria_components_1 = require("react-aria-components");
const theme_1 = require("../theme");
const NavBarButton_1 = require("./NavBarButton");
require("./NavBarMenuButtons.css");
exports.NavBarMenuItem = react_1.default.forwardRef(({ className, style, ...props }, ref) => {
    // composeRenderProps normalises the object and render-callback forms of style so a
    // caller-supplied callback is merged rather than dropped. The caller still spreads last
    // and can override the CSS variables set here.
    const menuItemStyle = (0, react_aria_components_1.composeRenderProps)(style, (resolvedStyle) => ({
        '--navbar-menu-item-hover-bg': theme_1.colors.palette.neutralLighter,
        '--navbar-menu-item-border-color': theme_1.colors.palette.neutralBright,
        ...resolvedStyle
    }));
    return ((0, jsx_runtime_1.jsx)(react_aria_components_1.MenuItem, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)("navbar-menu-item", resolved)), style: menuItemStyle, ...props }));
});
exports.NavBarMenuItem.displayName = "NavBarMenuItem";
exports.PopoverContainer = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)("navbar-popover-container", className), ...props })));
exports.PopoverContainer.displayName = "PopoverContainer";
exports.NavBarPopover = react_1.default.forwardRef(({ className, style, ...props }, ref) => {
    const popoverStyle = (0, react_aria_components_1.composeRenderProps)(style, (resolvedStyle) => ({
        '--navbar-popover-border-color': theme_1.colors.palette.darkGreen,
        ...resolvedStyle
    }));
    return ((0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)("navbar-popover", resolved)), style: popoverStyle, ...props }));
});
exports.NavBarPopover.displayName = "NavBarPopover";
const NavBarBaseButton = ({ isMenu, children, popoverProps, ...props }) => {
    const Trigger = isMenu ? react_aria_components_1.MenuTrigger : react_aria_components_1.DialogTrigger;
    const Content = isMenu ? react_aria_components_1.Menu : react_aria_components_1.Dialog;
    return ((0, jsx_runtime_1.jsxs)(Trigger, { children: [(0, jsx_runtime_1.jsx)(NavBarButton_1.NavBarButton, { ...props }), (0, jsx_runtime_1.jsx)(exports.NavBarPopover, { ...popoverProps, children: (0, jsx_runtime_1.jsx)(Content, { children: children }) })] }));
};
const NavBarPopoverButton = (props) => ((0, jsx_runtime_1.jsx)(NavBarBaseButton, { ...props, isMenu: false }));
exports.NavBarPopoverButton = NavBarPopoverButton;
const NavBarMenuButton = (props) => ((0, jsx_runtime_1.jsx)(NavBarBaseButton, { ...props, isMenu: true }));
exports.NavBarMenuButton = NavBarMenuButton;

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
const NavBarButton_1 = require("./NavBarButton");
require("./NavBarMenuButtons.css");
require("../theme/theme.css");
exports.NavBarMenuItem = react_1.default.forwardRef(({ className, ...props }, ref) => (
// style is deliberately not destructured: with the theme defaults moved into
// NavBarMenuButtons.css there is nothing left to merge it with, so it passes straight
// through in ...props and react-aria handles both the object and render-callback forms.
// That is why this needs no composeRenderProps for style (cf. CORE-2710) — the bug that
// one guards against was us overwriting the caller's style, which we no longer do.
(0, jsx_runtime_1.jsx)(react_aria_components_1.MenuItem, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)("navbar-menu-item", resolved)), ...props })));
exports.NavBarMenuItem.displayName = "NavBarMenuItem";
exports.PopoverContainer = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)("navbar-popover-container", className), ...props })));
exports.PopoverContainer.displayName = "PopoverContainer";
exports.NavBarPopover = react_1.default.forwardRef(({ className, ...props }, ref) => (
// style passes through in ...props — see the note on NavBarMenuItem above.
(0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)("navbar-popover", resolved)), ...props })));
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

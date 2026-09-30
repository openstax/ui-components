"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = exports.DropdownMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
Object.defineProperty(exports, "DropdownMenuItem", { enumerable: true, get: function () { return react_aria_components_1.MenuItem; } });
const buttons_1 = require("../theme/buttons");
const palette_1 = require("../theme/palette");
require("./DropdownMenu.css");
const DropdownMenu = ({ text, children, variant, width, disabled, ...props }) => {
    var _a;
    const variantStyles = (0, buttons_1.getButtonVariantStyles)(variant);
    const buttonStyle = {
        '--button-bg': variantStyles.background,
        '--button-bg-hover': variantStyles.backgroundHover,
        '--button-bg-active': variantStyles.backgroundActive,
        '--button-color': variantStyles.color,
        '--button-outline': variantStyles.outline,
        '--button-shadow': variantStyles.shadow,
        '--button-font-weight': (_a = variantStyles.fontWeight) !== null && _a !== void 0 ? _a : 700,
        '--dropdown-caret-color': variant === 'light' ? palette_1.palette.black : palette_1.palette.white,
        ...(width ? { width } : {}),
    };
    return ((0, jsx_runtime_1.jsxs)(react_aria_components_1.MenuTrigger, { ...props, children: [(0, jsx_runtime_1.jsx)(react_aria_components_1.Button, { className: "dropdown-menu-button", style: buttonStyle, isDisabled: disabled, children: text }), (0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { children: (0, jsx_runtime_1.jsx)(react_aria_components_1.Menu, { ...props, className: "dropdown-menu", children: children }) })] }));
};
exports.DropdownMenu = DropdownMenu;

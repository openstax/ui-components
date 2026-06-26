import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';
import { getButtonVariantStyles } from '../theme/buttons';
import { palette } from '../theme/palette';
import './DropdownMenu.css';
export const DropdownMenu = ({ text, children, variant, width, disabled, ...props }) => {
    var _a;
    const variantStyles = getButtonVariantStyles(variant);
    const buttonStyle = {
        '--button-bg': variantStyles.background,
        '--button-bg-hover': variantStyles.backgroundHover,
        '--button-bg-active': variantStyles.backgroundActive,
        '--button-color': variantStyles.color,
        '--button-outline': variantStyles.outline,
        '--button-shadow': variantStyles.shadow,
        '--button-font-weight': (_a = variantStyles.fontWeight) !== null && _a !== void 0 ? _a : 700,
        '--dropdown-caret-color': variant === 'light' ? palette.black : palette.white,
        ...(width ? { width } : {}),
    };
    return (_jsxs(MenuTrigger, { ...props, children: [_jsx(Button, { className: "dropdown-menu-button", style: buttonStyle, isDisabled: disabled, children: text }), _jsx(Popover, { children: _jsx(Menu, { ...props, className: "dropdown-menu", children: children }) })] }));
};
export { MenuItem as DropdownMenuItem };

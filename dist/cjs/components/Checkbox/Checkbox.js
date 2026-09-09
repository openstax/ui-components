"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sharedCheckboxStyles_1 = require("./sharedCheckboxStyles");
const classnames_1 = __importDefault(require("classnames"));
require("./Checkbox.css");
require("../../theme/theme.css");
const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, className, style, ...props }) => {
    // Get variant styles for CSS variables
    const variantStyles = disabled ? sharedCheckboxStyles_1.checkboxVariants.disabled : sharedCheckboxStyles_1.checkboxVariants[variant];
    // Merge labelProps className with our label classes
    const labelClassName = (0, classnames_1.default)('checkbox-label', { 'checkbox-label--disabled': disabled }, labelProps === null || labelProps === void 0 ? void 0 : labelProps.className);
    // Merge labelProps style with our CSS variables
    const labelStyle = {
        '--checkbox-font-weight': bold ? 700 : 400,
        '--checkbox-color': variantStyles.color,
        ...labelProps === null || labelProps === void 0 ? void 0 : labelProps.style
    };
    // Merge input className
    const inputClassName = (0, classnames_1.default)('checkbox-input', { 'checkbox-input--disabled': disabled }, className);
    // Merge input style with our CSS variables
    const inputStyle = {
        '--checkbox-size': `${size}rem`,
        '--checkbox-bg': variantStyles.backgroundColor,
        '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
        '--checkbox-border-checked': variantStyles.checkedBorder,
        '--checkbox-checkmark': variantStyles.backgroundImage === 'none' ? 'none' : `url('${variantStyles.backgroundImage}')`,
        '--checkbox-opacity': disabled ? '0.4' : '1',
        ...style
    };
    return ((0, jsx_runtime_1.jsxs)("label", { ...labelProps, className: labelClassName, style: labelStyle, children: [(0, jsx_runtime_1.jsx)("input", { ...props, type: "checkbox", className: inputClassName, style: inputStyle, disabled: disabled }), children] }));
};
exports.Checkbox = Checkbox;

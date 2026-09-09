import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { checkboxVariants } from "./sharedCheckboxStyles";
import classNames from "classnames";
import "./Checkbox.css";
import '../../theme/theme.css';
export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, className, style, ...props }) => {
    // Get variant styles for CSS variables
    const variantStyles = disabled ? checkboxVariants.disabled : checkboxVariants[variant];
    // Merge labelProps className with our label classes
    const labelClassName = classNames('checkbox-label', { 'checkbox-label--disabled': disabled }, labelProps === null || labelProps === void 0 ? void 0 : labelProps.className);
    // Merge labelProps style with our CSS variables
    const labelStyle = {
        '--checkbox-font-weight': bold ? 700 : 400,
        '--checkbox-color': variantStyles.color,
        ...labelProps === null || labelProps === void 0 ? void 0 : labelProps.style
    };
    // Merge input className
    const inputClassName = classNames('checkbox-input', { 'checkbox-input--disabled': disabled }, className);
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
    return (_jsxs("label", { ...labelProps, className: labelClassName, style: labelStyle, children: [_jsx("input", { ...props, type: "checkbox", className: inputClassName, style: inputStyle, disabled: disabled }), children] }));
};

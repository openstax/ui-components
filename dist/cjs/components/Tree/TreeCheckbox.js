"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCheckbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
const sharedCheckboxStyles_1 = require("../Checkbox/sharedCheckboxStyles");
const checkmarksvgs_1 = require("../svgs/checkmarksvgs");
const classnames_1 = __importDefault(require("classnames"));
require("../Checkbox/Checkbox.css");
require("../../theme/theme.css");
const TreeCheckbox = ({ size = 1.6, variant = "primary", bold = false, children, isDisabled, className, style, ...props }) => {
    // Get variant styles for CSS variables
    const variantStyles = isDisabled ? sharedCheckboxStyles_1.checkboxVariants.disabled : sharedCheckboxStyles_1.checkboxVariants[variant];
    // Build className. composeRenderProps normalises the string and render-callback
    // forms of className so a caller-supplied callback is composed rather than dropped.
    const checkboxClassName = (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('checkbox-label', { 'checkbox-label--disabled': isDisabled }, resolved));
    // Build style with CSS variables. composeRenderProps normalises the object and
    // render-callback forms of style so a caller-supplied callback is merged rather than
    // dropped. The caller still spreads last and can override the variables set here.
    //
    // Only genuinely dynamic bindings live here. The static palette values that used to sit
    // alongside them are defaults in Checkbox.css now, as var(--checkbox-*, var(--ox-*));
    // src/theme/tokens.spec.ts is what guards them.
    const checkboxStyle = (0, react_aria_components_1.composeRenderProps)(style, (resolvedStyle) => ({
        '--checkbox-font-weight': bold ? 700 : 400,
        '--checkbox-color': variantStyles.color,
        '--checkbox-size': `${size}rem`,
        '--checkbox-bg': variantStyles.backgroundColor,
        '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
        '--checkbox-border-checked': variantStyles.checkedBorder,
        '--checkbox-checkmark': variantStyles.backgroundImage === 'none' ? 'none' : `url('${variantStyles.backgroundImage}')`,
        '--checkbox-opacity': isDisabled ? '0.4' : '1',
        '--checkbox-checked-opacity': isDisabled ? '0' : '1',
        '--checkbox-indeterminate-icon': `url('${checkmarksvgs_1.checkedMixIcon}')`,
        ...resolvedStyle,
    }));
    return ((0, jsx_runtime_1.jsxs)(react_aria_components_1.Checkbox, { ...props, className: checkboxClassName, style: checkboxStyle, isDisabled: isDisabled, children: [(0, jsx_runtime_1.jsx)("div", { "data-slot": "selection" }), children] }));
};
exports.TreeCheckbox = TreeCheckbox;

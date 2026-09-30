"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonLink = exports.PlainButton = exports.LinkButton = exports.Button = exports.linkStyle = exports.buttonCss = exports.applyButtonVariantStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const theme_1 = __importDefault(require("../theme"));
const buttons_1 = require("../theme/buttons");
require("./Button.css");
// Re-export for backwards compatibility
var buttons_2 = require("../theme/buttons");
Object.defineProperty(exports, "applyButtonVariantStyles", { enumerable: true, get: function () { return buttons_2.applyButtonVariantStyles; } });
// Export buttonCss as a string for backwards compatibility
exports.buttonCss = 'button-base';
/**
 * Link style CSS fragment for backwards compatibility.
 *
 * @deprecated This export is deprecated. Use the ButtonLink component instead.
 * @note Breaking change: Previously returned a styled-components css fragment,
 * now returns a plain CSS string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
exports.linkStyle = `
  color: ${theme_1.default.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${theme_1.default.colors.link.hover};
  }
`;
exports.Button = react_1.default.forwardRef((props, ref) => {
    var _a;
    const { disabled, isWaiting, waitingText, children, variant = 'primary', className, style, ...otherProps } = props;
    const variantStyles = (0, buttons_1.getButtonVariantStyles)(variant);
    const buttonStyle = {
        '--button-bg': variantStyles.background,
        '--button-bg-hover': variantStyles.backgroundHover,
        '--button-bg-active': variantStyles.backgroundActive,
        '--button-color': variantStyles.color,
        '--button-outline': variantStyles.outline,
        '--button-shadow': variantStyles.shadow,
        '--button-font-weight': (_a = variantStyles.fontWeight) !== null && _a !== void 0 ? _a : 700,
        ...style
    };
    return ((0, jsx_runtime_1.jsx)("button", { ...otherProps, ref: ref, disabled: isWaiting || disabled, className: (0, classnames_1.default)('button-base', className), style: buttonStyle, children: (isWaiting && waitingText) || children }));
});
exports.Button.displayName = 'Button';
exports.LinkButton = react_1.default.forwardRef((props, ref) => {
    var _a;
    const { variant = 'primary', className, style, children, ...otherProps } = props;
    const variantStyles = (0, buttons_1.getButtonVariantStyles)(variant);
    const linkStyle = {
        '--button-bg': variantStyles.background,
        '--button-bg-hover': variantStyles.backgroundHover,
        '--button-bg-active': variantStyles.backgroundActive,
        '--button-color': variantStyles.color,
        '--button-outline': variantStyles.outline,
        '--button-shadow': variantStyles.shadow,
        '--button-font-weight': (_a = variantStyles.fontWeight) !== null && _a !== void 0 ? _a : 700,
        ...style
    };
    return ((0, jsx_runtime_1.jsx)("a", { ...otherProps, ref: ref, className: (0, classnames_1.default)('button-base', className), style: linkStyle, children: children }));
});
exports.LinkButton.displayName = 'LinkButton';
exports.PlainButton = react_1.default.forwardRef((props, ref) => {
    const { className, children, ...otherProps } = props;
    return ((0, jsx_runtime_1.jsx)("button", { ...otherProps, ref: ref, className: (0, classnames_1.default)('plain-button', className), children: children }));
});
exports.PlainButton.displayName = 'PlainButton';
exports.ButtonLink = react_1.default.forwardRef((props, ref) => {
    const { className, style, children, ...otherProps } = props;
    const linkStyleVars = {
        '--link-color': theme_1.default.colors.link.color,
        '--link-hover-color': theme_1.default.colors.link.hover,
        ...style
    };
    return ((0, jsx_runtime_1.jsx)("button", { ...otherProps, ref: ref, className: (0, classnames_1.default)('button-link', className), style: linkStyleVars, children: children }));
});
exports.ButtonLink.displayName = 'ButtonLink';

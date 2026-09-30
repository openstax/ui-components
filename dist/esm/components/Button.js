import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import theme from '../theme';
import { getButtonVariantStyles } from "../theme/buttons";
import './Button.css';
// Re-export for backwards compatibility
export { applyButtonVariantStyles } from "../theme/buttons";
// Export buttonCss as a string for backwards compatibility
export const buttonCss = 'button-base';
/**
 * Link style CSS fragment for backwards compatibility.
 *
 * @deprecated This export is deprecated. Use the ButtonLink component instead.
 * @note Breaking change: Previously returned a styled-components css fragment,
 * now returns a plain CSS string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
export const linkStyle = `
  color: ${theme.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${theme.colors.link.hover};
  }
`;
export const Button = React.forwardRef((props, ref) => {
    var _a;
    const { disabled, isWaiting, waitingText, children, variant = 'primary', className, style, ...otherProps } = props;
    const variantStyles = getButtonVariantStyles(variant);
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
    return (_jsx("button", { ...otherProps, ref: ref, disabled: isWaiting || disabled, className: classNames('button-base', className), style: buttonStyle, children: (isWaiting && waitingText) || children }));
});
Button.displayName = 'Button';
export const LinkButton = React.forwardRef((props, ref) => {
    var _a;
    const { variant = 'primary', className, style, children, ...otherProps } = props;
    const variantStyles = getButtonVariantStyles(variant);
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
    return (_jsx("a", { ...otherProps, ref: ref, className: classNames('button-base', className), style: linkStyle, children: children }));
});
LinkButton.displayName = 'LinkButton';
export const PlainButton = React.forwardRef((props, ref) => {
    const { className, children, ...otherProps } = props;
    return (_jsx("button", { ...otherProps, ref: ref, className: classNames('plain-button', className), children: children }));
});
PlainButton.displayName = 'PlainButton';
export const ButtonLink = React.forwardRef((props, ref) => {
    const { className, style, children, ...otherProps } = props;
    const linkStyleVars = {
        '--link-color': theme.colors.link.color,
        '--link-hover-color': theme.colors.link.hover,
        ...style
    };
    return (_jsx("button", { ...otherProps, ref: ref, className: classNames('button-link', className), style: linkStyleVars, children: children }));
});
ButtonLink.displayName = 'ButtonLink';

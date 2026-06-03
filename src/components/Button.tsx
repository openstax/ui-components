import React from 'react';
import classNames from 'classnames';
import theme from '../theme';
import { getButtonVariantStyles, ButtonVariant } from "../theme/buttons";
import './Button.css';

// Re-export for backwards compatibility
export { applyButtonVariantStyles } from "../theme/buttons";

// Export buttonCss as a string for backwards compatibility
export const buttonCss = 'button-base';

interface ButtonOptions {
  variant?: ButtonVariant;
}

type ButtonBase = React.ComponentPropsWithoutRef<'button'> & ButtonOptions;
type LinkButtonBase = React.ComponentPropsWithoutRef<'a'> & ButtonOptions;

export interface ButtonProps extends ButtonBase {
  isWaiting?: never;
  waitingText?: never;
}

export interface WaitingButtonProps extends ButtonBase {
  isWaiting: boolean;
  waitingText: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps | WaitingButtonProps>(
  (props, ref) => {
    const {
      disabled,
      isWaiting,
      waitingText,
      children,
      variant = 'primary',
      className,
      style,
      ...otherProps
    } = props;

    const variantStyles = getButtonVariantStyles(variant);
    const buttonStyle = {
      '--button-bg': variantStyles.background,
      '--button-bg-hover': variantStyles.backgroundHover,
      '--button-bg-active': variantStyles.backgroundActive,
      '--button-color': variantStyles.color,
      '--button-outline': variantStyles.outline,
      '--button-shadow': variantStyles.shadow,
      '--button-font-weight': variantStyles.fontWeight ?? 700,
      ...style
    } as React.CSSProperties;

    return (
      <button
        {...otherProps}
        ref={ref}
        disabled={isWaiting || disabled}
        className={classNames('button-base', className)}
        style={buttonStyle}
      >
        {(isWaiting && waitingText) || children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonBase>(
  (props, ref) => {
    const { variant = 'primary', className, style, ...otherProps } = props;

    const variantStyles = getButtonVariantStyles(variant);
    const linkStyle = {
      '--button-bg': variantStyles.background,
      '--button-bg-hover': variantStyles.backgroundHover,
      '--button-bg-active': variantStyles.backgroundActive,
      '--button-color': variantStyles.color,
      '--button-outline': variantStyles.outline,
      '--button-shadow': variantStyles.shadow,
      '--button-font-weight': variantStyles.fontWeight ?? 700,
      ...style
    } as React.CSSProperties;

    return (
      <a
        {...otherProps}
        ref={ref}
        className={classNames('button-base', className)}
        style={linkStyle}
      >
        {props.children}
      </a>
    );
  }
);

LinkButton.displayName = 'LinkButton';

export const PlainButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(
  (props, ref) => {
    const { className, ...otherProps } = props;
    return (
      <button
        {...otherProps}
        ref={ref}
        className={classNames('plain-button', className)}
      >
        {props.children}
      </button>
    );
  }
);

PlainButton.displayName = 'PlainButton';

export const ButtonLink = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(
  (props, ref) => {
    const { className, style, ...otherProps } = props;

    const linkStyleVars = {
      '--link-color': theme.colors.link.color,
      '--link-hover-color': theme.colors.link.hover,
      ...style
    } as React.CSSProperties;

    return (
      <button
        {...otherProps}
        ref={ref}
        className={classNames('button-link', className)}
        style={linkStyleVars}
      >
        {props.children}
      </button>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

import React, { LabelHTMLAttributes, PropsWithChildren, useEffect, useRef } from "react";
import { checkboxVariants, CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import "./Checkbox.css";

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  /** Exposes the mixed state, for a checkbox that summarises a set of others. Does not change `checked`. */
  indeterminate?: boolean;
  size?: CheckboxSize;
  bold?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;

export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, className, style, indeterminate = false, onClick, ...props }: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // `indeterminate` is a DOM property with no attribute, so it is applied after every render.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  });

  // Get variant styles for CSS variables
  const variantStyles = disabled ? checkboxVariants.disabled : checkboxVariants[variant];

  // Merge labelProps className with our label classes
  const labelClassName = classNames(
    'checkbox-label',
    { 'checkbox-label--disabled': disabled },
    labelProps?.className
  );

  // Merge labelProps style with our CSS variables
  const labelStyle = {
    '--checkbox-font-weight': bold ? 700 : 400,
    '--checkbox-color': variantStyles.color,
    ...labelProps?.style
  } as unknown as React.CSSProperties;

  // Merge input className
  const inputClassName = classNames(
    'checkbox-input',
    { 'checkbox-input--disabled': disabled },
    className
  );

  // Merge input style with our CSS variables
  const inputStyle = {
    '--checkbox-size': `${size}rem`,
    '--checkbox-bg': variantStyles.backgroundColor,
    '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
    '--checkbox-border-checked': variantStyles.checkedBorder,
    '--checkbox-checkmark': variantStyles.backgroundImage === 'none' ? 'none' : `url('${variantStyles.backgroundImage}')`,
    '--checkbox-opacity': disabled ? '0.4' : '1',
    ...(indeterminate ? {
      '--checkbox-indeterminate-bg': variantStyles.backgroundColor,
      '--checkbox-indeterminate-icon': variantStyles.indeterminateImage === 'none'
        ? 'none'
        : `url('${variantStyles.indeterminateImage}')`,
    } : {}),
    ...style
  } as unknown as React.CSSProperties;

  return (
    <label {...labelProps} className={labelClassName} style={labelStyle}>
      <input
        {...props}
        ref={inputRef}
        onClick={indeterminate ? (event) => {
          onClick?.(event);
          // The browser clears it on click, before any render. Put it back so it follows the prop
          // even when the click does not cause one.
          event.currentTarget.indeterminate = true;
        } : onClick}
        type="checkbox"
        className={inputClassName}
        style={inputStyle}
        disabled={disabled}
      />
      {children}
    </label>
  );
};

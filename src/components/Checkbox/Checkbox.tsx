import type React from "react";
import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { checkboxVariants, CheckboxVariant, CheckboxSize } from "./sharedCheckboxStyles";
import { InputHTMLAttributes } from "react";
import { colors } from "../../theme";
import classNames from "classnames";
import "./Checkbox.css";

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  bold?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;

export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, className, style, ...props }: CheckboxProps) => {
  // Get variant styles for CSS variables
  const variantStyles = disabled ? checkboxVariants.disabled : checkboxVariants[variant];

  // Merge labelProps className with our label classes
  const labelClassName = classNames(
    'checkbox-label',
    { 'disabled': disabled },
    labelProps?.className
  );

  // Merge labelProps style with our CSS variables
  const labelStyle = {
    '--checkbox-font-weight': bold ? 700 : 400,
    '--checkbox-color': variantStyles.color,
    '--checkbox-disabled-color': colors.palette.neutralLight,
    ...labelProps?.style
  } as React.CSSProperties;

  // Merge input className
  const inputClassName = classNames(
    'checkbox-input',
    { 'disabled': disabled },
    className
  );

  // Merge input style with our CSS variables
  const inputStyle = {
    '--checkbox-size': `${size}rem`,
    '--checkbox-bg-unchecked': colors.palette.white,
    '--checkbox-bg': variantStyles.backgroundColor,
    '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
    '--checkbox-border-checked': variantStyles.checkedBorder,
    '--checkbox-checkmark': variantStyles.backgroundImage === 'none' ? 'none' : `url('${variantStyles.backgroundImage}')`,
    '--checkbox-opacity': disabled ? '0.4' : '1',
    '--checkbox-disabled-border': `1px solid ${colors.palette.pale}`,
    ...style
  } as React.CSSProperties;

  return (
    <label {...labelProps} className={labelClassName} style={labelStyle}>
      <input
        {...props}
        type="checkbox"
        className={inputClassName}
        style={inputStyle}
        disabled={disabled}
      />
      {children}
    </label>
  );
};

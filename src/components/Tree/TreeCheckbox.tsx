import {
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps
} from "react-aria-components";
import { PropsWithChildren } from "react";
import {
  checkboxVariants,
  CheckboxSize,
  CheckboxVariant
} from "../Checkbox/sharedCheckboxStyles";
import { checkedMixIcon } from "../svgs/checkmarksvgs";
import { colors } from '../../theme';
import classNames from "classnames";
import "../Checkbox/Checkbox.css";

export interface TreeCheckboxProps
  extends PropsWithChildren<Omit<RACCheckboxProps, "children">> {
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  bold?: boolean;
}

export const TreeCheckbox = ({
  size = 1.6,
  variant = "primary",
  bold = false,
  children,
  isDisabled,
  className,
  style,
  ...props
}: TreeCheckboxProps) => {
  // Get variant styles for CSS variables
  const variantStyles = isDisabled ? checkboxVariants.disabled : checkboxVariants[variant];

  // Build className
  const checkboxClassName = classNames(
    'checkbox-label',
    { 'disabled': isDisabled },
    className
  );

  // Build style with CSS variables
  const checkboxStyle = {
    ...style,
    '--checkbox-font-weight': bold ? 700 : 400,
    '--checkbox-color': variantStyles.color,
    '--checkbox-disabled-color': colors.palette.neutralLight,
    '--checkbox-size': `${size}rem`,
    '--checkbox-bg-unchecked': colors.palette.white,
    '--checkbox-bg': variantStyles.backgroundColor,
    '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
    '--checkbox-border-checked': variantStyles.checkedBorder,
    '--checkbox-checkmark': `url('${variantStyles.backgroundImage}')`,
    '--checkbox-opacity': isDisabled ? '0.4' : '1',
    '--checkbox-checked-opacity': isDisabled ? '0' : '1',
    '--checkbox-disabled-border': `1px solid ${colors.palette.pale}`,
    '--checkbox-indeterminate-bg': colors.palette.mediumBlue,
    '--checkbox-indeterminate-icon': `url('${checkedMixIcon}')`,
  } as React.CSSProperties;

  return (
    <RACCheckbox
      {...props}
      className={checkboxClassName}
      style={checkboxStyle}
      isDisabled={isDisabled}
    >
      <div className="checkbox-input" data-slot="selection" />
      {children}
    </RACCheckbox>
  );
};

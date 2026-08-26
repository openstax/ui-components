import {
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  composeRenderProps
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

  // Build className. composeRenderProps normalises the string and render-callback
  // forms of className so a caller-supplied callback is composed rather than dropped.
  const checkboxClassName = composeRenderProps(className, (resolved) => classNames(
    'checkbox-label',
    { 'checkbox-label--disabled': isDisabled },
    resolved
  ));

  // Build style with CSS variables
  const checkboxStyle = {
    '--checkbox-font-weight': bold ? 700 : 400,
    '--checkbox-color': variantStyles.color,
    '--checkbox-disabled-color': colors.palette.neutralLight,
    '--checkbox-size': `${size}rem`,
    '--checkbox-bg-unchecked': colors.palette.white,
    '--checkbox-bg': variantStyles.backgroundColor,
    '--checkbox-border-unchecked': variantStyles.unCheckedBorder,
    '--checkbox-border-checked': variantStyles.checkedBorder,
    '--checkbox-checkmark': variantStyles.backgroundImage === 'none' ? 'none' : `url('${variantStyles.backgroundImage}')`,
    '--checkbox-opacity': isDisabled ? '0.4' : '1',
    '--checkbox-checked-opacity': isDisabled ? '0' : '1',
    '--checkbox-disabled-border': `1px solid ${colors.palette.pale}`,
    '--checkbox-indeterminate-bg': colors.palette.mediumBlue,
    '--checkbox-indeterminate-icon': `url('${checkedMixIcon}')`,
    ...style,
  } as unknown as RACCheckboxProps['style']; // --vars are not in the type

  return (
    <RACCheckbox
      {...props}
      className={checkboxClassName}
      style={checkboxStyle}
      isDisabled={isDisabled}
    >
      <div data-slot="selection" />
      {children}
    </RACCheckbox>
  );
};

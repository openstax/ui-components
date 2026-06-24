import React from 'react';
import { Button, Menu, MenuItem, MenuProps, MenuTrigger, MenuTriggerProps, Popover } from 'react-aria-components';
import { ButtonVariant, getButtonVariantStyles } from '../theme/buttons';
import { palette } from '../theme/palette';
import './DropdownMenu.css';

interface DropdownMenuButtonProps<T> extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  text?: string;
  variant: ButtonVariant;
  width?: string;
  disabled?: boolean;
}

export const DropdownMenu = <T extends object>(
  { text, children, variant, width, disabled, ...props }: DropdownMenuButtonProps<T>
) => {
  const variantStyles = getButtonVariantStyles(variant);
  const buttonStyle = {
    '--button-bg': variantStyles.background,
    '--button-bg-hover': variantStyles.backgroundHover,
    '--button-bg-active': variantStyles.backgroundActive,
    '--button-color': variantStyles.color,
    '--button-outline': variantStyles.outline,
    '--button-shadow': variantStyles.shadow,
    '--button-font-weight': variantStyles.fontWeight ?? 700,
    '--dropdown-caret-color': variant === 'light' ? palette.black : palette.white,
    ...(width ? { width } : {}),
  } as React.CSSProperties;

  return (
    <MenuTrigger {...props}>
      <Button className="dropdown-menu-button" style={buttonStyle} isDisabled={disabled}>{text}</Button>
      <Popover>
        <Menu {...props} className="dropdown-menu">
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};

export { MenuItem as DropdownMenuItem };

import React from 'react';
import classNames from 'classnames';
import { Button, ButtonProps, composeRenderProps, Menu, MenuTrigger, PopoverProps, Key } from 'react-aria-components';
import { colors } from '../../theme';
import { NavBarPopover, NavBarMenuItem } from '../NavBarMenuButtons';
import { CSSPropertiesWithVariables } from '../../types';
import { UserIcon } from './UserIcon';
import './ProfileMenu.css';

export const ProfileMenuButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  ButtonProps
>(({ className, style, ...props }, ref) => {
  // composeRenderProps normalises the object and render-callback forms of style so a
  // caller-supplied callback is merged rather than dropped. The caller still spreads last
  // and can override the CSS variables set here.
  const buttonStyle = composeRenderProps(
    style,
    (resolvedStyle): CSSPropertiesWithVariables => ({
      '--profile-menu-button-color': colors.palette.white,
      '--profile-menu-button-bg': colors.palette.darkTeal,
      ...resolvedStyle
    })
  );

  return (
    <Button
      ref={ref}
      className={classNames('profile-menu-button', className)}
      style={buttonStyle}
      {...props}
    />
  );
});
ProfileMenuButton.displayName = 'ProfileMenuButton';

export const ProfileMenuPopover = React.forwardRef<
  HTMLDivElement,
  PopoverProps
>(({ className, ...props }, ref) => (
  <NavBarPopover
    ref={ref}
    className={classNames('profile-menu-popover', className)}
    {...props}
  />
));
ProfileMenuPopover.displayName = 'ProfileMenuPopover';

export const ProfileMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NavBarMenuItem>
>(({ className, style, ...props }, ref) => {
  // Deliberately a spread rather than composeRenderProps: this wrapper hands style to
  // NavBarMenuItem, which spreads it too, so a composed function would be dropped there
  // along with this variable. Both need composing together once CORE-2710 (#137) is on
  // main; a render-callback style is discarded here until then, as it is on main today.
  const menuItemStyle: CSSPropertiesWithVariables = {
    '--profile-menu-item-color': colors.palette.neutralDarker,
    ...style
  };

  return (
    <NavBarMenuItem
      ref={ref}
      className={classNames('profile-menu-item', className)}
      style={menuItemStyle}
      {...props}
    />
  );
});
ProfileMenuItem.displayName = 'ProfileMenuItem';

function getInitials(
  user?: { firstName?: string; lastName?: string }
): string | null {
  const first = user?.firstName?.charAt(0) || '';
  const last = user?.lastName?.charAt(0) || '';

  if (!first && !last) {
    return null;
  }

  return (first + last).toUpperCase();
}

export interface ProfileMenuProps {
  user?: { firstName?: string; lastName?: string };
  onAction?: (key: Key) => void;
  ariaLabel?: string;
  children: React.ReactNode;
  'data-testid'?: string;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  user,
  onAction,
  ariaLabel = 'Account actions',
  children,
  'data-testid': testId,
}) => {
  const displayInitials = getInitials(user);

  return (
    <MenuTrigger>
      <ProfileMenuButton
        aria-label={ariaLabel}
        data-testid={testId}
      >
        {displayInitials || <UserIcon />}
      </ProfileMenuButton>
      <ProfileMenuPopover placement="bottom end">
        <Menu onAction={onAction}>
          {children}
        </Menu>
      </ProfileMenuPopover>
    </MenuTrigger>
  );
};

export { UserIcon } from './UserIcon';

import React from 'react';
import classNames from 'classnames';
import { Button, ButtonProps, composeRenderProps, Menu, MenuTrigger, PopoverProps, Key } from 'react-aria-components';
import { NavBarPopover, NavBarMenuItem } from '../NavBarMenuButtons';
import { UserIcon } from './UserIcon';
import './ProfileMenu.css';
import '../../theme/theme.css';

export const ProfileMenuButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  ButtonProps
>(({ className, ...props }, ref) => (
  // style is deliberately not destructured: with the theme defaults moved into
  // ProfileMenu.css there is nothing left to merge it with, so it passes straight through
  // in ...props and react-aria handles both the object and render-callback forms.
  <Button
    ref={ref}
    className={composeRenderProps(className, (resolved) => classNames('profile-menu-button', resolved))}
    {...props}
  />
));
ProfileMenuButton.displayName = 'ProfileMenuButton';

export const ProfileMenuPopover = React.forwardRef<
  HTMLDivElement,
  PopoverProps
>(({ className, ...props }, ref) => (
  <NavBarPopover
    ref={ref}
    className={composeRenderProps(className, (resolved) => classNames('profile-menu-popover', resolved))}
    {...props}
  />
));
ProfileMenuPopover.displayName = 'ProfileMenuPopover';

export const ProfileMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof NavBarMenuItem>
>(({ className, ...props }, ref) => (
  // style passes through in ...props — see the note on ProfileMenuButton above.
  <NavBarMenuItem
    ref={ref}
    className={composeRenderProps(className, (resolved) => classNames('profile-menu-item', resolved))}
    {...props}
  />
));
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

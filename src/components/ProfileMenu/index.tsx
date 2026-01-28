import React from 'react';
import { Button, Menu, MenuTrigger, Key } from 'react-aria-components';
import styled from 'styled-components';
import { colors, defaultFocusOutline } from '../../theme';
import { NavBarPopover, NavBarMenuItem } from '../NavBarMenuButtons';
import { UserIcon } from './UserIcon';

export const ProfileMenuButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${colors.palette.white};
  background-color: ${colors.palette.darkTeal};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  }

  &[data-focused],
  &[data-focus-visible] {
    ${defaultFocusOutline}
    outline-offset: 0.2rem;
  }

  svg {
    width: 1.5rem;
  }
`;

export const ProfileMenuPopover = styled(NavBarPopover)`
  min-width: 10rem;
  margin-top: 0.4rem;
`;

export const ProfileMenuItem = styled(NavBarMenuItem)`
  color: ${colors.palette.neutralDarker};
  text-decoration: none;
`;

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

import React from 'react';
import { ButtonProps, PopoverProps, Key } from 'react-aria-components';
import './ProfileMenu.css';
import '../../theme/theme.css';
export declare const ProfileMenuButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ProfileMenuPopover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export declare const ProfileMenuItem: React.ForwardRefExoticComponent<Omit<Omit<import("react-aria-components").MenuItemProps<object> & React.RefAttributes<object>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface ProfileMenuProps {
    user?: {
        firstName?: string;
        lastName?: string;
    };
    onAction?: (key: Key) => void;
    ariaLabel?: string;
    children: React.ReactNode;
    'data-testid'?: string;
}
export declare const ProfileMenu: React.FC<ProfileMenuProps>;
export { UserIcon } from './UserIcon';

import React from 'react';
import { Key } from 'react-aria-components';
export declare const ProfileMenuButton: import("styled-components").StyledComponent<(props: import("react-aria-components").ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null, any, {}, never>;
export declare const ProfileMenuPopover: import("styled-components").StyledComponent<(props: import("react-aria-components").PopoverProps & React.RefAttributes<HTMLElement>) => React.ReactElement | null, any, {}, never>;
export declare const ProfileMenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<T>) => React.ReactElement | null), any, {}, never>;
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

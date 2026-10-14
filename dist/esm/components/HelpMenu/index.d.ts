import React from 'react';
import { NavBarBaseButtonProps } from '../NavBarMenuButtons';
import { ChatConfiguration } from './hooks';
import './HelpMenu.css';
import '../../theme/theme.css';
export declare const HelpMenuButton: ({ className, ...props }: NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const HelpMenuItem: React.ForwardRefExoticComponent<Omit<Omit<import("react-aria-components").MenuItemProps<object> & React.RefAttributes<object>, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SVG icon representing a "new tab" indicator
 * Used to visually indicate when a link or action will open in a new tab/window
 *
 * Dimensions: 12x11 pixels
 * Uses theme color: colors.palette.neutralThin
 */
export declare const NewTabIcon: () => import("react/jsx-runtime").JSX.Element;
export interface HelpMenuProps {
    contactFormParams: {
        key: string;
        value: string;
    }[];
    chatConfig?: Partial<ChatConfiguration>;
    children?: React.ReactNode;
}
export declare const HelpMenu: React.FC<HelpMenuProps>;

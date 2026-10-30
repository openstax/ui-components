import React from 'react';
import { NavBarDisclosureButtonProps, NavBarDisclosureItemProps } from '../NavBarDisclosureButton';
import { ChatConfiguration } from './hooks';
import './HelpMenu.css';
import '../../theme/theme.css';
/**
 * The Help button: a disclosure whose list lines up with the button's end edge, since Help
 * sits at the right of the nav bar.
 */
export declare const HelpMenuButton: ({ className, ...props }: NavBarDisclosureButtonProps) => import("react/jsx-runtime").JSX.Element;
/** A link (with `href`) or an action (with `onAction`) in the Help list. */
export declare const HelpMenuItem: ({ className, ...props }: NavBarDisclosureItemProps) => import("react/jsx-runtime").JSX.Element;
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

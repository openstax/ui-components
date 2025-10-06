import React from 'react';
import { ChatConfiguration } from './hooks';
export declare const HelpMenuButton: import("styled-components").StyledComponent<(props: import("../NavBarMenuButtons").NavBarBaseButtonProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const HelpMenuItem: import("styled-components").StyledComponent<(<T extends object>(props: import("react-aria-components").MenuItemProps<T> & React.RefAttributes<T>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null), any, {}, never>;
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
    chatEmbedParams?: Partial<ChatConfiguration>;
    children?: React.ReactNode;
}
export declare const HelpMenu: React.FC<HelpMenuProps>;

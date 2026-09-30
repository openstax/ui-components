import React from 'react';
import { CSSPropertiesWithVariables } from '../types';
import './NavBar.css';
type Logo = React.HTMLProps<HTMLAnchorElement> & {
    alt?: string;
};
type NavBarProps = React.PropsWithChildren<{
    maxWidth?: number;
    navDesktopHeight?: number;
    navMobileHeight?: number;
    logo?: boolean | Logo;
    justifyContent?: string;
    ariaLabel?: string;
    className?: string;
    style?: CSSPropertiesWithVariables;
    /**
     * Element the bar is rendered as. Defaults to 'nav', which exposes a
     * navigation landmark. Use 'header' or 'div' when the bar holds no
     * navigation links, so it doesn't advertise navigation that isn't there.
     */
    tagName?: 'nav' | 'header' | 'div';
}>;
export declare const NavBar: ({ logo, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, className, style, tagName, ...props }: NavBarProps) => import("react/jsx-runtime").JSX.Element;
export {};

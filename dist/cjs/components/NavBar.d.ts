import React from 'react';
import { CSSPropertiesWithVariables } from '../types';
import './NavBar.css';
import '../theme/theme.css';
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
}>;
export declare const NavBar: ({ logo, maxWidth, navDesktopHeight, navMobileHeight, justifyContent, ariaLabel, className, style, ...props }: NavBarProps) => import("react/jsx-runtime").JSX.Element;
export {};

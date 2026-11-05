import React from "react";
import { CSSPropertiesWithVariables } from "../../types";
import "./SidebarNav.css";
import "../../theme/theme.css";
type FunctionRender = (_: {
    navIsCollapsed: boolean;
    setNavIsCollapsed: (_: boolean) => void;
    isMobile: boolean;
}) => React.ReactNode;
interface SidebarNavSharedProps {
    id?: string;
    navHeader?: React.ReactNode | FunctionRender;
    navFooter?: React.ReactNode | FunctionRender;
    children: React.ReactNode | FunctionRender;
    mobileBreakpoint?: string;
    isMobile?: boolean;
    className?: string;
    navHeaderClassName?: string;
    navBodyClassName?: string;
    navFooterClassName?: string;
    toggleButtonClassName?: string;
    style?: CSSPropertiesWithVariables;
    ariaLabel?: string;
}
export declare const SidebarNavBase: ({ sidebarNavRef, navHeader, navFooter, children, navHeaderClassName, navBodyClassName, navFooterClassName, toggleButtonClassName, navIsCollapsed, setNavIsCollapsed, navAnimation, isMobile, }: SidebarNavSharedProps & {
    sidebarNavRef?: React.MutableRefObject<HTMLElement | null>;
    navIsCollapsed: boolean;
    setNavIsCollapsed: React.Dispatch<boolean>;
    navAnimation?: string;
    isMobile: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarNav: ({ className, style, id, ariaLabel, ...props }: SidebarNavSharedProps) => import("react/jsx-runtime").JSX.Element;
export declare const BodyPortalSidebarNav: ({ className, style, id, ariaLabel, ...props }: SidebarNavSharedProps) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarNavStyles: {
    NavHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    NavBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    NavFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    ToggleButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
    expandedWidth: string;
    collapsedWidth: string;
};
export {};

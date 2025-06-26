import React from "react";
declare type FunctionRender = (_: {
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
    ariaLabel?: string;
}
export declare const SidebarNavBase: ({ sidebarNavRef, navHeader, navFooter, children, navIsCollapsed, setNavIsCollapsed, navAnimation, isMobile, }: SidebarNavSharedProps & {
    sidebarNavRef?: React.MutableRefObject<HTMLElement | null> | undefined;
    navIsCollapsed: boolean;
    setNavIsCollapsed: React.Dispatch<boolean>;
    navAnimation?: string | undefined;
    isMobile: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const SidebarNav: import("styled-components").StyledComponent<({ className, id, ariaLabel, ...props }: SidebarNavSharedProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const BodyPortalSidebarNav: import("styled-components").StyledComponent<({ className, id, ariaLabel, ...props }: SidebarNavSharedProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const SidebarNavStyles: {
    NavHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
    NavBody: import("styled-components").StyledComponent<"div", any, {}, never>;
    NavFooter: import("styled-components").StyledComponent<"footer", any, {}, never>;
    ToggleButton: import("styled-components").StyledComponent<"button", any, {}, never>;
    expandedWidth: string;
    collapsedWidth: string;
};
export {};

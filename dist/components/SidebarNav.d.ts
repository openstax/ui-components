import React from "react";
declare type FunctionRender = (_: {
    navIsCollapsed: boolean;
    setNavIsCollapsed: (_: boolean) => void;
}) => React.ReactNode;
export declare const SidebarNav: import("styled-components").StyledComponent<({ navHeader, navFooter, children, className, mobileBreakpoint, ...props }: React.HTMLAttributes<HTMLElement> & {
    navHeader?: React.ReactNode | FunctionRender;
    navFooter?: React.ReactNode | FunctionRender;
    children: React.ReactNode | FunctionRender;
    isMobile?: boolean | undefined;
    mobileBreakpoint?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const SidebarNavStyles: {
    Nav: import("styled-components").StyledComponent<"nav", any, {}, never>;
    NavHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
    NavBody: import("styled-components").StyledComponent<"div", any, {}, never>;
    NavFooter: import("styled-components").StyledComponent<"footer", any, {}, never>;
    ToggleButton: import("styled-components").StyledComponent<"button", any, {}, never>;
    expandedWidth: string;
    collapsedWidth: string;
};
export {};

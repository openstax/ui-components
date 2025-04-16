import React from "react";
export declare const useSidebarNavProps: ({ mobileBreakpoint, ...props }: {
    isMobile?: boolean | undefined;
    mobileBreakpoint?: string | undefined;
}) => {
    isMobile: boolean;
    navIsCollapsed: boolean;
    setNavIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useNavAnimation: () => {
    navAnimation: "" | "expanding" | "collapsing" | "idle";
    setNavAnimation: React.Dispatch<React.SetStateAction<"" | "expanding" | "collapsing" | "idle">>;
};

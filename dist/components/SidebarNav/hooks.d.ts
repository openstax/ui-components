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
/**
 * Hook that detects clicks outside of a specified element.
 *
 * @param ref - Reference to the element to monitor for outside clicks
 * @param onClickOutside - Callback function to execute when a click outside is detected
 * @param enabled - Whether the hook should be active (default: true)
 */
export declare const useClickOutside: (ref: React.RefObject<HTMLElement | null>, onClickOutside: () => void, enabled: boolean) => void;
/**
 * Hook that detects when the Escape key is pressed.
 *
 * @param onEscape - Callback function to execute when Escape is pressed
 * @param enabled - Whether the hook should be active (default: true)
 */
export declare const useEscapeKey: (onEscape: () => void, enabled: boolean) => void;
/**
 * Hook that preserves scroll position of an element across re-renders.
 *
 * @param ref - Reference to the scrollable element
 * @returns Function to update the scroll position
 */
export declare const useScrollRestoration: (ref: React.RefObject<HTMLDivElement | null>) => React.Dispatch<React.SetStateAction<number>>;
/**
 * Hook that handles navigation collapse/expand with animation support.
 *
 * @param navIsCollapsed - Current collapsed state of navigation
 * @param setNavIsCollapsed - Function to set collapsed state
 * @param setNavAnimation - Function to set animation state
 * @returns Function to handle setting the collapsed state with animation
 */
export declare const useNavCollapseHandler: (navIsCollapsed: boolean, setNavIsCollapsed: React.Dispatch<boolean>, setNavAnimation: React.Dispatch<React.SetStateAction<"expanding" | "collapsing" | "idle" | "">>) => (value: boolean) => void;

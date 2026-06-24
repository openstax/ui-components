import React from "react";
import { useMatchMediaQuery } from "../../hooks";
import { breakpoints } from "../../theme";
export const useSidebarNavProps = ({ mobileBreakpoint = `${breakpoints.mobileNavBreak}em`, ...props }) => {
    var _a;
    const mobileQueryMatches = useMatchMediaQuery(`(max-width: ${mobileBreakpoint})`);
    const isMobile = (_a = props.isMobile) !== null && _a !== void 0 ? _a : mobileQueryMatches;
    const [navIsCollapsed, setNavIsCollapsed] = React.useState(isMobile);
    return { isMobile, navIsCollapsed, setNavIsCollapsed };
};
export const useNavAnimation = () => {
    // Transition CSS rules won't work with the BodyPortal becase the
    // nodes get reinserted, so use a class name for @keyframes instead.
    // There is an awkward empty state here - we need to distinguish
    // "idle after an interaction" vs. the initial page load.
    const [navAnimation, setNavAnimation] = React.useState("");
    React.useEffect(() => {
        if (!navAnimation || navAnimation === "idle") {
            return;
        }
        const idleCallback = setTimeout(() => setNavAnimation("idle"), 300);
        return () => clearTimeout(idleCallback);
    }, [navAnimation, setNavAnimation]);
    return { navAnimation, setNavAnimation };
};
/**
 * Hook that detects clicks outside of a specified element.
 *
 * @param ref - Reference to the element to monitor for outside clicks
 * @param onClickOutside - Callback function to execute when a click outside is detected
 * @param enabled - Whether the hook should be active (default: true)
 */
export const useClickOutside = (ref, onClickOutside, enabled) => {
    React.useEffect(() => {
        if (!enabled) {
            return;
        }
        const handleOutsideEvent = (event) => {
            if ((ref === null || ref === void 0 ? void 0 : ref.current) &&
                !ref.current.contains(event.target) &&
                document.body.contains(event.target)) {
                onClickOutside();
            }
        };
        document.addEventListener("click", handleOutsideEvent);
        document.addEventListener("touchend", handleOutsideEvent);
        return () => {
            document.removeEventListener("click", handleOutsideEvent);
            document.removeEventListener("touchend", handleOutsideEvent);
        };
    }, [ref, onClickOutside, enabled]);
};
/**
 * Hook that detects when the Escape key is pressed.
 *
 * @param onEscape - Callback function to execute when Escape is pressed
 * @param enabled - Whether the hook should be active (default: true)
 */
export const useEscapeKey = (onEscape, enabled) => {
    React.useEffect(() => {
        if (!enabled) {
            return;
        }
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                onEscape();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [onEscape, enabled]);
};
/**
 * Hook that preserves scroll position of an element across re-renders.
 *
 * @param ref - Reference to the scrollable element
 * @returns Function to update the scroll position
 */
export const useScrollRestoration = (ref) => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    // Restore scroll position after render
    requestAnimationFrame(() => {
        if (ref.current) {
            ref.current.scrollTop = scrollPosition;
        }
    });
    return setScrollPosition;
};
/**
 * Hook that handles navigation collapse/expand with animation support.
 *
 * @param navIsCollapsed - Current collapsed state of navigation
 * @param setNavIsCollapsed - Function to set collapsed state
 * @param setNavAnimation - Function to set animation state
 * @returns Function to handle setting the collapsed state with animation
 */
export const useNavCollapseHandler = (navIsCollapsed, setNavIsCollapsed, setNavAnimation) => {
    return React.useCallback((value) => {
        if (value !== navIsCollapsed) {
            setNavAnimation(value ? "collapsing" : "expanding");
        }
        setNavIsCollapsed(value);
    }, [navIsCollapsed, setNavAnimation, setNavIsCollapsed]);
};

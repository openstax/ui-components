"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNavCollapseHandler = exports.useScrollRestoration = exports.useEscapeKey = exports.useClickOutside = exports.useNavAnimation = exports.useSidebarNavProps = void 0;
const react_1 = __importDefault(require("react"));
const hooks_1 = require("../../../src/hooks");
const theme_1 = require("../../../src/theme");
const useSidebarNavProps = ({ mobileBreakpoint = `${theme_1.breakpoints.mobileNavBreak}em`, ...props }) => {
    var _a;
    const mobileQueryMatches = (0, hooks_1.useMatchMediaQuery)(`(max-width: ${mobileBreakpoint})`);
    const isMobile = (_a = props.isMobile) !== null && _a !== void 0 ? _a : mobileQueryMatches;
    const [navIsCollapsed, setNavIsCollapsed] = react_1.default.useState(isMobile);
    return { isMobile, navIsCollapsed, setNavIsCollapsed };
};
exports.useSidebarNavProps = useSidebarNavProps;
const useNavAnimation = () => {
    // Transition CSS rules won't work with the BodyPortal becase the
    // nodes get reinserted, so use a class name for @keyframes instead.
    // There is an awkward empty state here - we need to distinguish
    // "idle after an interaction" vs. the initial page load.
    const [navAnimation, setNavAnimation] = react_1.default.useState("");
    react_1.default.useEffect(() => {
        if (!navAnimation || navAnimation === "idle") {
            return;
        }
        const idleCallback = setTimeout(() => setNavAnimation("idle"), 300);
        return () => clearTimeout(idleCallback);
    }, [navAnimation, setNavAnimation]);
    return { navAnimation, setNavAnimation };
};
exports.useNavAnimation = useNavAnimation;
/**
 * Hook that detects clicks outside of a specified element.
 *
 * @param ref - Reference to the element to monitor for outside clicks
 * @param onClickOutside - Callback function to execute when a click outside is detected
 * @param enabled - Whether the hook should be active (default: true)
 */
const useClickOutside = (ref, onClickOutside, enabled) => {
    react_1.default.useEffect(() => {
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
exports.useClickOutside = useClickOutside;
/**
 * Hook that detects when the Escape key is pressed.
 *
 * @param onEscape - Callback function to execute when Escape is pressed
 * @param enabled - Whether the hook should be active (default: true)
 */
const useEscapeKey = (onEscape, enabled) => {
    react_1.default.useEffect(() => {
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
exports.useEscapeKey = useEscapeKey;
/**
 * Hook that preserves scroll position of an element across re-renders.
 *
 * @param ref - Reference to the scrollable element
 * @returns Function to update the scroll position
 */
const useScrollRestoration = (ref) => {
    const [scrollPosition, setScrollPosition] = react_1.default.useState(0);
    // Restore scroll position after render
    requestAnimationFrame(() => {
        if (ref.current) {
            ref.current.scrollTop = scrollPosition;
        }
    });
    return setScrollPosition;
};
exports.useScrollRestoration = useScrollRestoration;
/**
 * Hook that handles navigation collapse/expand with animation support.
 *
 * @param navIsCollapsed - Current collapsed state of navigation
 * @param setNavIsCollapsed - Function to set collapsed state
 * @param setNavAnimation - Function to set animation state
 * @returns Function to handle setting the collapsed state with animation
 */
const useNavCollapseHandler = (navIsCollapsed, setNavIsCollapsed, setNavAnimation) => {
    return react_1.default.useCallback((value) => {
        if (value !== navIsCollapsed) {
            setNavAnimation(value ? "collapsing" : "expanding");
        }
        setNavIsCollapsed(value);
    }, [navIsCollapsed, setNavAnimation, setNavIsCollapsed]);
};
exports.useNavCollapseHandler = useNavCollapseHandler;

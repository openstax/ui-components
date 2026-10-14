"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarNavStyles = exports.BodyPortalSidebarNav = exports.SidebarNav = exports.SidebarNavBase = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const LeftArrow_1 = require("../svgs/LeftArrow");
const RightArrow_1 = require("../svgs/RightArrow");
const react_aria_1 = require("react-aria");
const BodyPortal_1 = require("../BodyPortal");
const constants_1 = require("./constants");
const hooks_1 = require("./hooks");
require("./SidebarNav.css");
require("../../theme/theme.css");
const NavHeader = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("header", { ref: ref, className: (0, classnames_1.default)("sidebar-nav-header", className), ...props })));
NavHeader.displayName = "NavHeader";
const NavBody = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)("sidebar-nav-body", className), ...props })));
NavBody.displayName = "NavBody";
const NavFooter = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("footer", { ref: ref, className: (0, classnames_1.default)("sidebar-nav-footer", className), ...props })));
NavFooter.displayName = "NavFooter";
const ToggleButton = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("button", { ref: ref, className: (0, classnames_1.default)("sidebar-nav-toggle", className), ...props })));
ToggleButton.displayName = "ToggleButton";
const SidebarNavBase = ({ sidebarNavRef, navHeader, navFooter, children, navIsCollapsed, setNavIsCollapsed, navAnimation, isMobile, }) => {
    const toggleButtonRef = react_1.default.useRef(null);
    react_1.default.useLayoutEffect(() => {
        setNavIsCollapsed(isMobile);
    }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps
    // Close navigation when clicking outside or pressing Escape on mobile
    const handleClose = react_1.default.useCallback(() => {
        setNavIsCollapsed(true);
    }, [setNavIsCollapsed]);
    (0, hooks_1.useClickOutside)(sidebarNavRef, handleClose, isMobile && !navIsCollapsed);
    (0, hooks_1.useEscapeKey)(handleClose, isMobile && !navIsCollapsed);
    const functionRenderArguments = {
        navIsCollapsed,
        setNavIsCollapsed,
        isMobile,
    };
    react_1.default.useEffect(() => {
        if (navAnimation === "idle") {
            toggleButtonRef.current.focus();
        }
    }, [navAnimation]);
    const navBodyRef = react_1.default.useRef(null);
    const setScrollPosition = (0, hooks_1.useScrollRestoration)(navBodyRef);
    return ((0, jsx_runtime_1.jsxs)(react_aria_1.FocusScope, { contain: isMobile && !navIsCollapsed, children: [(0, jsx_runtime_1.jsx)(ToggleButton, { "aria-expanded": !navIsCollapsed, ref: toggleButtonRef, "data-testid": "sidebarnav-toggle", className: (0, classnames_1.default)({ collapsed: navIsCollapsed }), onClick: (e) => {
                    setNavIsCollapsed(!navIsCollapsed);
                    e.stopPropagation();
                }, "aria-label": navIsCollapsed ? "Expand navigation" : "Collapse navigation", children: navIsCollapsed ? (0, jsx_runtime_1.jsx)(RightArrow_1.RightArrow, {}) : (0, jsx_runtime_1.jsx)(LeftArrow_1.LeftArrow, {}) }), navHeader ? ((0, jsx_runtime_1.jsx)(NavHeader, { children: typeof navHeader === "function"
                    ? navHeader(functionRenderArguments)
                    : navHeader })) : null, (0, jsx_runtime_1.jsx)(NavBody, { "data-testid": "nav-body", ref: navBodyRef, onScroll: (e) => setScrollPosition(e.target.scrollTop), children: typeof children === "function"
                    ? children(functionRenderArguments)
                    : children }), navFooter ? ((0, jsx_runtime_1.jsx)(NavFooter, { children: typeof navFooter === "function"
                    ? navFooter(functionRenderArguments)
                    : navFooter })) : null] }));
};
exports.SidebarNavBase = SidebarNavBase;
const SidebarNav = ({ className, style, id, ariaLabel, ...props }) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } = (0, hooks_1.useSidebarNavProps)(props);
    const sidebarNavRef = react_1.default.useRef(null);
    const { navAnimation, setNavAnimation } = (0, hooks_1.useNavAnimation)();
    const handleSetNavIsCollapsed = (0, hooks_1.useNavCollapseHandler)(navIsCollapsed, setNavIsCollapsed, setNavAnimation);
    return ((0, jsx_runtime_1.jsx)("nav", { id: id, ref: sidebarNavRef, "data-testid": "sidebarnav", "aria-label": ariaLabel, style: style, className: (0, classnames_1.default)("sidebar-nav", className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
            collapsing: navAnimation === "collapsing",
            expanding: navAnimation === "expanding",
        }), children: (0, jsx_runtime_1.jsx)(exports.SidebarNavBase, { ...props, sidebarNavRef: sidebarNavRef, navIsCollapsed: navIsCollapsed, setNavIsCollapsed: handleSetNavIsCollapsed, isMobile: isMobile, children: props.children }) }));
};
exports.SidebarNav = SidebarNav;
const BodyPortalSidebarNav = ({ className, style, id, ariaLabel, ...props }) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } = (0, hooks_1.useSidebarNavProps)(props);
    const ref = react_1.default.useRef(typeof document !== "undefined" ? document.createElement("NAV") : null);
    const { navAnimation, setNavAnimation } = (0, hooks_1.useNavAnimation)();
    const handleSetNavIsCollapsed = (0, hooks_1.useNavCollapseHandler)(navIsCollapsed, setNavIsCollapsed, setNavAnimation);
    return ((0, jsx_runtime_1.jsx)(BodyPortal_1.BodyPortal, { ref: ref, id: id, tagName: "nav", slot: "sidebar", "data-testid": "sidebarnav", ariaLabel: ariaLabel, style: style, className: (0, classnames_1.default)("sidebar-nav", className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
            collapsing: navAnimation === "collapsing",
            expanding: navAnimation === "expanding",
        }), children: (0, jsx_runtime_1.jsx)(exports.SidebarNavBase, { ...props, navIsCollapsed: navIsCollapsed, setNavIsCollapsed: handleSetNavIsCollapsed, sidebarNavRef: ref, navAnimation: navAnimation, isMobile: isMobile }) }));
};
exports.BodyPortalSidebarNav = BodyPortalSidebarNav;
exports.SidebarNavStyles = {
    NavHeader,
    NavBody,
    NavFooter,
    ToggleButton,
    expandedWidth: constants_1.expandedWidth,
    collapsedWidth: constants_1.collapsedWidth,
};

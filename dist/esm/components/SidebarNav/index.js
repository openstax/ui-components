import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
import { FocusScope } from "react-aria";
import { BodyPortal } from "../BodyPortal";
import { collapsedWidth, expandedWidth } from "./constants";
import { useNavAnimation, useSidebarNavProps, useClickOutside, useEscapeKey, useScrollRestoration, useNavCollapseHandler, } from "./hooks";
import "./SidebarNav.css";
import "../../theme/theme.css";
const NavHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("header", { ref: ref, className: classNames("sidebar-nav-header", className), ...props })));
NavHeader.displayName = "NavHeader";
const NavBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames("sidebar-nav-body", className), ...props })));
NavBody.displayName = "NavBody";
const NavFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("footer", { ref: ref, className: classNames("sidebar-nav-footer", className), ...props })));
NavFooter.displayName = "NavFooter";
const ToggleButton = React.forwardRef(({ className, ...props }, ref) => (_jsx("button", { ref: ref, className: classNames("sidebar-nav-toggle", className), ...props })));
ToggleButton.displayName = "ToggleButton";
export const SidebarNavBase = ({ sidebarNavRef, navHeader, navFooter, children, navIsCollapsed, setNavIsCollapsed, navAnimation, isMobile, }) => {
    const toggleButtonRef = React.useRef(null);
    React.useLayoutEffect(() => {
        setNavIsCollapsed(isMobile);
    }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps
    // Close navigation when clicking outside or pressing Escape on mobile
    const handleClose = React.useCallback(() => {
        setNavIsCollapsed(true);
    }, [setNavIsCollapsed]);
    useClickOutside(sidebarNavRef, handleClose, isMobile && !navIsCollapsed);
    useEscapeKey(handleClose, isMobile && !navIsCollapsed);
    const functionRenderArguments = {
        navIsCollapsed,
        setNavIsCollapsed,
        isMobile,
    };
    React.useEffect(() => {
        if (navAnimation === "idle") {
            toggleButtonRef.current.focus();
        }
    }, [navAnimation]);
    const navBodyRef = React.useRef(null);
    const setScrollPosition = useScrollRestoration(navBodyRef);
    return (_jsxs(FocusScope, { contain: isMobile && !navIsCollapsed, children: [_jsx(ToggleButton, { "aria-expanded": !navIsCollapsed, ref: toggleButtonRef, "data-testid": "sidebarnav-toggle", className: classNames({ collapsed: navIsCollapsed }), onClick: (e) => {
                    setNavIsCollapsed(!navIsCollapsed);
                    e.stopPropagation();
                }, "aria-label": navIsCollapsed ? "Expand navigation" : "Collapse navigation", children: navIsCollapsed ? _jsx(RightArrow, {}) : _jsx(LeftArrow, {}) }), navHeader ? (_jsx(NavHeader, { children: typeof navHeader === "function"
                    ? navHeader(functionRenderArguments)
                    : navHeader })) : null, _jsx(NavBody, { "data-testid": "nav-body", ref: navBodyRef, onScroll: (e) => setScrollPosition(e.target.scrollTop), children: typeof children === "function"
                    ? children(functionRenderArguments)
                    : children }), navFooter ? (_jsx(NavFooter, { children: typeof navFooter === "function"
                    ? navFooter(functionRenderArguments)
                    : navFooter })) : null] }));
};
export const SidebarNav = ({ className, style, id, ariaLabel, ...props }) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } = useSidebarNavProps(props);
    const sidebarNavRef = React.useRef(null);
    const { navAnimation, setNavAnimation } = useNavAnimation();
    const handleSetNavIsCollapsed = useNavCollapseHandler(navIsCollapsed, setNavIsCollapsed, setNavAnimation);
    return (_jsx("nav", { id: id, ref: sidebarNavRef, "data-testid": "sidebarnav", "aria-label": ariaLabel, style: style, className: classNames("sidebar-nav", className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
            collapsing: navAnimation === "collapsing",
            expanding: navAnimation === "expanding",
        }), children: _jsx(SidebarNavBase, { ...props, sidebarNavRef: sidebarNavRef, navIsCollapsed: navIsCollapsed, setNavIsCollapsed: handleSetNavIsCollapsed, isMobile: isMobile, children: props.children }) }));
};
export const BodyPortalSidebarNav = ({ className, style, id, ariaLabel, ...props }) => {
    const { isMobile, navIsCollapsed, setNavIsCollapsed } = useSidebarNavProps(props);
    const ref = React.useRef(typeof document !== "undefined" ? document.createElement("NAV") : null);
    const { navAnimation, setNavAnimation } = useNavAnimation();
    const handleSetNavIsCollapsed = useNavCollapseHandler(navIsCollapsed, setNavIsCollapsed, setNavAnimation);
    return (_jsx(BodyPortal, { ref: ref, id: id, tagName: "nav", slot: "sidebar", "data-testid": "sidebarnav", ariaLabel: ariaLabel, style: style, className: classNames("sidebar-nav", className, {
            collapsed: navIsCollapsed,
            mobile: isMobile,
            collapsing: navAnimation === "collapsing",
            expanding: navAnimation === "expanding",
        }), children: _jsx(SidebarNavBase, { ...props, navIsCollapsed: navIsCollapsed, setNavIsCollapsed: handleSetNavIsCollapsed, sidebarNavRef: ref, navAnimation: navAnimation, isMobile: isMobile }) }));
};
export const SidebarNavStyles = {
    NavHeader,
    NavBody,
    NavFooter,
    ToggleButton,
    expandedWidth,
    collapsedWidth,
};

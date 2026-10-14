import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { useId, useInteractOutside } from "react-aria";
import { NavBarButton } from "./NavBarButton";
import "./NavBarDisclosure.css";
import "../theme/theme.css";
const DisclosureContext = React.createContext({ close: () => undefined });
/**
 * A button that shows or hides a list of links and actions, following the disclosure
 * pattern. Use it instead of `NavBarMenuButton` for navigation: `role="menu"` is for
 * command menus and misdescribes a list of links.
 *
 * The list is plain content next to the button, so Tab moves through the items. Escape,
 * a press outside, or focus leaving closes it, and Escape returns focus to the button.
 */
export const NavBarDisclosureButton = ({ children, align = "start", defaultOpen = false, onOpenChange, panelClassName, onPress, ...buttonProps }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    const openRef = React.useRef(isOpen);
    const wrapperRef = React.useRef(null);
    const triggerRef = React.useRef(null);
    const panelId = useId();
    const setOpen = React.useCallback((next) => {
        if (next === openRef.current)
            return;
        openRef.current = next;
        setIsOpen(next);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(next);
    }, [onOpenChange]);
    const close = React.useCallback((restoreFocus = false) => {
        var _a;
        setOpen(false);
        if (restoreFocus)
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [setOpen]);
    const context = React.useMemo(() => ({ close: () => close(true) }), [close]);
    useInteractOutside({ ref: wrapperRef, isDisabled: !isOpen, onInteractOutside: () => close() });
    return (_jsx(DisclosureContext.Provider, { value: context, children: _jsxs("div", { ref: wrapperRef, className: classNames("navbar-disclosure", `navbar-disclosure-${align}`), onKeyDown: (event) => {
                if (event.key === "Escape" && openRef.current) {
                    event.stopPropagation();
                    close(true);
                }
            }, onBlur: (event) => {
                var _a;
                const next = event.relatedTarget;
                if (next && !((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(next)))
                    close();
            }, children: [_jsx(NavBarButton, { ...buttonProps, ref: triggerRef, "aria-expanded": isOpen, "aria-controls": isOpen ? panelId : undefined, onPress: (event) => {
                        onPress === null || onPress === void 0 ? void 0 : onPress(event);
                        setOpen(!openRef.current);
                    } }), isOpen
                    // list-style: none drops list semantics in Safari, so the role is stated.
                    ? _jsx("ul", { id: panelId, role: "list", className: classNames("navbar-disclosure-panel", panelClassName), children: children })
                    : null] }) }));
};
export const NavBarDisclosureItem = ({ className, href, target, rel, onAction, children }) => {
    const { close } = React.useContext(DisclosureContext);
    const itemClassName = classNames("navbar-disclosure-item", className);
    const onClick = () => {
        onAction === null || onAction === void 0 ? void 0 : onAction();
        close();
    };
    return (_jsx("li", { children: href !== undefined
            ? _jsx("a", { className: itemClassName, href: href, target: target, rel: rel !== null && rel !== void 0 ? rel : (target === "_blank" ? "noreferrer" : undefined), onClick: onClick, children: children })
            : _jsx("button", { type: "button", className: itemClassName, onClick: onClick, children: children }) }));
};

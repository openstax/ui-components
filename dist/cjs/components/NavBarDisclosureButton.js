"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarDisclosureItem = exports.NavBarDisclosureButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_aria_1 = require("react-aria");
const NavBarButton_1 = require("./NavBarButton");
const hooks_1 = require("../hooks");
require("./NavBarDisclosure.css");
require("../theme/theme.css");
const DisclosureContext = react_1.default.createContext({ close: () => undefined });
/**
 * A button that shows or hides a list of links and actions, following the disclosure
 * pattern. Use it instead of `NavBarMenuButton` for navigation: `role="menu"` is for
 * command menus and misdescribes a list of links.
 *
 * The list is plain content next to the button, so Tab moves through the items. Escape,
 * a press outside (including inside an iframe), or focus leaving closes it, and Escape
 * returns focus to the button.
 */
const NavBarDisclosureButton = ({ children, align = "start", defaultOpen = false, onOpenChange, panelClassName, onPress, ...buttonProps }) => {
    const [isOpen, setIsOpen] = react_1.default.useState(defaultOpen);
    const openRef = react_1.default.useRef(isOpen);
    const wrapperRef = react_1.default.useRef(null);
    const triggerRef = react_1.default.useRef(null);
    const panelId = (0, react_aria_1.useId)();
    const setOpen = react_1.default.useCallback((next) => {
        if (next === openRef.current)
            return;
        openRef.current = next;
        setIsOpen(next);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(next);
    }, [onOpenChange]);
    const close = react_1.default.useCallback((restoreFocus = false) => {
        var _a;
        setOpen(false);
        if (restoreFocus)
            (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [setOpen]);
    const context = react_1.default.useMemo(() => ({ close: () => close(true) }), [close]);
    (0, react_aria_1.useInteractOutside)({ ref: wrapperRef, isDisabled: !isOpen, onInteractOutside: () => close() });
    (0, hooks_1.useFocusIframe)(() => close(), !isOpen);
    return ((0, jsx_runtime_1.jsx)(DisclosureContext.Provider, { value: context, children: (0, jsx_runtime_1.jsxs)("div", { ref: wrapperRef, className: (0, classnames_1.default)("navbar-disclosure", `navbar-disclosure-${align}`), onKeyDown: (event) => {
                if (event.key === "Escape" && openRef.current) {
                    event.stopPropagation();
                    close(true);
                }
            }, onBlur: (event) => {
                var _a;
                const next = event.relatedTarget;
                if (next && !((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(next)))
                    close();
            }, children: [(0, jsx_runtime_1.jsx)(NavBarButton_1.NavBarButton, { ...buttonProps, ref: triggerRef, "aria-expanded": isOpen, "aria-controls": isOpen ? panelId : undefined, onPress: (event) => {
                        onPress === null || onPress === void 0 ? void 0 : onPress(event);
                        setOpen(!openRef.current);
                    } }), isOpen
                    // list-style: none drops list semantics in Safari, so the role is stated.
                    ? (0, jsx_runtime_1.jsx)("ul", { id: panelId, role: "list", className: (0, classnames_1.default)("navbar-disclosure-panel", panelClassName), children: children })
                    : null] }) }));
};
exports.NavBarDisclosureButton = NavBarDisclosureButton;
const NavBarDisclosureItem = ({ className, href, target, rel, onAction, children }) => {
    const { close } = react_1.default.useContext(DisclosureContext);
    const itemClassName = (0, classnames_1.default)("navbar-disclosure-item", className);
    const onClick = () => {
        onAction === null || onAction === void 0 ? void 0 : onAction();
        close();
    };
    return ((0, jsx_runtime_1.jsx)("li", { children: href !== undefined
            ? (0, jsx_runtime_1.jsx)("a", { className: itemClassName, href: href, target: target, rel: rel !== null && rel !== void 0 ? rel : (target === "_blank" ? "noreferrer" : undefined), onClick: onClick, children: children })
            : (0, jsx_runtime_1.jsx)("button", { type: "button", className: itemClassName, onClick: onClick, children: children }) }));
};
exports.NavBarDisclosureItem = NavBarDisclosureItem;

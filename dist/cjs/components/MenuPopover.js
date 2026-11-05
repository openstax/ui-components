"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuPopover = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_aria_1 = require("react-aria");
const react_aria_components_1 = require("react-aria-components");
const hooks_1 = require("../hooks");
/**
 * Closes the menu on a press outside `popoverRef`. It is mounted only while the menu is open,
 * so the hook's record of an in-progress press starts clean each time. Kept across closes, a
 * press that closed the menu by moving focus (before its click) would leave that record set,
 * and the next press on the trigger would close the menu again as soon as it opened.
 */
const CloseOnOutsidePress = ({ popoverRef }) => {
    const state = react_1.default.useContext(react_aria_components_1.OverlayTriggerStateContext);
    // A mouse press on the trigger only opens the menu, so a second press closes it here.
    (0, react_aria_1.useInteractOutside)({
        ref: popoverRef,
        onInteractOutside: () => state === null || state === void 0 ? void 0 : state.close(),
    });
    // A press inside an iframe never reaches this document, so watch for focus moving into one.
    (0, hooks_1.useFocusIframe)(() => state === null || state === void 0 ? void 0 : state.close());
    return null;
};
/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
exports.MenuPopover = react_1.default.forwardRef((props, forwardedRef) => {
    const ref = (0, react_aria_1.useObjectRef)(forwardedRef);
    const state = react_1.default.useContext(react_aria_components_1.OverlayTriggerStateContext);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(state === null || state === void 0 ? void 0 : state.isOpen) && (0, jsx_runtime_1.jsx)(CloseOnOutsidePress, { popoverRef: ref }), (0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { isNonModal: true, ...props, ref: ref })] }));
});
exports.MenuPopover.displayName = "MenuPopover";

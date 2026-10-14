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
/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
exports.MenuPopover = react_1.default.forwardRef((props, forwardedRef) => {
    const ref = (0, react_aria_1.useObjectRef)(forwardedRef);
    const state = react_1.default.useContext(react_aria_components_1.OverlayTriggerStateContext);
    // A mouse press on the trigger only opens the menu, so a second press closes it here.
    (0, react_aria_1.useInteractOutside)({
        ref,
        isDisabled: !(state === null || state === void 0 ? void 0 : state.isOpen),
        onInteractOutside: () => state === null || state === void 0 ? void 0 : state.close(),
    });
    return (0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { isNonModal: true, ...props, ref: ref });
});
exports.MenuPopover.displayName = "MenuPopover";

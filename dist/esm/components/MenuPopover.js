import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useInteractOutside, useObjectRef } from "react-aria";
import { OverlayTriggerStateContext, Popover } from "react-aria-components";
/**
 * Closes the menu on a press outside `popoverRef`. It is mounted only while the menu is open,
 * so the hook's record of an in-progress press starts clean each time. Kept across closes, a
 * press that closed the menu by moving focus (before its click) would leave that record set,
 * and the next press on the trigger would close the menu again as soon as it opened.
 */
const CloseOnOutsidePress = ({ popoverRef }) => {
    const state = React.useContext(OverlayTriggerStateContext);
    // A mouse press on the trigger only opens the menu, so a second press closes it here.
    useInteractOutside({
        ref: popoverRef,
        onInteractOutside: () => state === null || state === void 0 ? void 0 : state.close(),
    });
    return null;
};
/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
export const MenuPopover = React.forwardRef((props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const state = React.useContext(OverlayTriggerStateContext);
    return (_jsxs(_Fragment, { children: [(state === null || state === void 0 ? void 0 : state.isOpen) && _jsx(CloseOnOutsidePress, { popoverRef: ref }), _jsx(Popover, { isNonModal: true, ...props, ref: ref })] }));
});
MenuPopover.displayName = "MenuPopover";

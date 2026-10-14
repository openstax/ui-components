import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useInteractOutside, useObjectRef } from "react-aria";
import { OverlayTriggerStateContext, Popover } from "react-aria-components";
/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
export const MenuPopover = React.forwardRef((props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const state = React.useContext(OverlayTriggerStateContext);
    // A mouse press on the trigger only opens the menu, so a second press closes it here.
    useInteractOutside({
        ref,
        isDisabled: !(state === null || state === void 0 ? void 0 : state.isOpen),
        onInteractOutside: () => state === null || state === void 0 ? void 0 : state.close(),
    });
    return _jsx(Popover, { isNonModal: true, ...props, ref: ref });
});
MenuPopover.displayName = "MenuPopover";

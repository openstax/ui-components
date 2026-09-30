import React from "react";
import { useInteractOutside, useObjectRef } from "react-aria";
import { OverlayTriggerStateContext, Popover, PopoverProps } from "react-aria-components";

/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
export const MenuPopover = React.forwardRef<HTMLElement, PopoverProps>(
  (props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const state = React.useContext(OverlayTriggerStateContext);

    // A mouse press on the trigger only opens the menu, so a second press closes it here.
    useInteractOutside({
      ref,
      isDisabled: !state?.isOpen,
      onInteractOutside: () => state?.close(),
    });

    return <Popover isNonModal {...props} ref={ref} />;
  },
);
MenuPopover.displayName = "MenuPopover";

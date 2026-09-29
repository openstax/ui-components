import React from "react";
import { useInteractOutside, useObjectRef } from "react-aria";
import { OverlayTriggerStateContext, Popover, PopoverProps } from "react-aria-components";

/**
 * A non-modal Popover for menus. RAC's Popover renders as a dialog (role="dialog", a
 * full-screen underlay, a focus trap, body scroll-lock and aria-hidden on the rest of the
 * page) unless isNonModal is set, which is wrong for a menu. But isNonModal also turns
 * off outside-press dismissal, and the blur fallback ignores focus moving to the body, so
 * clicking an empty part of the page would leave the menu open. This puts it back.
 */
export const MenuPopover = React.forwardRef<HTMLElement, PopoverProps>(
  (props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);
    const state = React.useContext(OverlayTriggerStateContext);

    // This also covers a second press on the trigger, which for a mouse only ever calls
    // open() on the menu and relied on the underlay to close it. A touch trigger toggles
    // on pointerup, before this fires on click, so close() is then a no-op.
    useInteractOutside({
      ref,
      isDisabled: !state?.isOpen,
      onInteractOutside: () => state?.close(),
    });

    return <Popover isNonModal {...props} ref={ref} />;
  },
);
MenuPopover.displayName = "MenuPopover";

import React from "react";
import { PopoverProps } from "react-aria-components";
/**
 * A non-modal Popover for menus, so it is not rendered as a dialog. Non-modal popovers do
 * not close on an outside press by default; this adds that back.
 */
export declare const MenuPopover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLElement>>;

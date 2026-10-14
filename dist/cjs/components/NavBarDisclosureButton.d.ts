import React from "react";
import { NavBarButtonProps } from "./NavBarButton";
import "./NavBarDisclosure.css";
import "../theme/theme.css";
export type NavBarDisclosureButtonProps = NavBarButtonProps & React.PropsWithChildren<{
    /** Which edge of the button the panel lines up with. */
    align?: "start" | "end";
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    /** Class for the list that holds the items. `className` goes to the button. */
    panelClassName?: string;
}>;
/**
 * A button that shows or hides a list of links and actions, following the disclosure
 * pattern. Use it instead of `NavBarMenuButton` for navigation: `role="menu"` is for
 * command menus and misdescribes a list of links.
 *
 * The list is plain content next to the button, so Tab moves through the items. Escape,
 * a press outside, or focus leaving closes it, and Escape returns focus to the button.
 */
export declare const NavBarDisclosureButton: ({ children, align, defaultOpen, onOpenChange, panelClassName, onPress, ...buttonProps }: NavBarDisclosureButtonProps) => import("react/jsx-runtime").JSX.Element;
export type NavBarDisclosureItemProps = React.PropsWithChildren<{
    className?: string;
    /** Renders a link. `rel` defaults to "noreferrer" when `target` is "_blank". */
    href?: string;
    target?: string;
    rel?: string;
    /** Called when the item is activated. Without an `href`, the item is a button. */
    onAction?: () => void;
}>;
export declare const NavBarDisclosureItem: ({ className, href, target, rel, onAction, children }: NavBarDisclosureItemProps) => import("react/jsx-runtime").JSX.Element;

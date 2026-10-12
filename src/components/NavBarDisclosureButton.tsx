import React from "react";
import classNames from "classnames";
import { useId, useInteractOutside } from "react-aria";
import { NavBarButton, NavBarButtonProps } from "./NavBarButton";
import "./NavBarDisclosure.css";
import "../theme/theme.css";

const DisclosureContext = React.createContext<{ close: () => void }>({ close: () => undefined });

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
export const NavBarDisclosureButton = ({
  children,
  align = "start",
  defaultOpen = false,
  onOpenChange,
  panelClassName,
  onPress,
  ...buttonProps
}: NavBarDisclosureButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const openRef = React.useRef(isOpen);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const setOpen = React.useCallback((next: boolean) => {
    if (next === openRef.current) return;
    openRef.current = next;
    setIsOpen(next);
    onOpenChange?.(next);
  }, [onOpenChange]);

  const close = React.useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }, [setOpen]);

  const context = React.useMemo(() => ({ close: () => close(true) }), [close]);

  useInteractOutside({ ref: wrapperRef, isDisabled: !isOpen, onInteractOutside: () => close() });

  return (
    <DisclosureContext.Provider value={context}>
      <div
        ref={wrapperRef}
        className={classNames("navbar-disclosure", `navbar-disclosure-${align}`)}
        onKeyDown={(event) => {
          if (event.key === "Escape" && openRef.current) {
            event.stopPropagation();
            close(true);
          }
        }}
        onBlur={(event) => {
          const next = event.relatedTarget as Node | null;
          if (next && !wrapperRef.current?.contains(next)) close();
        }}
      >
        <NavBarButton
          {...buttonProps}
          ref={triggerRef}
          aria-expanded={isOpen}
          aria-controls={isOpen ? panelId : undefined}
          onPress={(event) => {
            onPress?.(event);
            setOpen(!openRef.current);
          }}
        />
        {isOpen
          // list-style: none drops list semantics in Safari, so the role is stated.
          ? <ul id={panelId} role="list" className={classNames("navbar-disclosure-panel", panelClassName)}>
            {children}
          </ul>
          : null}
      </div>
    </DisclosureContext.Provider>
  );
};

export type NavBarDisclosureItemProps = React.PropsWithChildren<{
  className?: string;
  /** Renders a link. `rel` defaults to "noreferrer" when `target` is "_blank". */
  href?: string;
  target?: string;
  rel?: string;
  /** Called when the item is activated. Without an `href`, the item is a button. */
  onAction?: () => void;
}>;

export const NavBarDisclosureItem = ({
  className, href, target, rel, onAction, children
}: NavBarDisclosureItemProps) => {
  const { close } = React.useContext(DisclosureContext);
  const itemClassName = classNames("navbar-disclosure-item", className);
  const onClick = () => {
    onAction?.();
    close();
  };

  return (
    <li>
      {href !== undefined
        ? <a
          className={itemClassName}
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
          onClick={onClick}
        >{children}</a>
        : <button type="button" className={itemClassName} onClick={onClick}>{children}</button>}
    </li>
  );
};

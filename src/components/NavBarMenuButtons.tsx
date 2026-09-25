import React from "react";
import classNames from "classnames";
import {
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverProps,
} from "react-aria-components";
import { NavBarButton, NavBarButtonProps } from "./NavBarButton";
import "./NavBarMenuButtons.css";
import "../theme/theme.css";

export const NavBarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MenuItem>
>(({ className, ...props }, ref) => (
  // style is deliberately not destructured: with the theme defaults moved into
  // NavBarMenuButtons.css there is nothing left to merge it with, so it passes straight
  // through in ...props and react-aria handles both the object and render-callback forms.
  // That is why this needs no composeRenderProps for style (cf. CORE-2710) — the bug that
  // one guards against was us overwriting the caller's style, which we no longer do.
  <MenuItem
    ref={ref}
    className={composeRenderProps(className, (resolved) => classNames("navbar-menu-item", resolved))}
    {...props}
  />
));
NavBarMenuItem.displayName = "NavBarMenuItem";

export const PopoverContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={classNames("navbar-popover-container", className)} {...props} />
));
PopoverContainer.displayName = "PopoverContainer";

export const NavBarPopover = React.forwardRef<
  HTMLDivElement,
  PopoverProps
>(({ className, ...props }, ref) => (
  // style passes through in ...props — see the note on NavBarMenuItem above.
  <Popover
    ref={ref}
    className={composeRenderProps(className, (resolved) => classNames("navbar-popover", resolved))}
    {...props}
  />
));
NavBarPopover.displayName = "NavBarPopover";

export type NavBarBaseButtonProps = React.PropsWithChildren<{
  popoverProps?: PopoverProps;
}> & NavBarButtonProps;

const NavBarBaseButton = ({
  isMenu,
  children,
  popoverProps,
  ...props
}: NavBarBaseButtonProps & {
  isMenu: boolean;
}) => {
  const Trigger = isMenu ? MenuTrigger : DialogTrigger;
  const Content = isMenu ? Menu : Dialog;

  return (
    <Trigger>
      <NavBarButton {...props} />
      <NavBarPopover {...popoverProps}>
        <Content>{children}</Content>
      </NavBarPopover>
    </Trigger>
  );
};

export const NavBarPopoverButton = (props: NavBarBaseButtonProps) => (
  <NavBarBaseButton {...props} isMenu={false} />
);

export const NavBarMenuButton = (props: NavBarBaseButtonProps) => (
  <NavBarBaseButton {...props} isMenu={true} />
);

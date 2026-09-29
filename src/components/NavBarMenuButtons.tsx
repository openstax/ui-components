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
import { colors } from "../theme";
import { NavBarButton, NavBarButtonProps } from "./NavBarButton";
import { CSSPropertiesWithVariables } from "../types";
import { MenuPopover } from "./MenuPopover";
import "./NavBarMenuButtons.css";

export const NavBarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MenuItem>
>(({ className, style, ...props }, ref) => {
  // composeRenderProps normalises the object and render-callback forms of style so a
  // caller-supplied callback is merged rather than dropped. The caller still spreads last
  // and can override the CSS variables set here.
  const menuItemStyle = composeRenderProps(
    style,
    (resolvedStyle): CSSPropertiesWithVariables => ({
      '--navbar-menu-item-hover-bg': colors.palette.neutralLighter,
      '--navbar-menu-item-border-color': colors.palette.neutralBright,
      ...resolvedStyle
    })
  );

  return (
    <MenuItem
      ref={ref}
      className={composeRenderProps(className, (resolved) => classNames("navbar-menu-item", resolved))}
      style={menuItemStyle}
      {...props}
    />
  );
});
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
>(({ className, style, ...props }, ref) => {
  const popoverStyle = composeRenderProps(
    style,
    (resolvedStyle): CSSPropertiesWithVariables => ({
      '--navbar-popover-border-color': colors.palette.darkGreen,
      ...resolvedStyle
    })
  );

  // A non-modal popover needs MenuPopover's outside-press handling to close on a click
  // elsewhere on the page.
  const PopoverComponent = props.isNonModal ? MenuPopover : Popover;

  return (
    <PopoverComponent
      ref={ref}
      className={composeRenderProps(className, (resolved) => classNames("navbar-popover", resolved))}
      style={popoverStyle}
      {...props}
    />
  );
});
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
      {/* A menu popover is not a dialog. RAC's Popover adds role="dialog" (plus a
          full-screen underlay, a focus trap, body scroll-lock and aria-hidden on the
          rest of the page) unless isNonModal is set. The trigger already exposes
          aria-haspopup/aria-expanded and the Menu carries the accessible name, so the
          extra dialog layer is announced twice and implies modality that does not hold.
          isNonModal is set before the spread so callers can still override it. */}
      <NavBarPopover isNonModal={isMenu} {...popoverProps}>
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

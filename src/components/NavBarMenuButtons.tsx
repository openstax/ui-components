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
import "./NavBarMenuButtons.css";

export const NavBarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof MenuItem>
>(({ className, style, ...props }, ref) => {
  const menuItemStyle: CSSPropertiesWithVariables = {
    '--navbar-menu-item-hover-bg': colors.palette.neutralLighter,
    '--navbar-menu-item-border-color': colors.palette.neutralBright,
    ...style
  };

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
  const popoverStyle: CSSPropertiesWithVariables = {
    '--navbar-popover-border-color': colors.palette.darkGreen,
    ...style
  };

  return (
    <Popover
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

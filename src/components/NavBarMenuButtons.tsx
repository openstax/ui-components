import React from "react";
import classNames from "classnames";
import {
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
import "./NavBarMenuButtons.css";

export const NavBarMenuItem = ({ className, style, ...props }: React.ComponentProps<typeof MenuItem>) => {
  const menuItemStyle = {
    '--navbar-menu-item-hover-bg': colors.palette.neutralLighter,
    '--navbar-menu-item-border-color': colors.palette.neutralBright,
    ...style
  } as unknown as React.CSSProperties;

  return (
    <MenuItem
      className={classNames("navbar-menu-item", className)}
      style={menuItemStyle}
      {...props}
    />
  );
};

export const PopoverContainer = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={classNames("navbar-popover-container", className)} {...props} />
);

export const NavBarPopover = ({ className, style, ...props }: PopoverProps) => {
  const popoverStyle = {
    '--navbar-popover-border-color': colors.palette.darkGreen,
    ...style
  } as unknown as React.CSSProperties;

  return (
    <Popover
      className={classNames("navbar-popover", className)}
      style={popoverStyle}
      {...props}
    />
  );
};

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

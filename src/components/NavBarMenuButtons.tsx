import React from "react";
import {
  Dialog,
  DialogTrigger,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  PopoverProps,
} from "react-aria-components";
import styled from "styled-components";
import { colors } from "../../src/theme";
import { NavBarButton, NavBarButtonProps } from "./NavBarButton";

export const NavBarMenuItem = styled(MenuItem)``;

export const PopoverContainer = styled.div`
  padding: 1.6rem;
`;

const NavBarPopover = styled(Popover)`
  margin-top: -1rem;
  border-top: 0.4rem solid ${colors.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${NavBarMenuItem} {
    font-size: 1.4rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      background: ${colors.palette.neutralLighter};
    }

    &:active {
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${colors.palette.neutralBright};
    }
  }
`;

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

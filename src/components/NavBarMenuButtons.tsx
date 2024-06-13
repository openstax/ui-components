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
  }
`;

export type NavBarItemProps = React.PropsWithChildren<{
  label?: string;
  icon?: string | React.ReactNode;
  buttonProps?: NavBarButtonProps;
  popoverProps?: PopoverProps;
  className?: string;
}> & (
  | { label: string; icon?: React.ReactNode; "aria-label"?: string }
  | { label?: never; icon: React.ReactNode; "aria-label": string }
);

const NavBarBaseButton = ({
  isMenu,
  children,
  className,
  label,
  icon,
  "aria-label": ariaLabel,
  ...props
}: NavBarItemProps & {
  isMenu: boolean;
}) => {
  const Trigger = isMenu ? MenuTrigger : DialogTrigger;
  const Content = isMenu ? Menu : Dialog;

  return (
    <Trigger>
      <NavBarButton
        className={className}
        aria-label={ariaLabel || label}
        label={label}
        icon={icon}
        {...props.buttonProps}
      />
      <NavBarPopover {...props.popoverProps}>
        <Content>{children}</Content>
      </NavBarPopover>
    </Trigger>
  );
};

export const NavBarPopoverButton = (props: NavBarItemProps) => (
  <NavBarBaseButton {...props} isMenu={false} />
);

export const NavBarMenuButton = (props: NavBarItemProps) => (
  <NavBarBaseButton {...props} isMenu={true} />
);

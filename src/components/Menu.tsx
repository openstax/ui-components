import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogTrigger,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  Popover,
  PopoverProps,
} from "react-aria-components";
import { colors } from "../../src/theme";

export const Menu = styled(AriaMenu)``;
export const MenuItem = styled(AriaMenuItem)``;

const StyledMenuButton = styled(Button)`
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }
`;

export const MenuGenericContainer = styled.div`
  padding: 1.6rem;
`;

const MenuPopover = styled(Popover)`
  margin-top: -1rem;
  border-top: 0.4rem solid ${colors.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${MenuItem} {
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

export interface MenuProps {
  label: string;
  icon?: string | React.ReactNode;
  buttonProps?: ButtonProps;
  popoverProps?: PopoverProps;
  className?: string;
}

export const MenuButton = ({
  label,
  icon,
  ...props
}: React.PropsWithChildren<MenuProps>) => {
  return (
    <DialogTrigger>
      <StyledMenuButton
        aria-label={label}
        className={props.className}
        {...props.buttonProps}
      >
        {icon ? (
          typeof icon === "string" ? (
            <img aria-hidden="true" src={icon} alt="" />
          ) : (
            icon
          )
        ) : (
          label
        )}
      </StyledMenuButton>
      <MenuPopover {...props.popoverProps}>
        <Dialog>{props.children}</Dialog>
      </MenuPopover>
    </DialogTrigger>
  );
};

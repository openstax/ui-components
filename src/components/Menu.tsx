import React from 'react';
import styled from "styled-components";
import { Button, ButtonProps, Dialog, DialogTrigger, Popover, PopoverProps } from 'react-aria-components';

export const MenuButton = styled(Button)`
  border: none;
  background: none;
`;

export const MenuPopover = styled(Popover)`
  padding: 1.6rem;
  border-top: 0.4rem solid #63A524;
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;
`;

export interface MenuProps {
  buttonLabel: string;
  buttonIcon: string | React.ReactNode;
  buttonProps?: ButtonProps;
  popoverProps?: PopoverProps;
}

export const Menu = ({ buttonLabel, buttonIcon, ...props }: React.PropsWithChildren<MenuProps>) => {
  return (
    <DialogTrigger>
      <MenuButton aria-label={buttonLabel} {...props.buttonProps}>
        {typeof buttonIcon === 'string' ?
          <img aria-hidden='true' src={buttonIcon} alt='' /> : buttonIcon}
      </MenuButton>
      <MenuPopover {...props.popoverProps}>
        <Dialog>
          {props.children}
        </Dialog>
      </MenuPopover>
    </DialogTrigger>
  );
};

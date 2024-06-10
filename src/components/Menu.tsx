import React from 'react';
import styled from "styled-components";
import { Button, ButtonProps, Dialog, DialogTrigger, Popover, PopoverProps } from 'react-aria-components';

export const MenuButton = styled(Button)`
  border: none;
  background: none;
  padding: 0;
  min-height: 4.2rem;
  min-width: 4.2rem;
  display: inline-flex;
  place-content: center;
  align-items: center;
`;

export const MenuPopover = styled(Popover)`
  padding: 1.6rem;
  border-top: 0.4rem solid #63A524;
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;
`;

export interface MenuProps {
  buttonLabel: string;
  buttonIcon?: string | React.ReactNode;
  buttonProps?: ButtonProps;
  popoverProps?: PopoverProps;
}

export const Menu = ({ buttonLabel, buttonIcon, ...props }: React.PropsWithChildren<MenuProps>) => {
  return (
    <DialogTrigger>
      <MenuButton aria-label={buttonLabel} {...props.buttonProps}>
        {buttonIcon ? (typeof buttonIcon === 'string' ?
          <img aria-hidden='true' src={buttonIcon} alt='' /> : buttonIcon) : buttonLabel}
      </MenuButton>
      <MenuPopover {...props.popoverProps}>
        <Dialog>
          {props.children}
        </Dialog>
      </MenuPopover>
    </DialogTrigger>
  );
};

import React from 'react';
import styled from "styled-components";
import { Button, ButtonProps, Dialog, DialogTrigger, Popover, PopoverProps } from 'react-aria-components';

const StyledButton = styled(Button)`
`;

const StyledPopover = styled(Popover)`
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
      <StyledButton aria-label={buttonLabel} {...props.buttonProps}>
        {typeof buttonIcon === 'string' ?
          <img aria-hidden='true' src={buttonIcon} alt='' /> : buttonIcon}
      </StyledButton>
      <StyledPopover {...props.popoverProps}>
        <Dialog>
          {props.children}
        </Dialog>
      </StyledPopover>
    </DialogTrigger>
  );
};

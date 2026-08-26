import React from 'react';
import classNames from 'classnames';
import { Times } from "./svgs/Times";
import './CloseModalButton.css';

export interface CloseModalButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'aria-label'> {
  variant?: 'default' | 'error' | 'inverted-circle';
}

export const CloseModalButton = React.forwardRef<HTMLButtonElement, CloseModalButtonProps>(
  ({ variant, className, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      type='button'
      aria-label='Close'
      className={classNames('close-modal-button', variant, className)}
    >
      <Times aria-hidden='true' focusable='false' />
    </button>
  )
);

CloseModalButton.displayName = 'CloseModalButton';

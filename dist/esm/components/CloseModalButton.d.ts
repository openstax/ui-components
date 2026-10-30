import React from 'react';
import './CloseModalButton.css';
import '../theme/theme.css';
export interface CloseModalButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'aria-label'> {
    variant?: 'default' | 'error' | 'inverted-circle';
}
export declare const CloseModalButton: React.ForwardRefExoticComponent<CloseModalButtonProps & React.RefAttributes<HTMLButtonElement>>;

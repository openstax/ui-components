import classNames from "classnames";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";
import * as RAC from "react-aria-components";
import React from "react";
import './Overlay.css';

export const OverlayMask = React.forwardRef<HTMLDivElement, RAC.ModalOverlayProps>(
  ({ className, ...props }, ref) => (
    <Mask
      ref={ref}
      className={RAC.composeRenderProps(className, (resolved) => classNames('overlay-mask', resolved))}
      {...props}
    />
  )
);
OverlayMask.displayName = 'OverlayMask';

export const OverlayCloseButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof CloseModalButton>>(
  ({ className, ...props }, ref) => (
    <CloseModalButton
      ref={ref}
      className={classNames('overlay-close-button', className)}
      {...props}
    />
  )
);
OverlayCloseButton.displayName = 'OverlayCloseButton';

export const OverlayWrapper = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof ModalWrapper>>(
  ({ className, ...props }, ref) => (
    <ModalWrapper
      ref={ref}
      className={RAC.composeRenderProps(className, (resolved) => classNames('overlay-wrapper', resolved))}
      {...props}
    />
  )
);
OverlayWrapper.displayName = 'OverlayWrapper';

export const OverlayBody = React.forwardRef<HTMLElement, RAC.DialogProps>(
  ({ className, ...props }, ref) => (
    <RAC.Dialog
      ref={ref}
      className={classNames('overlay-body', className)}
      {...props}
    />
  )
);
OverlayBody.displayName = 'OverlayBody';

export type OverlayProps = React.PropsWithChildren<{
  onClose: () => void;
  className?: string;
  show?: boolean;
}>
  /**
   * A dialog needs an accessible name. `Overlay` has no heading of its own, so
   * unless the caller supplies a `<Heading slot='title'>` in `children`, these
   * are the way to give it one. They go to `OverlayBody` (the dialog) rather
   * than being spread onto `OverlayMask` with the rest of the props.
   */
  & Pick<RAC.DialogProps, 'aria-label' | 'aria-labelledby'>
  & RAC.ModalOverlayProps;

export const Overlay = ({
  className,
  onClose,
  children,
  show,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: OverlayProps) => {
  if (!show) { return null; }
  return (
    <OverlayMask
      className={className}
      isDismissable
      onOpenChange={(isOpen) => (!isOpen && onClose())}
      {...props}
    >
      <OverlayWrapper defaultOpen={true}>
        <OverlayCloseButton onClick={onClose} variant={'inverted-circle'} />
        <OverlayBody aria-label={ariaLabel} aria-labelledby={ariaLabelledby}>
          { children }
        </OverlayBody>
      </OverlayWrapper>
    </OverlayMask>
  );
};

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
      className={classNames('overlay-mask', className)}
      {...props}
    />
  )
);
OverlayMask.displayName = 'OverlayMask';

export const OverlayCloseButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof CloseModalButton>>(
  ({ className, ...props }, ref) => (
    <CloseModalButton
      ref={ref}
      className={classNames('overlay-close-button', className)}
      {...props}
    />
  )
);
OverlayCloseButton.displayName = 'OverlayCloseButton';

export const OverlayWrapper = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ModalWrapper>>(
  ({ className, ...props }, ref) => (
    <ModalWrapper
      ref={ref}
      className={classNames('overlay-wrapper', className)}
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

export const Overlay = ({
  className,
  onClose,
  children,
  show,
  ...props
}: React.PropsWithChildren<{
  onClose: () => void;
  className?: string;
  show?: boolean;
}> & RAC.ModalOverlayProps) => {
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
        <OverlayBody>
          { children }
        </OverlayBody>
      </OverlayWrapper>
    </OverlayMask>
  );
};

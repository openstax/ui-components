import classNames from "classnames";
import { CloseModalButton } from "./CloseModalButton";
import * as RAC from "react-aria-components";
import React from "react";
import './Modal.css';

export const ModalCard = React.forwardRef<HTMLDivElement, RAC.DialogProps>(
  ({ className, ...props }, ref) => (
    <RAC.Dialog
      ref={ref}
      className={classNames('modal-card', className)}
      {...props}
    />
  )
);
ModalCard.displayName = 'ModalCard';

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { variant?: string }>(
  ({ className, variant, ...props }, ref) => (
    <header
      ref={ref}
      className={classNames('modal-header', variant, className)}
      {...props}
    />
  )
);
Header.displayName = 'Header';

const Heading = React.forwardRef<HTMLHeadingElement, RAC.HeadingProps>(
  ({ className, ...props }, ref) => (
    <RAC.Heading
      ref={ref}
      className={classNames('modal-heading', className)}
      {...props}
    />
  )
);
Heading.displayName = 'Heading';

export const ModalBodyHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={classNames('modal-body-heading', className)}
      {...props}
    />
  )
);
ModalBodyHeading.displayName = 'ModalBodyHeading';

export const ModalBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('modal-body', className)}
      {...props}
    />
  )
);
ModalBody.displayName = 'ModalBody';

export const Mask = React.forwardRef<HTMLDivElement, RAC.ModalOverlayProps>(
  ({ className, ...props }, ref) => (
    <RAC.ModalOverlay
      ref={ref}
      defaultOpen
      className={classNames('mask', className)}
      {...props}
    />
  )
);
Mask.displayName = 'Mask';

export const ModalWrapper = RAC.Modal;

const CardWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('card-wrapper', className)}
      {...props}
    />
  )
);
CardWrapper.displayName = 'CardWrapper';

export const ModalFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('modal-footer', className)}
      {...props}
    />
  )
);
ModalFooter.displayName = 'ModalFooter';

export interface ModalPropTypes {
  onModalClose: () => void;
  heading: string;
  className?: string;
  show?: boolean;
  variant?: 'default' | 'error'
}

export const Modal = ({
  className,
  heading,
  onModalClose,
  children,
  show,
  variant,
  ...props
}: React.PropsWithChildren<ModalPropTypes> & RAC.ModalOverlayProps) => {
  if (!show) { return null; }
  return (
    <Mask
      className={className}
      isDismissable
      onOpenChange={(isOpen) => (!isOpen && onModalClose())}
      {...props}
    >
      <ModalWrapper>
        <CardWrapper>
          <ModalCard>
            <Header variant={variant}>
              <Heading slot="title">
                {heading}
              </Heading>
              <CloseModalButton onClick={onModalClose} variant={variant}/>
            </Header>
            {children}
          </ModalCard>
        </CardWrapper>
      </ModalWrapper>
    </Mask>
  );
};

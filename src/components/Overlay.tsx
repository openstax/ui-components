import styled from "styled-components";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";
import * as RAC from "react-aria-components";
import React from "react";

export const OverlayMask = styled(Mask)`
  background-color: rgba(0, 0, 0, 0.89);
`;

export const OverlayCloseButton = styled(CloseModalButton)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`;

export const OverlayWrapper = styled(ModalWrapper)`
  color: #fff;
`;

export const OverlayBody = styled(RAC.Dialog)`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`;

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

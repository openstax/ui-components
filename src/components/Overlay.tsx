import styled from "styled-components";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";

export const OverlayMask = styled(Mask)`
  background-color: rgba(0, 0, 0, 0.89);
`;

const StyledCloseModalButton = styled(CloseModalButton)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 0;
  top: 0;
`;

export const OverlayWrapper = styled(ModalWrapper)`
  color: #fff;
  padding: 4rem;
`;

export const OverlayBody = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = ({
  className,
  onClose,
  children,
  show
}: React.PropsWithChildren<{
  onClose: () => void;
  className?: string;
  show?: boolean;
}>) => {
  if (!show) { return null; }
  return (
    <OverlayWrapper className={className}>
      <OverlayBody>
        <StyledCloseModalButton onClick={onClose} variant={'inverted-circle'} />
        { children }
        </OverlayBody>
      <OverlayMask />
    </OverlayWrapper >
  );
};

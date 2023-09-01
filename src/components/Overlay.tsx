import styled from "styled-components";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";

const maskMargin = '2rem';
export const OverlayMask = styled(Mask)`
  background-color: rgba(0, 0, 0, 0.89);
  top: ${maskMargin};
  bottom: ${maskMargin};
  left: ${maskMargin};
  right: ${maskMargin};
  height: calc(100% - (${maskMargin} * 2));
  width: calc(100% - (${maskMargin} * 2));
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
  onModalClose,
  children,
  show
}: React.PropsWithChildren<{
  onModalClose: () => void; className?: string; show?: boolean
}>) => {
  if (!show) { return null; }
  return (
    <OverlayWrapper className={className}>
      <OverlayBody>
        <StyledCloseModalButton onClick={onModalClose} variant={'inverted-circle'} />
        { children }
        </OverlayBody>
      <OverlayMask />
    </OverlayWrapper >
  );
};

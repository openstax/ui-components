import styled, { css } from "styled-components";
import { colors, zIndex } from "../../src/theme";
import { CloseModalButton } from "./CloseModalButton";
import * as RAC from "react-aria-components";
import React from "react";


const modalPadding = 3;

export const ModalCard = styled(RAC.Dialog)`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${colors.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
  outline: none;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${modalPadding * 0.5}rem;
  padding: ${modalPadding * 0.5}rem ${modalPadding}rem;
  background: ${colors.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${(props: { variant?: string }) => props.variant === 'error' && css`
    background: ${colors.palette.paleRed};
    color: ${colors.palette.darkRed};
  `}
`;

const Heading = styled(RAC.Heading)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${modalPadding * 0.5}rem 0;
  font-size: 1.8rem;
`;

export const ModalBody = styled.div`
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;

export const Mask = styled(
  (props: RAC.ModalOverlayProps & React.RefAttributes<HTMLDivElement>) => (
    <RAC.ModalOverlay defaultOpen {...props}/>
  )
)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.modals};
`;

export const ModalWrapper = RAC.Modal;

const CardWrapper = styled.div`
  z-index: 1;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${modalPadding}rem;

  button {
    min-width: 12rem;
  }
`;

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

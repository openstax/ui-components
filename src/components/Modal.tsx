import { colors, zIndex } from "../../src/theme";
import styled, { css } from "styled-components";
import { CloseModalButton } from "./CloseModalButton";

const modalPadding = 3.0;

const Card = styled.div`
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

const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${modalPadding * 0.5}rem 0;
  font-size: 1.8rem;
`;

export const ModalBodyHeading = styled.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;

export const ModalBody = styled.div`
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;

export const Mask = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWrapper = styled.div`
  top: 0;
  z-index: ${zIndex.modals};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

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
  variant
}: React.PropsWithChildren<ModalPropTypes>) => {
  if (!show) { return null; }
  return (
    <ModalWrapper className={className}>
      <CardWrapper>
        <Card>
          <Header variant={variant}>
            <Heading>
              {heading}
            </Heading>
            <CloseModalButton onClick={onModalClose} variant={variant}/>
          </Header>
          {children}
        </Card>
      </CardWrapper>
      <Mask />
    </ModalWrapper>
  );
};

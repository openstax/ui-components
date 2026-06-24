import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import { colors, zIndex } from "../theme";
import { CloseModalButton } from "./CloseModalButton";
import * as RAC from "react-aria-components";
const modalPadding = 3;
export const ModalCard = styled(RAC.Dialog) `
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
const Header = styled.header `
  display: flex;
  align-items: center;
  margin-bottom: ${modalPadding * 0.5}rem;
  padding: ${modalPadding * 0.5}rem ${modalPadding}rem;
  background: ${colors.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${(props) => props.variant === 'error' && css `
    background: ${colors.palette.paleRed};
    color: ${colors.palette.darkRed};
  `}
`;
const Heading = styled(RAC.Heading) `
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${modalPadding * 0.5}rem 0;
  font-size: 1.8rem;
`;
export const ModalBodyHeading = styled.h3 `
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;
export const ModalBody = styled.div `
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;
export const Mask = styled((props) => (_jsx(RAC.ModalOverlay, { defaultOpen: true, ...props }))) `
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
const CardWrapper = styled.div `
  z-index: 1;
`;
export const ModalFooter = styled.div `
  display: flex;
  justify-content: space-between;
  padding: ${modalPadding}rem;

  button {
    min-width: 12rem;
  }
`;
export const Modal = ({ className, heading, onModalClose, children, show, variant, ...props }) => {
    if (!show) {
        return null;
    }
    return (_jsx(Mask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onModalClose()), ...props, children: _jsx(ModalWrapper, { children: _jsx(CardWrapper, { children: _jsxs(ModalCard, { children: [_jsxs(Header, { variant: variant, children: [_jsx(Heading, { slot: "title", children: heading }), _jsx(CloseModalButton, { onClick: onModalClose, variant: variant })] }), children] }) }) }) }));
};

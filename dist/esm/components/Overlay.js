import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";
import * as RAC from "react-aria-components";
export const OverlayMask = styled(Mask) `
  background-color: rgba(0, 0, 0, 0.89);
`;
export const OverlayCloseButton = styled(CloseModalButton) `
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`;
export const OverlayWrapper = styled(ModalWrapper) `
  color: #fff;
`;
export const OverlayBody = styled(RAC.Dialog) `
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
export const Overlay = ({ className, onClose, children, show, ...props }) => {
    if (!show) {
        return null;
    }
    return (_jsx(OverlayMask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onClose()), ...props, children: _jsxs(OverlayWrapper, { defaultOpen: true, children: [_jsx(OverlayCloseButton, { onClick: onClose, variant: 'inverted-circle' }), _jsx(OverlayBody, { children: children })] }) }));
};

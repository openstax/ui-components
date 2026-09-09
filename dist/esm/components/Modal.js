import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { CloseModalButton } from "./CloseModalButton";
import * as RAC from "react-aria-components";
import React from "react";
import './Modal.css';
import '../theme/theme.css';
export const ModalCard = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.Dialog, { ref: ref, className: classNames('modal-card', className), ...props })));
ModalCard.displayName = 'ModalCard';
const Header = React.forwardRef(({ className, variant, ...props }, ref) => (_jsx("header", { ref: ref, className: classNames('modal-header', variant !== 'default' && variant, className), ...props })));
Header.displayName = 'Header';
const Heading = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.Heading, { ref: ref, className: classNames('modal-heading', className), ...props })));
Heading.displayName = 'Heading';
export const ModalBodyHeading = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, className: classNames('modal-body-heading', className), ...props })));
ModalBodyHeading.displayName = 'ModalBodyHeading';
export const ModalBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames('modal-body', className), ...props })));
ModalBody.displayName = 'ModalBody';
export const Mask = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.ModalOverlay, { ref: ref, defaultOpen: true, className: RAC.composeRenderProps(className, (resolved) => classNames('mask', resolved)), ...props })));
Mask.displayName = 'Mask';
export const ModalWrapper = RAC.Modal;
const CardWrapper = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames('card-wrapper', className), ...props })));
CardWrapper.displayName = 'CardWrapper';
export const ModalFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: classNames('modal-footer', className), ...props })));
ModalFooter.displayName = 'ModalFooter';
export const Modal = ({ className, heading, onModalClose, children, show, variant, ...props }) => {
    if (!show) {
        return null;
    }
    return (_jsx(Mask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onModalClose()), ...props, children: _jsx(ModalWrapper, { children: _jsx(CardWrapper, { children: _jsxs(ModalCard, { children: [_jsxs(Header, { variant: variant, children: [_jsx(Heading, { slot: "title", children: heading }), _jsx(CloseModalButton, { onClick: onModalClose, variant: variant })] }), children] }) }) }) }));
};

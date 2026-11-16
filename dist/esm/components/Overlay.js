import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { CloseModalButton } from "./CloseModalButton";
import { Mask, ModalWrapper } from "./Modal";
import * as RAC from "react-aria-components";
import React from "react";
import './Overlay.css';
import '../theme/theme.css';
export const OverlayMask = React.forwardRef(({ className, ...props }, ref) => (_jsx(Mask, { ref: ref, className: RAC.composeRenderProps(className, (resolved) => classNames('overlay-mask', resolved)), ...props })));
OverlayMask.displayName = 'OverlayMask';
export const OverlayCloseButton = React.forwardRef(({ className, ...props }, ref) => (_jsx(CloseModalButton, { ref: ref, className: classNames('overlay-close-button', className), ...props })));
OverlayCloseButton.displayName = 'OverlayCloseButton';
export const OverlayWrapper = React.forwardRef(({ className, ...props }, ref) => (_jsx(ModalWrapper, { ref: ref, className: RAC.composeRenderProps(className, (resolved) => classNames('overlay-wrapper', resolved)), ...props })));
OverlayWrapper.displayName = 'OverlayWrapper';
export const OverlayBody = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.Dialog, { ref: ref, className: classNames('overlay-body', className), ...props })));
OverlayBody.displayName = 'OverlayBody';
export const Overlay = ({ className, onClose, children, show, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, 'aria-details': ariaDetails, ...props }) => {
    if (!show) {
        return null;
    }
    return (_jsx(OverlayMask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onClose()), ...props, children: _jsxs(OverlayWrapper, { defaultOpen: true, children: [_jsx(OverlayCloseButton, { onClick: onClose, variant: 'inverted-circle' }), _jsx(OverlayBody, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, "aria-details": ariaDetails, children: children })] }) }));
};

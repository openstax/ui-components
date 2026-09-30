import { jsx as _jsx } from "react/jsx-runtime";
import { BodyPortal } from './BodyPortal';
import { Toast } from './Toast';
import { zIndex } from '../theme';
import classNames from 'classnames';
import './ToastContainer.css';
const makeToasts = (toasts, inline, onDismissToast) => (toasts.map((toast, index) => _jsx(Toast, { onDismiss: onDismissToast, inline: inline, ...toast, children: toast.message }, `toast-${index}`)));
const zIndexStyle = {
    '--toast-container-z-index': zIndex.toasts,
};
export const ToastContainer = ({ toasts, onDismissToast, inline = false, className }) => {
    const containerClass = classNames('toast-container', {
        'toast-container-inline': inline,
    }, className);
    return (_jsx("div", { className: containerClass, "aria-live": 'polite', style: zIndexStyle, children: makeToasts(toasts, inline, onDismissToast) }));
};
export const BodyPortalToastContainer = ({ toasts, onDismissToast, inline = false, className }) => {
    const containerClass = classNames('toast-container', {
        'toast-container-inline': inline,
    }, className);
    return (_jsx(BodyPortal, { className: containerClass, "aria-live": 'polite', slot: 'toast', style: zIndexStyle, children: makeToasts(toasts, inline, onDismissToast) }));
};

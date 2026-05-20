import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import { BodyPortal } from './BodyPortal';
import { Toast } from './Toast';
import { zIndex } from '../../src/theme';
const makeStyledToastContainer = (func) => func `
  ${(props) => !props.inline && css `
    position: fixed;
    right: 2rem;
  `}
  z-index: ${zIndex.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`;
const StyledToastContainer = makeStyledToastContainer(styled.div);
const StyledBodyPortalToastContainer = makeStyledToastContainer(styled(BodyPortal));
const makeToasts = (toasts, inline, onDismissToast) => (toasts.map((toast, index) => _jsx(Toast, { onDismiss: onDismissToast, inline: inline, ...toast, children: toast.message }, `toast-${index}`)));
export const ToastContainer = ({ toasts, onDismissToast, inline = false, className }) => (_jsx(StyledToastContainer, { inline: inline, "aria-live": 'polite', className: className, children: makeToasts(toasts, inline, onDismissToast) }));
export const BodyPortalToastContainer = ({ toasts, onDismissToast, inline = false, className }) => (_jsx(StyledBodyPortalToastContainer, { inline: inline, "aria-live": 'polite', slot: 'toast', className: className, children: makeToasts(toasts, inline, onDismissToast) }));

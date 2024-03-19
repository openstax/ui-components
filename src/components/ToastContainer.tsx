import { zIndex } from '../../src/theme';
import styled, { css } from 'styled-components';
import { Toast } from './Toast';
import { ToastData } from '../../src/types';

const StyledToastContainer = styled.div`
  ${(props: {inline: boolean}) => !props.inline && css`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${zIndex.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`;

export const ToastContainer = ({ toasts, onDismissToast, inline = false }: {
  toasts: ToastData[], onDismissToast?: ToastData['onDismiss'], inline?: boolean
}) => {
  return <StyledToastContainer inline={inline} aria-live="polite">
    {toasts.map((toast, index) => <Toast
      key={`toast-${index}`}
      onDismiss={onDismissToast}
      inline={inline}
      {...toast}
      >{toast.message}</Toast>)}
  </StyledToastContainer>
}

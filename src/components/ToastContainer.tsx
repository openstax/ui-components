import { zIndexes } from '../../src/theme';
import styled from 'styled-components';
import { Toast } from './Toast';
import { ToastData } from '../../src/types';

const StyledToastContainer = styled.div`
  position: fixed;
  right: 2rem;
  z-index: ${zIndexes.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`;

export const ToastContainer = ({ toasts, onRemoveToast }: {
  toasts: ToastData[], onRemoveToast?: ToastData['onDismiss']
}) => {
  return <StyledToastContainer>
    {toasts.map((toast, index) => <Toast
      key={`toast-${index}`}
      onDismiss={(id) => onRemoveToast ? onRemoveToast(id) : null}
      {...toast}
      >{toast.message}</Toast>)}
  </StyledToastContainer>
}

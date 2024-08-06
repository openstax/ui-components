import styled, { css } from 'styled-components';
import { BodyPortal } from './BodyPortal';
import { Toast } from './Toast';
import { zIndex } from '../../src/theme';
import { ToastData } from '../../src/types';

const StyledToastContainer = styled(BodyPortal)`
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

export const ToastContainer = ({ toasts, onDismissToast, inline = false, className }: {
  toasts: ToastData[], onDismissToast?: ToastData['onDismiss'], inline?: boolean, className?: string
}) => {
  return <StyledToastContainer inline={inline} aria-live="polite" slot='toast' className={className}>
    {toasts.map((toast, index) => <Toast
      key={`toast-${index}`}
      onDismiss={onDismissToast}
      inline={inline}
      {...toast}
      >{toast.message}</Toast>)}
  </StyledToastContainer>
}

import styled, { css, ThemedStyledFunction } from 'styled-components';
import { BodyPortal } from './BodyPortal';
import { Toast } from './Toast';
import { zIndex } from '../../src/theme';
import { ToastData } from '../../src/types';
import { ComponentType } from 'react';

const makeStyledToastContainer = <T extends keyof JSX.IntrinsicElements | ComponentType<any>>(
  func: ThemedStyledFunction<T, object>
) => func`
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

const StyledToastContainer = makeStyledToastContainer(styled.div);

const StyledBodyPortalToastContainer = makeStyledToastContainer(styled(BodyPortal));

export type ToastContainerParams = {
  toasts: ToastData[];
  onDismissToast?: ToastData['onDismiss'];
  inline?: boolean;
  className?: string;
};

export type ToastContainerComponent = (params: ToastContainerParams) => JSX.Element;

const makeToasts = (toasts: ToastData[], inline: boolean, onDismissToast?: (id: string | undefined) => void) => (
  toasts.map((toast, index) =>
    <Toast
      key={`toast-${index}`}
      onDismiss={onDismissToast}
      inline={inline}
      {...toast}
      >{toast.message}</Toast>
  )
);

export const ToastContainer: ToastContainerComponent = ({ toasts, onDismissToast, inline = false, className }) => (
  <StyledToastContainer inline={inline} aria-live='polite' className={className}>
    {makeToasts(toasts, inline, onDismissToast)}
  </StyledToastContainer>
);

export const BodyPortalToastContainer: ToastContainerComponent = ({ toasts, onDismissToast, inline = false, className }) => (
  <StyledBodyPortalToastContainer inline={inline} aria-live='polite' slot='toast' className={className}>
    {makeToasts(toasts, inline, onDismissToast)}
  </StyledBodyPortalToastContainer>
);

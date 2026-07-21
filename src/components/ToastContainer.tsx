import { BodyPortal } from './BodyPortal';
import { Toast } from './Toast';
import { zIndex } from '../theme';
import { ToastData } from '../types';
import classNames from 'classnames';
import './ToastContainer.css';

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

export const ToastContainer: ToastContainerComponent = ({ toasts, onDismissToast, inline = false, className }) => {
  const containerClass = classNames('toast-container', {
    'toast-container-inline': inline,
  }, className);

  const style = {
    '--toast-container-z-index': zIndex.toasts,
  } as React.CSSProperties;

  return (
    <div className={containerClass} aria-live='polite' style={style}>
      {makeToasts(toasts, inline, onDismissToast)}
    </div>
  );
};

export const BodyPortalToastContainer: ToastContainerComponent = ({ toasts, onDismissToast, inline = false, className }) => {
  const containerClass = classNames('toast-container', {
    'toast-container-inline': inline,
  }, className);

  const style = {
    '--toast-container-z-index': zIndex.toasts,
  } as React.CSSProperties;

  return (
    <BodyPortal className={containerClass} aria-live='polite' slot='toast' style={style}>
      {makeToasts(toasts, inline, onDismissToast)}
    </BodyPortal>
  );
};

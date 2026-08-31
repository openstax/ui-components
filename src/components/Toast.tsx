import React from 'react';
import { palette } from '../theme/palette';
import classNames from 'classnames';
import { CSSPropertiesWithVariables, ToastData } from '../types';
import './Toast.css';

const ANIMATION_TIME_MS = 500;
const DISMISS_AFTER_MS_FLOOR = 1000;

interface ToastBase extends React.PropsWithChildren<Omit<ToastData, 'message' | 'onDismiss'>> {
  inline?: boolean;
}

interface ToastWithTimeout extends ToastBase {
  onDismiss?: ToastData['onDismiss'];
  dismissAfterMs?: number;
}

interface ToastWithoutTimeout extends ToastBase {
  onDismiss?: never;
  dismissAfterMs?: never;
}

export type Toast = ToastWithTimeout | ToastWithoutTimeout;

export const Toast = ({
  id,
  title,
  children,
  variant = 'neutral',
  inline = false,
  dismissAfterMs,
  onDismiss,
}: Toast) => {
  const [show, setShow] = React.useState(true);

  if (dismissAfterMs) {
    dismissAfterMs = Math.max(dismissAfterMs, DISMISS_AFTER_MS_FLOOR);
  }

  React.useEffect(() => {
    if (!dismissAfterMs) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShow(false);
      if (onDismiss) {
        onDismiss(id);
      }
    }, dismissAfterMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!show) { return null; }

  const toastClass = classNames('toast', {
    'toast-inline': inline,
    'toast-dismissable': dismissAfterMs,
  });

  const style: CSSPropertiesWithVariables = {
    '--toast-animation-duration': `${ANIMATION_TIME_MS}ms`,
    '--toast-success-title-color': palette.darkerGreen,
    '--toast-success-bg': palette.paleGreen,
    '--toast-neutral-title-color': palette.neutralDarker,
    '--toast-neutral-bg': palette.neutralLighter,
    '--toast-failure-title-color': palette.darkRed,
    '--toast-failure-bg': palette.paleRed,
    '--toast-failure-icon-color': palette.neutralDark,
    ...(dismissAfterMs ? { animationDelay: `${dismissAfterMs - ANIMATION_TIME_MS}ms` } : {}),
  };

  return (
    <div className={toastClass} style={style}>
      <div className={variant}>
        <div className='title'>{title}</div>
        <div className='body'>
          {children}
        </div>
      </div>
    </div>
  );
}

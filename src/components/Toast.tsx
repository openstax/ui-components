import React from 'react';
import { colors } from '../../src/theme';
import styled, { css } from 'styled-components';
import { ToastData } from '../../src/types';

const ANIMATION_TIME_MS = 500;
const DISMISS_AFTER_MS_FLOOR = 1000;

const StyledToast = styled.div<{
  inline: boolean;
  dismissAfterMs?: number;
}>`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${props => !props.inline && css`
    max-width: 28rem;
  `}
  font-size: 1.6rem;

  ${props => props.dismissAfterMs ? css`
    animation-duration: ${ANIMATION_TIME_MS}ms;
    animation-timing-function: ease;
    animation-delay: ${props.dismissAfterMs - ANIMATION_TIME_MS}ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: forwards;
    animation-name: toast-animation;

    @keyframes toast-animation {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `: null}

  ${props => props.inline && css`
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `}

  > * {
    flex-grow: 1;
  }

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 1rem;
  }

  .success {
    .title {
      color: ${colors.palette.darkerGreen};
      background-color: ${colors.palette.paleGreen};
    }
  }

  .neutral {
    .title {
      color: ${colors.palette.neutralDarker};
      background-color: ${colors.palette.neutralLighter};
    }
  }

  .failure {
    .title {
      color: ${colors.palette.darkRed};
      background-color: ${colors.palette.paleRed};
      .openstax-icon[type="close"] {
        color: ${colors.palette.neutralDark};
        margin-left: 2rem;
        align-self: flex-start;
      }
    }
    .body {
      button {
        padding-left: 0;
        font-size: 1.6rem;
      }
    }
  }
`;

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

  return <StyledToast
    dismissAfterMs={dismissAfterMs}
    inline={inline}
  >
    <div className={variant}>
      <div className='title'>{title}</div>
      <div className='body'>
        {children}
      </div>
    </div>
  </StyledToast>
}

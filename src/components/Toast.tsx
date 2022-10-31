import React from 'react';
import { colors } from '../../src/theme';
import styled, { css } from 'styled-components';
import { ToastData } from '../../src/types';

const REMOVE_AFTER = 1000 * 7;
const ANIMATION_TIME = 500;

interface StyledToast {
  duration: number;
  inline: boolean;
  timeout: boolean;
};

const StyledToast = styled.div<StyledToast>`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  max-width: 28rem;
  font-size: 1.4rem;


${props => props.timeout && css`
  animation-duration: ${ANIMATION_TIME}ms;
  animation-timing-function: ease;
  animation-delay: ${(props: StyledToast) => props.duration - ANIMATION_TIME}ms;
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
`}

  ${props => props.inline && css`
    //max-width: 56rem;
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

interface ToastBase extends
React.PropsWithChildren<Omit<ToastData, 'message' | 'onRemove'>> {
  inline?: boolean;
}

interface ToastWithTimeout extends ToastBase {
  onRemove?: ToastData['onRemove'];
  timeout?: true;
}

interface ToastWithoutTimeout extends ToastBase {
  timeout: false;
  onRemove?: never;
  removeAfterMilliseconds?: never;
}

export type Toast = ToastWithTimeout | ToastWithoutTimeout;

export const Toast = ({
  id,
  title,
  children,
  variant = 'neutral',
  timeout = true,
  inline = false,
  removeAfterMilliseconds = REMOVE_AFTER,
  onRemove,
}: Toast) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    if (!timeout) {
      return;
    }

    setTimeout(() => {
      setShow(false);
      if (onRemove) {
        onRemove(id);
      }
    }, removeAfterMilliseconds);

    return () => {
      setShow(false);
    }
  }, []);

  if (!show) { return null; }

  if (removeAfterMilliseconds < 1000) {
    removeAfterMilliseconds = 1000;
  }

  return <StyledToast
    inline={inline}
    duration={removeAfterMilliseconds}
    timeout={timeout}>
    <div className={variant}>
      <div className='title'>{title}</div>
      <div className='body'>
        {children}
      </div>
    </div>
  </StyledToast>
}

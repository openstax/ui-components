import React from 'react';
import { colors, zIndexes } from '../../src/theme';
import styled from 'styled-components';

const REMOVE_AFTER = 1000 * 7;

const StyledToast = styled.div`
  position: fixed;
  z-index: ${zIndexes.toasts};
  min-height: 5rem;
  right: 2rem;
  top: 8.5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  max-width: 28rem;
  font-size: 1.4rem;

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 10px;
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

export const Toast = ({
  title, children, variant = 'neutral', removeAfterMilliseconds = REMOVE_AFTER
}: React.PropsWithChildren<{
  title: string;
  variant?: 'neutral' | 'success' | 'failure';
  removeAfterMilliseconds?: number;
}>) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setShow(false), removeAfterMilliseconds);
  }, []);

  if (!show) { return null; }

  return <StyledToast>
    <div className={variant}>
      <div className='title'>{title}</div>
      <div className='body'>
        {children}
      </div>
    </div>
  </StyledToast>
}

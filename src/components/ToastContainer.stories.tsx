import styled from 'styled-components';
import { ToastData } from '../../src/types';
import { ToastContainer } from './ToastContainer';

const StyledToastContainer = styled(ToastContainer)`
  top: 2rem;
  left: 2rem;
  right: unset;
`;

const toasts: ToastData[] = [
  { title: 'Neutral', message: 'message' },
  { title: 'Error', message: 'message', variant: 'failure', dismissAfterMs: 4000 },
  { title: 'Success', message: 'message', variant: 'success', dismissAfterMs: 2000 },
];
export const Default = () => <StyledToastContainer toasts={toasts} />;

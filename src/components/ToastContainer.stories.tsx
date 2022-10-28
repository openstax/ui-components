import { ToastData } from 'src/types';
import { ToastContainer } from './ToastContainer';

const toasts: ToastData[] = [
  { title: 'Neutral', message: 'message' },
  { title: 'Error', message: 'message', variant: 'failure', removeAfterMilliseconds: 4000 },
  { title: 'Success', message: 'message', variant: 'success', removeAfterMilliseconds: 2000 },
];
export const Default = () => <ToastContainer toasts={toasts} />;

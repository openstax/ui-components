import { ToastData } from '../types';
import { BodyPortalToastContainer, ToastContainer } from './ToastContainer';
import './stories.css';

const toasts: ToastData[] = [
  { title: 'Neutral', message: 'message' },
  { title: 'Error', message: 'message', variant: 'failure', dismissAfterMs: 4000 },
  { title: 'Success', message: 'message', variant: 'success', dismissAfterMs: 2000 },
];

export const UsingBodyPortal = () => <BodyPortalToastContainer className="story-toast-container" toasts={toasts} />;
export const WithoutBodyPortal = () => <ToastContainer className="story-toast-container" toasts={toasts} />;

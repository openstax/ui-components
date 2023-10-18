export type ToastData = {
  id?: string;
  title: string;
  message: React.ReactNode;
  variant?: ToastVariant;
  dismissAfterMs?: number;
  onDismiss?: (id: ToastData['id']) => void;
}

type ToastVariant = 'neutral' | 'success' | 'failure';

export type SentryError = {
  error: Error;
  componentStack?: string;
  eventId?: string;
  type?: string;
};

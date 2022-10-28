export type ToastData = {
  title: string;
  message: React.ReactNode;
  variant?: ToastVariant;
  removeAfterMilliseconds?: number;
  onRemove?: () => void;
}

type ToastVariant = 'neutral' | 'success' | 'failure';

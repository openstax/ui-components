export type ToastData = {
  id?: string;
  title: string;
  message: React.ReactNode;
  variant?: ToastVariant;
  removeAfterMilliseconds?: number;
  onRemove?: (id: ToastData['id']) => void;
}

type ToastVariant = 'neutral' | 'success' | 'failure';

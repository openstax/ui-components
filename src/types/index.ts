import type { CSSProperties } from "react";

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

export type CSSPropertiesWithVariables = CSSProperties & {
  [key: `--${string}`]: string | number | undefined;
};

/// <reference types="react" />
export declare type ToastData = {
    id?: string;
    title: string;
    message: React.ReactNode;
    variant?: ToastVariant;
    dismissAfterMs?: number;
    onDismiss?: (id: ToastData['id']) => void;
};
declare type ToastVariant = 'neutral' | 'success' | 'failure';
export declare type SentryError = {
    error: Error;
    componentStack?: string;
    eventId?: string;
    type?: string;
};
export {};

import React from 'react';
import { ToastData } from '../../src/types';
interface ToastBase extends React.PropsWithChildren<Omit<ToastData, 'message' | 'onDismiss'>> {
    inline?: boolean;
}
interface ToastWithTimeout extends ToastBase {
    onDismiss?: ToastData['onDismiss'];
    dismissAfterMs?: number;
}
interface ToastWithoutTimeout extends ToastBase {
    onDismiss?: never;
    dismissAfterMs?: never;
}
export declare type Toast = ToastWithTimeout | ToastWithoutTimeout;
export declare const Toast: ({ id, title, children, variant, inline, dismissAfterMs, onDismiss, }: Toast) => import("react/jsx-runtime").JSX.Element | null;
export {};

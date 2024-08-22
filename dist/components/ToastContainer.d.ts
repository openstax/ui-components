import { ToastData } from '../../src/types';
export declare const ToastContainer: ({ toasts, onDismissToast, inline, className }: {
    toasts: ToastData[];
    onDismissToast?: ToastData['onDismiss'];
    inline?: boolean | undefined;
    className?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;

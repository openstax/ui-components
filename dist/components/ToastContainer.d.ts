import { ToastData } from '../../src/types';
export declare const ToastContainer: ({ toasts, onDismissToast, inline }: {
    toasts: ToastData[];
    onDismissToast?: ToastData['onDismiss'];
    inline?: boolean | undefined;
}) => JSX.Element;

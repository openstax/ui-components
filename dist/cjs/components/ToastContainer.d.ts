import { ToastData } from '../types';
import './ToastContainer.css';
export type ToastContainerParams = {
    toasts: ToastData[];
    onDismissToast?: ToastData['onDismiss'];
    inline?: boolean;
    className?: string;
};
export type ToastContainerComponent = (params: ToastContainerParams) => JSX.Element;
export declare const ToastContainer: ToastContainerComponent;
export declare const BodyPortalToastContainer: ToastContainerComponent;

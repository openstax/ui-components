/// <reference types="react" />
import { ToastData } from '../../src/types';
export declare type ToastContainerParams = {
    toasts: ToastData[];
    onDismissToast?: ToastData['onDismiss'];
    inline?: boolean;
    className?: string;
};
export declare type ToastContainerComponent = (params: ToastContainerParams) => JSX.Element;
export declare const ToastContainer: ToastContainerComponent;
export declare const BodyPortalToastContainer: ToastContainerComponent;

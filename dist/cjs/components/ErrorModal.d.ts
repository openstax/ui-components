/// <reference types="react" />
import { ModalPropTypes } from "./Modal";
declare type ErrorModalProps = React.PropsWithChildren<Omit<ModalPropTypes, 'heading' | 'variant'> & {
    heading?: string;
}>;
export declare const ErrorModal: (props: ErrorModalProps) => import("react/jsx-runtime").JSX.Element;
export {};

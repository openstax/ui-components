/// <reference types="react" />
import { ModalPropTypes } from "./Modal";
declare type ErrorModalProps = React.PropsWithChildren<Omit<ModalPropTypes, 'heading' | 'variant'> & {
    heading?: string;
}>;
export declare const ErrorModal: (props: ErrorModalProps) => JSX.Element;
export {};

import { ModalPropTypes } from "./Modal";
declare type ErrorModalProps = React.PropsWithChildren<Omit<ModalPropTypes, 'variant' | 'heading'>>;
export declare const ErrorModal: (props: ErrorModalProps) => JSX.Element;
export {};

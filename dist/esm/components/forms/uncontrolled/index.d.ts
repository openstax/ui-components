import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
import './formComponents.css';
export * from './inputs';
type FormProps = React.ComponentPropsWithoutRef<'form'>;
export declare const formClassName = "uncontrolled-form";
export declare const Form: ({ children, className, style, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export declare const formSectionClassName = "uncontrolled-form-section";
export declare const FormSection: ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
type MessagesProps = {
    state: FetchState<any, string>;
    className?: string;
};
export declare const messagesClassName = "uncontrolled-messages";
export declare const Messages: ({ state, className }: MessagesProps) => import("react/jsx-runtime").JSX.Element | null;
type ButtonsProps = {
    state: FetchState<any, string>;
    onCancel?: () => void;
    className?: string;
};
export declare const buttonsClassName = "uncontrolled-buttons";
export declare const Buttons: ({ className, ...props }: ButtonsProps) => import("react/jsx-runtime").JSX.Element;
type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export declare const submitButtonClassName = "uncontrolled-submit-button";
export declare const Submit: ({ className, ...props }: SubmitButtonProps) => import("react/jsx-runtime").JSX.Element;
type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const cancelButtonClassName = "uncontrolled-cancel-button";
export declare const Cancel: ({ className, ...props }: CancelButtonProps) => import("react/jsx-runtime").JSX.Element;

import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
export * from './inputs';
declare type FormProps = React.ComponentPropsWithoutRef<'form'>;
export declare const Form: ({ children, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export declare const FormSection: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type MessagesProps = {
    state: FetchState<any, string>;
};
export declare const Messages: ({ state }: MessagesProps) => import("react/jsx-runtime").JSX.Element | null;
declare type ButtonsProps = {
    state: FetchState<any, string>;
    onCancel?: () => void;
};
export declare const Buttons: (props: ButtonsProps) => import("react/jsx-runtime").JSX.Element;
declare type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export declare const Submit: ({ ...props }: SubmitButtonProps) => import("react/jsx-runtime").JSX.Element;
declare type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const Cancel: ({ ...props }: CancelButtonProps) => import("react/jsx-runtime").JSX.Element;

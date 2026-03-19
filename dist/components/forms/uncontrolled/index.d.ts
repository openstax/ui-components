import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
export * from './inputs';
declare type FormProps = React.ComponentPropsWithoutRef<'form'>;
export declare const Form: import("styled-components").StyledComponent<({ children, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
export declare const FormSection: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type MessagesProps = {
    state: FetchState<any, string>;
    className?: string;
};
export declare const Messages: import("styled-components").StyledComponent<({ state }: MessagesProps) => import("react/jsx-runtime").JSX.Element | null, any, {}, never>;
declare type ButtonsProps = {
    state: FetchState<any, string>;
    onCancel?: () => void;
    className?: string;
};
export declare const Buttons: import("styled-components").StyledComponent<(props: ButtonsProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
declare type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export declare const Submit: import("styled-components").StyledComponent<({ ...props }: SubmitButtonProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;
declare type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const Cancel: import("styled-components").StyledComponent<({ ...props }: CancelButtonProps) => import("react/jsx-runtime").JSX.Element, any, {}, never>;

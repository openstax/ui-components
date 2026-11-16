import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
import * as Uncontrolled from '../uncontrolled';
import { AbstractFormData, FormListConfig } from "./hooks";
export * from './inputs';
export * from './hooks';
export { Submit, Cancel, FormSection } from '../uncontrolled';
type FormProps = Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Form>, 'onSubmit'> & {
    state: FetchState<any, string>;
    defaultData?: AbstractFormData;
    onSubmit?: (data: AbstractFormData) => void;
};
export declare const Form: ({ children, state, onSubmit, defaultData, ...props }: FormProps) => import("react/jsx-runtime").JSX.Element;
export declare const Messages: (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Messages>, "state">) => import("react/jsx-runtime").JSX.Element;
export declare const Buttons: (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Buttons>, "state">) => import("react/jsx-runtime").JSX.Element;
type GetFormValueProps = {
    name: string;
    children: (value: AbstractFormData[string]) => JSX.Element | null;
};
export declare const GetFormValue: (props: GetFormValueProps) => JSX.Element | null;
type GetFormDataProps = {
    children: (value: AbstractFormData) => JSX.Element | null;
};
export declare const GetFormData: (props: GetFormDataProps) => JSX.Element | null;
type GetFormDataRootProps = {
    children: (value: AbstractFormData) => JSX.Element | null;
};
export declare const GetFormDataRoot: (props: GetFormDataRootProps) => JSX.Element | null;
export declare const NameSpace: (props: React.PropsWithChildren<{
    name: string;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const List: ({ children, ...props }: React.PropsWithChildren<FormListConfig>) => import("react/jsx-runtime").JSX.Element;
export declare const ListItems: (props: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
type ListRecordSortableHandleProps = React.ComponentPropsWithoutRef<'div'>;
export declare const ListRecordSortableHandle: (props: ListRecordSortableHandleProps) => import("react/jsx-runtime").JSX.Element;
type ListRecordRemoveButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const ListRecordRemoveButton: (props: ListRecordRemoveButtonProps) => import("react/jsx-runtime").JSX.Element;
type ListRecordAddButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const ListRecordAddButton: (props: ListRecordAddButtonProps) => import("react/jsx-runtime").JSX.Element;

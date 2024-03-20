import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch.js";
import * as Uncontrolled from '../uncontrolled';
import { AbstractFormData, FormListConfig } from "./hooks";
export * from './inputs';
export * from './hooks';
export { Submit, Cancel, FormSection } from '../uncontrolled';
declare type FormProps = Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Form>, 'onSubmit'> & {
    state: FetchState<any, string>;
    defaultData?: AbstractFormData;
    onSubmit?: (data: AbstractFormData) => void;
};
export declare const Form: ({ children, state, onSubmit, defaultData, ...props }: FormProps) => JSX.Element;
export declare const Messages: (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Messages>, 'state'>) => JSX.Element;
export declare const Buttons: (props: Omit<React.ComponentPropsWithoutRef<typeof Uncontrolled.Buttons>, 'state'>) => JSX.Element;
declare type GetFormValueProps = {
    name: string;
    children: (value: AbstractFormData[string]) => JSX.Element | null;
};
export declare const GetFormValue: (props: GetFormValueProps) => JSX.Element | null;
declare type GetFormDataProps = {
    children: (value: AbstractFormData) => JSX.Element | null;
};
export declare const GetFormData: (props: GetFormDataProps) => JSX.Element | null;
export declare const NameSpace: (props: React.PropsWithChildren<{
    name: string;
}>) => JSX.Element;
export declare const List: ({ children, ...props }: React.PropsWithChildren<FormListConfig>) => JSX.Element;
export declare const ListItems: (props: {
    children: React.ReactNode;
}) => JSX.Element;
declare type ListRecordSortableHandleProps = React.ComponentPropsWithoutRef<'div'>;
export declare const ListRecordSortableHandle: (props: ListRecordSortableHandleProps) => JSX.Element;
declare type ListRecordRemoveButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const ListRecordRemoveButton: (props: ListRecordRemoveButtonProps) => JSX.Element;
declare type ListRecordAddButtonProps = React.ComponentPropsWithoutRef<'button'>;
export declare const ListRecordAddButton: (props: ListRecordAddButtonProps) => JSX.Element;

import React from 'react';
import { FetchState } from "@openstax/ts-utils/fetch";
export declare type AbstractFormData = Record<string, any>;
declare type FormStateHelpers<T extends AbstractFormData> = {
    data: Partial<T>;
    rootHelpers: FormStateHelpers<T>;
    submit: () => void;
    namespace: string;
    state: FetchState<T, string>;
    setInput: {
        fields: React.Dispatch<React.SetStateAction<Partial<T>>>;
        field: <F extends keyof T>(fieldName: F) => (value: T[F]) => void;
        merge: (input: Partial<T>) => void;
    };
};
export declare const FormStateContext: React.Context<() => FormStateHelpers<AbstractFormData>>;
export declare const useFormHelpers: () => FormStateHelpers<AbstractFormData>;
export declare const useFormState: <T extends AbstractFormData>(state: FetchState<T, string>, defaultValue?: Partial<T> | undefined, onSubmit?: ((data: Partial<T>) => void) | undefined) => FormStateHelpers<T>;
export declare const useFormNameSpace: (field: string) => FormStateHelpers<AbstractFormData>;
export declare const FormListContext: React.Context<() => ListStateHelpers>;
export declare const useFormListHelpers: () => ListStateHelpers;
declare type ListStateHelpers = {
    addRecord: (record?: AbstractFormData) => void;
    removeRecord: (id: string) => void;
    data: Array<AbstractFormData & {
        id: string;
    }>;
    rootHelpers: FormStateHelpers<AbstractFormData>;
    setData: React.Dispatch<React.SetStateAction<AbstractFormData[]>>;
    makeRecordHelpers: (record: AbstractFormData & {
        id: string;
    }) => FormStateHelpers<AbstractFormData>;
};
export declare type FormListConfig = {
    name: string;
};
export declare const useFormList: ({ name }: FormListConfig) => ListStateHelpers;
export {};

import React from 'react';
import { InputProps } from "./inputDecorations";
import { AbstractFormData } from "../controlled/hooks";
declare type TextInputProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
    onChangeValue?: (value: any) => void;
    transformValue?: (value: string | undefined) => any;
    addon?: React.ReactElement;
    pattern?: string;
};
export declare const TextInput: ({ label, addon, help, wrapperProps, onChangeValue, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
declare type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & InputProps & {
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
    onChangeValue?: (value: any) => void;
    transformValue?: (value: string | undefined) => any;
};
export declare const TextArea: ({ label, help, wrapperProps, onChangeValue, ...props }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
declare type SelectProps = React.ComponentPropsWithoutRef<'select'> & InputProps & {
    options: Array<{
        label: string;
        value: string;
        group?: string;
    }>;
    onChangeValue?: (value: any) => void;
    transformValue?: (value: string | string[] | undefined) => any;
    onOptionDisappear?: (disappeared: readonly string[]) => void;
    onOptionReappear?: (reappeared: readonly string[]) => void;
    onOptionAppear?: (appeared: readonly string[]) => void;
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
    loading?: boolean;
};
export declare const Select: ({ onChangeValue, onOptionDisappear, onOptionAppear, onOptionReappear, label, help, options, wrapperProps, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
declare type RadioProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
    onChangeValue?: (value: boolean | undefined) => void;
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
    tooltipText?: string;
};
export declare const Radio: ({ label, help, wrapperProps, onChangeValue, ...props }: RadioProps) => import("react/jsx-runtime").JSX.Element;
declare type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
    onChangeValue?: (value: boolean | undefined) => void;
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
};
export declare const Checkbox: ({ label, help, wrapperProps, onChangeValue, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
declare type FileProps = React.ComponentPropsWithoutRef<'input'> & InputProps & {
    accept?: string;
    wrapperProps?: React.ComponentPropsWithoutRef<'label'>;
    onChangeValue?: (value: any) => void;
    uploader?: (value: FileList | null) => Promise<undefined | string | string[] | AbstractFormData | AbstractFormData[]>;
    directory?: string;
    webkitdirectory?: string;
};
export declare const File: ({ label, help, wrapperProps, onChangeValue, uploader, value, ...props }: FileProps) => import("react/jsx-runtime").JSX.Element;
export {};

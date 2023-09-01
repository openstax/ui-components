import React from 'react';
import * as Uncontrolled from '../uncontrolled/inputTypes';
declare type MakeControlled<T extends React.ComponentType<any>> = Omit<React.ComponentPropsWithoutRef<T>, 'value'> & {
    name: string;
    emptyDisabledValue?: boolean;
};
declare type TextInputProps = {};
export declare const TextInput: (props: MakeControlled<typeof Uncontrolled.TextInput> & TextInputProps) => JSX.Element;
declare type TextAreaProps = {};
export declare const TextArea: (props: MakeControlled<typeof Uncontrolled.TextArea> & TextAreaProps) => JSX.Element;
declare type CheckboxProps = {};
export declare const Checkbox: (props: MakeControlled<typeof Uncontrolled.Checkbox> & CheckboxProps) => JSX.Element;
declare type SelectProps = {
    onChangeValue?: (value: string | undefined) => void;
    multiple?: false;
} | {
    onChangeValue?: (value: readonly string[] | undefined) => void;
    multiple: true;
};
export declare const Select: (props: MakeControlled<typeof Uncontrolled.Select> & SelectProps) => JSX.Element;
declare type FileProps = {};
export declare const File: (props: MakeControlled<typeof Uncontrolled.File> & FileProps) => JSX.Element;
export {};

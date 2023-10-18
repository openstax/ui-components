import React from 'react';
import * as Uncontrolled from '../uncontrolled/inputTypes';
declare type MakeControlled<T extends React.ComponentType<any>> = Omit<React.ComponentPropsWithoutRef<T>, 'value'> & {
    name: string;
    emptyDisabledValue?: boolean;
};
export declare const TextInput: (props: MakeControlled<typeof Uncontrolled.TextInput>) => JSX.Element;
export declare const TextArea: (props: MakeControlled<typeof Uncontrolled.TextArea>) => JSX.Element;
export declare const Checkbox: (props: MakeControlled<typeof Uncontrolled.Checkbox>) => JSX.Element;
declare type SelectProps = {
    onChangeValue?: (value: string | undefined) => void;
    multiple?: false;
} | {
    onChangeValue?: (value: readonly string[] | undefined) => void;
    multiple: true;
};
export declare const Select: (props: MakeControlled<typeof Uncontrolled.Select> & SelectProps) => JSX.Element;
export declare const File: (props: MakeControlled<typeof Uncontrolled.File>) => JSX.Element;
export {};

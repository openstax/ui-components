import React from 'react';
import * as Uncontrolled from '../uncontrolled/inputTypes';
declare type MakeControlled<T extends React.ComponentType<any>> = Omit<React.ComponentPropsWithoutRef<T>, 'value'> & {
    name: string;
    emptyDisabledValue?: boolean;
};
declare type MakeControlledCheckbox<T extends React.ComponentType<any>> = Omit<React.ComponentPropsWithoutRef<T>, 'checked'> & {
    name: string;
    emptyDisabledValue?: boolean;
};
export declare const TextInput: (props: MakeControlled<typeof Uncontrolled.TextInput>) => import("react/jsx-runtime").JSX.Element;
export declare const TextArea: (props: MakeControlled<typeof Uncontrolled.TextArea>) => import("react/jsx-runtime").JSX.Element;
export declare const Radio: (props: MakeControlledCheckbox<typeof Uncontrolled.Radio>) => import("react/jsx-runtime").JSX.Element;
export declare const Checkbox: (props: MakeControlledCheckbox<typeof Uncontrolled.Checkbox>) => import("react/jsx-runtime").JSX.Element;
declare type SelectProps = {
    onChangeValue?: (value: string | undefined) => void;
    multiple?: false;
} | {
    onChangeValue?: (value: readonly string[] | undefined) => void;
    multiple: true;
};
export declare const Select: (props: MakeControlled<typeof Uncontrolled.Select> & SelectProps) => import("react/jsx-runtime").JSX.Element;
export declare const File: (props: MakeControlled<typeof Uncontrolled.File>) => import("react/jsx-runtime").JSX.Element;
export declare const RangeInput: (props: MakeControlled<typeof Uncontrolled.RangeInput>) => import("react/jsx-runtime").JSX.Element;
export {};

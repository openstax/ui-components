import React from 'react';
export declare const FormInputWrapper: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const FormLabelText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare type InputProps = {
    label: string;
    help?: string;
};
declare type HelpTextProps = React.ComponentPropsWithoutRef<'p'> & {
    value: string | undefined;
};
export declare const HelpText: ({ value, ...props }: HelpTextProps) => JSX.Element | null;
export declare const RequiredIndicator: (props: {
    show: boolean | undefined;
}) => JSX.Element | null;
export {};

import React from 'react';
export declare const FormInputWrapper: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const FormLabelText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare type InputProps = {
    label: string;
    help?: string | React.ReactNode;
};
declare type HelpTextProps = React.ComponentPropsWithoutRef<'p'> & {
    value: string | undefined | React.ReactNode;
};
export declare const HelpText: ({ value, ...props }: HelpTextProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const RequiredIndicator: (props: {
    show: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element | null;
export {};

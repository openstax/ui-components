import React from "react";
export interface ErrorPropTypes {
    className?: string;
    children?: React.ReactNode;
    heading?: string;
}
export declare const Error: ({ heading, children, ...props }: ErrorPropTypes) => import("react/jsx-runtime").JSX.Element;

import React from "react";
export interface MessageBoxProps {
    customMargin?: string;
    children?: React.ReactNode;
}
export declare const MessageBox: ({ children, customMargin, ...props }: MessageBoxProps) => import("react/jsx-runtime").JSX.Element;

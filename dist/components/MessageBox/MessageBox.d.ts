import React from "react";
export interface MessageBoxProps {
    customMargin?: string;
    children?: React.ReactNode;
}
export declare const BoxWrapper: import("styled-components").StyledComponent<"div", any, {
    margin?: string | undefined;
}, never>;
export declare const BoxHeading: import("styled-components").StyledComponent<"h3", any, {}, never>;
export declare const BoxBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const BoxEventId: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MessageBox: ({ children, customMargin, ...props }: MessageBoxProps) => import("react/jsx-runtime").JSX.Element;

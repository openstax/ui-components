import React from "react";
import { CSSPropertiesWithVariables } from "../../types";
import "./MessageBox.css";
import "../../theme/theme.css";
export interface MessageBoxProps {
    customMargin?: string;
    children?: React.ReactNode;
}
type BoxProps<E extends keyof JSX.IntrinsicElements> = Omit<React.ComponentPropsWithoutRef<E>, 'style'> & {
    style?: CSSPropertiesWithVariables;
};
export interface BoxWrapperProps extends BoxProps<'div'> {
    margin?: string;
}
export declare const BoxWrapper: React.ForwardRefExoticComponent<BoxWrapperProps & React.RefAttributes<HTMLDivElement>>;
export declare const BoxHeading: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref">, "style"> & {
    style?: CSSPropertiesWithVariables;
} & React.RefAttributes<HTMLHeadingElement>>;
export declare const BoxBody: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "style"> & {
    style?: CSSPropertiesWithVariables;
} & React.RefAttributes<HTMLDivElement>>;
export declare const BoxEventId: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "style"> & {
    style?: CSSPropertiesWithVariables;
} & React.RefAttributes<HTMLDivElement>>;
export declare const MessageBox: ({ children, customMargin, ...props }: MessageBoxProps) => import("react/jsx-runtime").JSX.Element;
export {};

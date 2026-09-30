import React from "react";
import { CSSPropertiesWithVariables } from "../types";
import './ButtonBar.css';
type ButtonBarProps = {
    size?: "large" | "medium" | "small";
    children?: React.ReactNode;
    style?: CSSPropertiesWithVariables;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
export declare const ButtonBar: ({ size, children, className, style: customStyle, ...restProps }: ButtonBarProps) => import("react/jsx-runtime").JSX.Element;
export {};

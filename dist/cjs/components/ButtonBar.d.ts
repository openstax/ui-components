import React from "react";
import { CSSPropertiesWithVariables } from "../types";
import './ButtonBar.css';
import '../theme/theme.css';
type ButtonBarProps = {
    size?: "large" | "medium" | "small";
    children?: React.ReactNode;
    style?: CSSPropertiesWithVariables;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>;
export declare const ButtonBar: ({ size, children, className, style, ...restProps }: ButtonBarProps) => import("react/jsx-runtime").JSX.Element;
export {};

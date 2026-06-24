import React from "react";
import * as RAC from "react-aria-components";
export type TabsProps = {
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & RAC.TabsProps;
export declare const tabListBaseCss = "\n  overflow-x: auto;\n  overscroll-behavior: contain;\n  display: flex;\n  flex-direction: row;\n";
export declare const tabBaseCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & RAC.TabsProps, any>>;
export declare const buttonBarWrapperCss: string;
export declare const buttonBarItemCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & RAC.TabsProps, any>>;
export declare const Tabs: ({ variant, size, className, children, ...restProps }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export { TabList, Tab, TabPanel } from "react-aria-components";

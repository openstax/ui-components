import React from "react";
import * as RAC from "react-aria-components";
export declare type TabsProps = {
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & RAC.TabsProps;
export declare const tabListBaseCss = "\n  overflow-x: auto;\n  overscroll-behavior: contain;\n  display: flex;\n  flex-direction: row;\n";
export declare const tabBaseCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    variant?: "button-bar" | undefined;
    size?: "small" | "large" | "medium" | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
} & RAC.TabsProps, any>>;
export declare const buttonBarWrapperCss: string;
export declare const buttonBarItemCss: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    variant?: "button-bar" | undefined;
    size?: "small" | "large" | "medium" | undefined;
    className?: string | undefined;
    children?: React.ReactNode;
} & RAC.TabsProps, any>>;
export declare const Tabs: ({ variant, size, className, children, ...restProps }: TabsProps) => JSX.Element;
export { TabList, Tab, TabPanel } from "react-aria-components";

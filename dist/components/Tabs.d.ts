import React from "react";
import * as RAC from "react-aria-components";
declare type TabsProps = {
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & RAC.TabsProps;
export declare const Tabs: ({ variant, size, className, children, ...restProps }: TabsProps) => JSX.Element;
export { TabList, Tab, TabPanel, TabsContext, TabListStateContext } from "react-aria-components";

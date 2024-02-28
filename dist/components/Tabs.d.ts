import React from "react";
import * as AC from "react-aria-components";
declare type TabsProps = {
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    className?: string;
    children?: React.ReactNode;
} & AC.TabsProps;
export declare const Tabs: ({ variant, size, className, children, ...restProps }: TabsProps) => JSX.Element;
export { TabList, Tab, TabPanel } from "react-aria-components";

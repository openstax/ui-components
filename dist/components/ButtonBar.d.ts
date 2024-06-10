import React from "react";
import { TabsProps } from "./Tabs";
declare type ButtonBarProps = Pick<TabsProps, "size"> & {
    children?: React.ReactNode;
};
export declare const ButtonBar: ({ size, children, ...restProps }: ButtonBarProps) => JSX.Element;
export {};

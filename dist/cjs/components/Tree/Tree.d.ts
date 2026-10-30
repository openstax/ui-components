import React from "react";
import * as RAC from "react-aria-components";
import "./Tree.css";
import "../../theme/theme.css";
export declare const Tree: <T extends object>(props: RAC.TreeProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export declare const TreeItem: <T extends object>(props: RAC.TreeItemProps<T> & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export { TreeItemContent } from "react-aria-components";
export declare const TreeChevron: (props: React.PropsWithChildren<{
    className?: string;
}>) => import("react/jsx-runtime").JSX.Element;

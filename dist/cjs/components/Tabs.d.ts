import type { CSSProperties } from "react";
import * as RAC from "react-aria-components";
import { CSSPropertiesWithVariables } from "../types";
import './Tabs.css';
import '../theme/theme.css';
export type TabsProps = {
    variant?: "button-bar";
    size?: "large" | "medium" | "small";
    style?: CSSPropertiesWithVariables | ((values: RAC.TabsRenderProps & {
        defaultStyle: CSSProperties;
    }) => CSSPropertiesWithVariables | undefined);
} & Omit<RAC.TabsProps, 'style'>;
export declare const Tabs: ({ variant, size, className, style, ...restProps }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export { TabList, Tab, TabPanel } from "react-aria-components";

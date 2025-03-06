import React from "react";
import { Key } from "react-aria-components";
export interface ToggleButtonGroupProps {
    children: {
        key: string;
        value: string;
    }[];
    selectedItems: Set<Key>;
    onSelectionChange?: React.Dispatch<React.SetStateAction<Set<Key>>>;
    selectionMode?: 'single' | 'multiple';
    className?: string;
}
export declare const ToggleButton: import("styled-components").StyledComponent<(props: import("react-aria-components").ToggleButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null, any, {}, never>;
export declare const ToggleButtonGroup: ({ children, selectedItems, onSelectionChange, selectionMode, ...props }: ToggleButtonGroupProps) => import("react/jsx-runtime").JSX.Element;

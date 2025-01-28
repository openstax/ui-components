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
}
export declare const ToggleButtonGroup: ({ children, selectedItems, onSelectionChange, selectionMode, }: ToggleButtonGroupProps) => import("react/jsx-runtime").JSX.Element;

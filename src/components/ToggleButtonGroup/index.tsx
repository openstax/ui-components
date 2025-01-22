import React from "react";
import { StyledToggleButtonGroup, StyledToggleButton } from "./styles";
import { Key } from "react-aria-components";

export interface ToggleButtonGroupProps {
    children: { key: string, value: string }[];
    selectedItems: Set<Key>;
    handlerSelectedItems?: React.Dispatch<React.SetStateAction<Set<Key>>>;
    selectionMode?: 'single' | 'multiple'
}

export const ToggleButtonGroup = (
    {
        children,
        selectedItems,
        handlerSelectedItems,
        selectionMode = 'single',
    }: ToggleButtonGroupProps) => {

    return (
        <StyledToggleButtonGroup
            selectionMode={selectionMode}
            selectedKeys={selectedItems}
            onSelectionChange={handlerSelectedItems}
        >
            {children.map((child) =>
                <StyledToggleButton 
                    key={child.key}
                    id={child.key} 
                    // Allow parents to trigger handlers, works with onPointer events but not with onMouse events
                    onPressStart={e => e.continuePropagation()}
                >
                    {child.value}
                </StyledToggleButton>
            )}
        </StyledToggleButtonGroup>

    );
}
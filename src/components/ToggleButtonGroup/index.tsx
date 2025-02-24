import React from "react";
import { StyledToggleButtonGroup, StyledToggleButton } from "./styles";
import { Key } from "react-aria-components";

export interface ToggleButtonGroupProps {
  children: { key: string, value: string }[];
  selectedItems: Set<Key>;
  onSelectionChange?: React.Dispatch<React.SetStateAction<Set<Key>>>;
  selectionMode?: 'single' | 'multiple';
  className?: string;
}

export const ToggleButtonGroup = (
  {
    children,
    selectedItems,
    onSelectionChange,
    selectionMode = 'single',
    className=''
  }: ToggleButtonGroupProps) => {

  return (
    <StyledToggleButtonGroup
      selectionMode={selectionMode}
      selectedKeys={selectedItems}
      onSelectionChange={onSelectionChange}
      className={className}
    >
      {children.map((child) =>
        <StyledToggleButton
          key={child.key}
          data-key={child.key}
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

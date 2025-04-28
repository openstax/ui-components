import { StyledToggleButtonGroup, StyledToggleButton } from "./styles";
import { Key } from "react-aria-components";

export interface ToggleButtonGroupProps {
  items: { id: string, value: string }[];
  selectedItems?: Iterable<Key>;
  onSelectionChange?: ((keys: Set<Key>) => void);
  selectionMode?: 'single' | 'multiple';
  className?: string;
}

export const ToggleButton = StyledToggleButton;

export const ToggleButtonGroup = (
  {
    items,
    selectedItems,
    onSelectionChange,
    selectionMode = 'single',
    ...props
  }: ToggleButtonGroupProps) => {

  return (
    <StyledToggleButtonGroup
      selectionMode={selectionMode}
      selectedKeys={selectedItems}
      onSelectionChange={onSelectionChange}
      {...props}
    >
      {items.map((item) =>
        <StyledToggleButton
          key={item.id}
          data-button-id={item.id}
          id={item.id}
          // Allow parents to trigger handlers, works with onPointer events but not with onMouse events
          onPressStart={e => e.continuePropagation()}
        >
          {item.value}
        </StyledToggleButton>
      )}
    </StyledToggleButtonGroup>
  );
}

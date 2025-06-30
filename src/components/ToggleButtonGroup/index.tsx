import { StyledToggleButtonGroup, StyledToggleButton } from "./styles";
import { ToggleButtonGroupProps as RACToggleButtonGroupProps, ToggleButtonProps as RACToggleButtonProps, Key } from "react-aria-components";

export interface ToggleButtonGroupProps extends RACToggleButtonGroupProps {
  items: (RACToggleButtonProps & { value: string })[];
  selectedItems?: Iterable<Key>;
}

export const ToggleButton = StyledToggleButton;

export const ToggleButtonGroup = (
  {
    items,
    selectedItems,
    ...props
  }: ToggleButtonGroupProps) => {

  return (
    <StyledToggleButtonGroup
      selectedKeys={selectedItems}
      {...props}
    >
      {items.map(({ value, ...itemProps }) =>
        <StyledToggleButton
          key={itemProps.id}
          data-button-id={itemProps.id}
          {...itemProps}
          // Allow parents to trigger handlers, works with onPointer events but not with onMouse events
          onPressStart={e => e.continuePropagation()}
        >
          {value}
        </StyledToggleButton>
      )}
    </StyledToggleButtonGroup>
  );
}

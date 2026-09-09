import { jsx as _jsx } from "react/jsx-runtime";
import { StyledToggleButtonGroup, StyledToggleButton } from "./styles";
export const ToggleButton = StyledToggleButton;
export const ToggleButtonGroup = ({ items, selectedItems, ...props }) => {
    return (_jsx(StyledToggleButtonGroup, { selectedKeys: selectedItems, ...props, children: items.map(({ value, ...itemProps }) => _jsx(StyledToggleButton, { "data-button-id": itemProps.id, ...itemProps, 
            // Allow parents to trigger handlers, works with onPointer events but not with onMouse events
            onPressStart: e => e.continuePropagation(), children: value }, itemProps.id)) }));
};

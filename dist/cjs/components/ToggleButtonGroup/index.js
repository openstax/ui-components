"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButtonGroup = exports.ToggleButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
exports.ToggleButton = styles_1.StyledToggleButton;
const ToggleButtonGroup = ({ items, selectedItems, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledToggleButtonGroup, { selectedKeys: selectedItems, ...props, children: items.map(({ value, ...itemProps }) => (0, jsx_runtime_1.jsx)(styles_1.StyledToggleButton, { "data-button-id": itemProps.id, ...itemProps, 
            // Allow parents to trigger handlers, works with onPointer events but not with onMouse events
            onPressStart: e => e.continuePropagation(), children: value }, itemProps.id)) }));
};
exports.ToggleButtonGroup = ToggleButtonGroup;

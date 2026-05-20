"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sharedCheckboxStyles_1 = require("./sharedCheckboxStyles");
const styled_components_1 = __importDefault(require("styled-components"));
const StyledLabel = styled_components_1.default.label `
  ${sharedCheckboxStyles_1.checkboxLabelStyles}
`;
// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled_components_1.default.input `
  ${sharedCheckboxStyles_1.checkboxInputStyles}
`;
const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(StyledLabel, { bold: bold, variant: variant, isDisabled: disabled, ...labelProps, children: [(0, jsx_runtime_1.jsx)(StyledInput, { ...props, type: "checkbox", variant: variant, checkboxSize: size, isDisabled: disabled, disabled: disabled }), children] }));
};
exports.Checkbox = Checkbox;

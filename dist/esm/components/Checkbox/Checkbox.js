import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { checkboxLabelStyles, checkboxInputStyles } from "./sharedCheckboxStyles";
import styled from "styled-components";
const StyledLabel = styled.label `
  ${checkboxLabelStyles}
`;
// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input `
  ${checkboxInputStyles}
`;
export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, ...props }) => {
    return (_jsxs(StyledLabel, { bold: bold, variant: variant, isDisabled: disabled, ...labelProps, children: [_jsx(StyledInput, { ...props, type: "checkbox", variant: variant, checkboxSize: size, isDisabled: disabled, disabled: disabled }), children] }));
};

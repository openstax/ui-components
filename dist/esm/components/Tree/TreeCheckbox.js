import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Checkbox as RACCheckbox } from "react-aria-components";
import { checkboxLabelStyles, checkboxInputStyles, checkboxSelectionSlotCheckedStyles } from "../Checkbox/sharedCheckboxStyles";
import { checkedMixIcon } from "../svgs/checkmarksvgs";
import theme from '../../theme';
const StyledCheckbox = styled(RACCheckbox) `
  ${checkboxLabelStyles}

  [data-slot="selection"] {
    ${checkboxInputStyles}
  }

  &[data-selected] [data-slot="selection"]::before {
    ${checkboxSelectionSlotCheckedStyles}
  }

  &[data-indeterminate="true"] {
    [data-slot="selection"]::before { 
      content: "";
      position: relative;
      transform: scale(1);
      background-color: ${theme.colors.palette.mediumBlue};
      border: none;
      background-image: url('${checkedMixIcon}');
    }
  }
`;
export const TreeCheckbox = ({ size = 1.6, variant = "primary", bold = false, children, ...props }) => {
    return (_jsxs(StyledCheckbox, { ...props, variant: variant, checkboxSize: size, bold: bold, children: [_jsx("div", { "data-slot": "selection" }), children] }));
};

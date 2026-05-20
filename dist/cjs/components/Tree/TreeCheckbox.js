"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCheckbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const react_aria_components_1 = require("react-aria-components");
const sharedCheckboxStyles_1 = require("../Checkbox/sharedCheckboxStyles");
const checkmarksvgs_1 = require("../svgs/checkmarksvgs");
const theme_1 = __importDefault(require("../../../src/theme"));
const StyledCheckbox = (0, styled_components_1.default)(react_aria_components_1.Checkbox) `
  ${sharedCheckboxStyles_1.checkboxLabelStyles}

  [data-slot="selection"] {
    ${sharedCheckboxStyles_1.checkboxInputStyles}
  }

  &[data-selected] [data-slot="selection"]::before {
    ${sharedCheckboxStyles_1.checkboxSelectionSlotCheckedStyles}
  }

  &[data-indeterminate="true"] {
    [data-slot="selection"]::before { 
      content: "";
      position: relative;
      transform: scale(1);
      background-color: ${theme_1.default.colors.palette.mediumBlue};
      border: none;
      background-image: url('${checkmarksvgs_1.checkedMixIcon}');
    }
  }
`;
const TreeCheckbox = ({ size = 1.6, variant = "primary", bold = false, children, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(StyledCheckbox, { ...props, variant: variant, checkboxSize: size, bold: bold, children: [(0, jsx_runtime_1.jsx)("div", { "data-slot": "selection" }), children] }));
};
exports.TreeCheckbox = TreeCheckbox;

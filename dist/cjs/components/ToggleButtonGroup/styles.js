"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledToggleButton = exports.StyledToggleButtonGroup = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_aria_components_1 = require("react-aria-components");
const theme_1 = require("../../theme");
const Tabs_1 = require("../Tabs");
exports.StyledToggleButtonGroup = (0, styled_components_1.default)(react_aria_components_1.ToggleButtonGroup) `
  ${Tabs_1.tabListBaseCss}
`;
exports.StyledToggleButton = (0, styled_components_1.default)(react_aria_components_1.ToggleButton) `
  all: unset;
  height: 3.6rem;
  padding: 0 0.8rem;
  background-color: ${theme_1.colors.palette.white};
  border: solid 0.1rem ${theme_1.colors.palette.pale};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  white-space: nowrap;
  user-select: none;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${theme_1.colors.palette.neutralLighter};
    // achieve a 2px border effect without disrupting layout
    box-shadow: inset 0 0 0 0.1rem ${theme_1.colors.palette.pale};
  }

  &[data-disabled] {
    color: ${theme_1.colors.palette.neutralLight};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${theme_1.colors.palette.black};
  }
`;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = exports.StyledInput = exports.StyledLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const theme_1 = require("../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const react_stately_1 = require("react-stately");
const react_aria_1 = require("react-aria");
const Tooltip_1 = require("./Tooltip");
exports.StyledLabel = styled_components_1.default.label `
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${(props => props.isDisabled ? theme_1.colors.palette.pale : 'inherit')};
  width: 100%;
  position: relative;
`;
// https://moderncss.dev/pure-css-custom-styled-radio-buttons/
exports.StyledInput = styled_components_1.default.input `
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${theme_1.colors.palette.white};
  opacity: ${(props => props.isDisabled ? '0.4' : '1')};
  font: inherit;
  color: ${theme_1.colors.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${theme_1.colors.palette.neutralThin};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${theme_1.colors.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${(props => props.isDisabled ? 0 : 1)};
  }
`;
const LabelWithTooltipWrapper = styled_components_1.default.div `
  display: inline-block;
`;
const Radio = ({ children, disabled, labelAs, ...props }) => {
    const state = (0, react_stately_1.useTooltipTriggerState)({ delay: 0 });
    const ref = react_1.default.useRef(null);
    const { triggerProps, tooltipProps } = (0, react_aria_1.useTooltipTrigger)({ delay: 0 }, state, ref);
    return props.tooltipText
        ? (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(LabelWithTooltipWrapper, { children: (0, jsx_runtime_1.jsxs)(exports.StyledLabel, { ref: ref, as: labelAs, isDisabled: disabled, ...triggerProps, children: [(0, jsx_runtime_1.jsx)(exports.StyledInput, { type: "radio", onFocus: () => state.open(), isDisabled: disabled, disabled: disabled, ...props }), children, state.isOpen && ((0, jsx_runtime_1.jsx)(Tooltip_1.CustomTooltip, { state: state, ...tooltipProps, placement: 'right', children: props.tooltipText }))] }) }) })
        : (0, jsx_runtime_1.jsxs)(exports.StyledLabel, { isDisabled: disabled, as: labelAs, children: [(0, jsx_runtime_1.jsx)(exports.StyledInput, { type: "radio", isDisabled: disabled, disabled: disabled, ...props }), children] });
};
exports.Radio = Radio;

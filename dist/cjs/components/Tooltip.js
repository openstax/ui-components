"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTooltip = exports.TooltipGroup = exports.Tooltip = exports.StyledTrigger = exports.StyledTooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const react_aria_components_1 = require("react-aria-components");
const Info_1 = require("./svgs/Info");
const react_aria_1 = require("react-aria");
const tooltipStyles = `
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${theme_1.colors.palette.white};
  color: ${theme_1.colors.palette.neutralThin};
  outline: none;
  padding: 1rem;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  position: absolute;
  min-width: 24rem;
  z-index: 1000;

  &[data-placement=top] {
    margin-bottom: 0.8rem;
    --origin: translateY(0.4rem);
  }

  &[data-placement=bottom] {
    margin-top: 0.8rem;
    top: 50%;
    --origin: translateY(-0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    left: 100%;
    margin-left: 0.8rem;
    --origin: translateX(-0.4rem);
    & .react-aria-OverlayArrow {
      top: 50%;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &[data-placement=left] {
    margin-right: 0.8rem;
    --origin: translateX(0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: ${theme_1.colors.palette.white};
  }
`;
exports.StyledTooltip = (0, styled_components_1.default)(react_aria_components_1.Tooltip) `${tooltipStyles}`;
const StyledCustomTooltip = styled_components_1.default.div `
  ${tooltipStyles}  
`;
exports.StyledTrigger = (0, styled_components_1.default)(react_aria_components_1.Button) `
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`;
const Tooltip = ({ children, placement, icon, ...props }) => (0, jsx_runtime_1.jsxs)(exports.StyledTooltip, { ...props, placement: placement, children: [(0, jsx_runtime_1.jsx)(react_aria_components_1.OverlayArrow, { children: (0, jsx_runtime_1.jsx)("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0 L4 4 L8 0", stroke: "#ccc", strokeWidth: "1" }) }) }), children] });
exports.Tooltip = Tooltip;
const TooltipGroup = ({ icon, ariaLabel, ...props }) => (0, jsx_runtime_1.jsxs)(react_aria_components_1.TooltipTrigger, { delay: 0, children: [(0, jsx_runtime_1.jsx)(exports.StyledTrigger, { "aria-label": ariaLabel || 'More information', children: icon
                ? (0, jsx_runtime_1.jsx)("img", { src: icon, "aria-hidden": true, alt: '' })
                : (0, jsx_runtime_1.jsx)(Info_1.Info, { "aria-hidden": true }) }), (0, jsx_runtime_1.jsx)(exports.Tooltip, { ...props })] });
exports.TooltipGroup = TooltipGroup;
const CustomTooltip = ({ state, ...props }) => {
    const { tooltipProps } = (0, react_aria_1.useTooltip)(props, state);
    return ((0, jsx_runtime_1.jsxs)(StyledCustomTooltip, { "data-placement": props.placement, ...(0, react_aria_1.mergeProps)(props, tooltipProps), children: [props.children, (0, jsx_runtime_1.jsx)(react_aria_components_1.OverlayArrow, { ...props, children: (0, jsx_runtime_1.jsx)("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0 L4 4 L8 0", stroke: "#ccc", strokeWidth: "1" }) }) })] }));
};
exports.CustomTooltip = CustomTooltip;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = exports.CloseButton = exports.StyledBanner = exports.Severity = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DismissIcon_1 = require("../svgs/DismissIcon");
const Html_1 = require("../Html");
const styled_components_1 = __importDefault(require("styled-components"));
const Button_1 = require("../Button");
const theme_1 = require("../../theme");
exports.Severity = styled_components_1.default.span `
  font-weight: bold;
  text-transform: uppercase;
`;
exports.StyledBanner = styled_components_1.default.div `
  position: relative;
  background: ${({ severity }) => severity === 'error' ? '#F8E8EA' : '#fff5e0'};
  color: ${({ severity }) => severity === 'error' ? theme_1.colors.palette.darkRed : '#976502'};
  border: ${({ severity }) => severity === 'error' ? `1px solid ${theme_1.colors.palette.lightRed}` : '1px solid #fdbd3e'};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${theme_1.colors.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${theme_1.colors.link.hover}
    }
  }

  ${Button_1.ButtonLink} {
    font-size: 1.6rem;
  }
`;
exports.CloseButton = (0, styled_components_1.default)(Button_1.Button) `
  color: ${({ severity }) => severity === 'error' ? theme_1.colors.palette.darkRed : '#976502'};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`;
const Banner = (props) => {
    const numWarnings = props.messages.length;
    return (0, jsx_runtime_1.jsxs)(exports.StyledBanner, { severity: props.severity, children: [(0, jsx_runtime_1.jsxs)("div", { children: [props.severity !== 'error' ? (0, jsx_runtime_1.jsx)(exports.Severity, { children: props.severity === 'note' ? 'Note: ' : 'Warning: ' }) : null, props.messages.map((message, i) => (0, jsx_runtime_1.jsx)(Html_1.Html, { block: numWarnings > 1, children: numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}` : message }, i))] }), props.onDismiss
                ? (0, jsx_runtime_1.jsx)(exports.CloseButton, { severity: props.severity, onClick: props.onDismiss, "aria-label": 'dismiss', children: (0, jsx_runtime_1.jsx)(DismissIcon_1.DismissIcon, { "aria-hidden": 'true', focusable: 'false' }) })
                : null] });
};
exports.Banner = Banner;

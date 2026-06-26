"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredIndicator = exports.HelpText = exports.FormLabelText = exports.FormInputWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
exports.FormInputWrapper = styled_components_1.default.label `
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`;
exports.FormLabelText = styled_components_1.default.span `
  white-space: nowrap;
  font-weight: bold;
  display: block;
`;
/*
 * help text
 */
const HelpTextElement = styled_components_1.default.p `
  font-style: italic;
  margin: 0;
  padding: 0;
`;
const HelpText = ({ value, ...props }) => value
    ? (0, jsx_runtime_1.jsx)(HelpTextElement, { ...props, children: value })
    : null;
exports.HelpText = HelpText;
const RequiredIndicator = (props) => props.show ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "*" }) : null;
exports.RequiredIndicator = RequiredIndicator;

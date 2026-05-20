"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancel = exports.Submit = exports.Buttons = exports.Messages = exports.FormSection = exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const fetch_1 = require("@openstax/ts-utils/fetch");
__exportStar(require("./inputs"), exports);
exports.Form = (0, styled_components_1.default)(({ children, ...props }) => (0, jsx_runtime_1.jsx)("form", { ...props, children: children })) `
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`;
exports.FormSection = styled_components_1.default.div `
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;
exports.Messages = (0, styled_components_1.default)(({ state }) => (0, fetch_1.stateHasError)(state)
    ? (0, jsx_runtime_1.jsx)("div", { children: state.error })
    : null) `
  font-weight: bold;
`;
exports.Buttons = (0, styled_components_1.default)((props) => (0, jsx_runtime_1.jsxs)("div", { className: props.className, children: ['onCancel' in props ? (0, jsx_runtime_1.jsx)(exports.Cancel, { onClick: props.onCancel, children: "Cancel" }) : null, (0, jsx_runtime_1.jsx)(exports.Submit, {})] })) `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`;
exports.Submit = (0, styled_components_1.default)(({ ...props }) => (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Submit", ...props })) `
`;
exports.Cancel = (0, styled_components_1.default)(({ ...props }) => (0, jsx_runtime_1.jsx)("button", { type: "button", ...props })) `
`;

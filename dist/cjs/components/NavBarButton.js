"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
const styled_components_1 = __importDefault(require("styled-components"));
exports.NavBarButton = (0, styled_components_1.default)(({ label, icon, className, "aria-label": ariaLabel, ...props }) => ((0, jsx_runtime_1.jsxs)(react_aria_components_1.Button, { className: className, "aria-label": ariaLabel, ...props, children: [icon &&
            (typeof icon === "string" ? ((0, jsx_runtime_1.jsx)("img", { "aria-hidden": "true", src: icon, alt: "" })) : (icon)), label ? (0, jsx_runtime_1.jsx)("span", { children: label }) : null] }))) `
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }

  img + *,
  svg + * {
    margin-left: 0.8rem;
  }
`;

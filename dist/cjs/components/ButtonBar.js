"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const Tabs_1 = require("./Tabs");
const Wrapper = styled_components_1.default.div `
  ${Tabs_1.tabListBaseCss}
  ${Tabs_1.buttonBarWrapperCss}

  > * {
    all: unset;
    ${Tabs_1.tabBaseCss}
    ${Tabs_1.buttonBarItemCss}
  }
`;
const ButtonBar = ({ size = "medium", children, ...restProps }) => {
    return ((0, jsx_runtime_1.jsx)(Wrapper, { size: size, ...restProps, children: children }));
};
exports.ButtonBar = ButtonBar;

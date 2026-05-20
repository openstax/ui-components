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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPanel = exports.Tab = exports.TabList = exports.Tabs = exports.buttonBarItemCss = exports.buttonBarWrapperCss = exports.tabBaseCss = exports.tabListBaseCss = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RAC = __importStar(require("react-aria-components"));
const theme_1 = require("../theme");
const styled_components_1 = __importStar(require("styled-components"));
const palette_1 = require("../../src/theme/palette");
exports.tabListBaseCss = `
  overflow-x: auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: row;
`;
exports.tabBaseCss = (0, styled_components_1.css) `
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-offset: -0.1rem; // Prevent overflow scroll from clipping outline
  white-space: nowrap;
  font-size: ${({ size }) => size === 'small' ? '1.6' : (size === 'large' ? '2.4' : '1.8')}rem;

  &:hover {
    cursor: pointer;
  }
`;
exports.buttonBarWrapperCss = `
  border: 0.1rem solid ${theme_1.colors.palette.pale};
  border-radius: 0.5rem;
`;
exports.buttonBarItemCss = (0, styled_components_1.css) `
  padding: 0 1.6rem;
  min-height: ${({ size }) => size === 'small' ? '2.8' : (size === 'large' ? '4.8' : '4.0')}rem;
  background: #fff;
  border-right: 0.1rem solid ${theme_1.colors.palette.pale};

  &:first-child {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-left: 0;
  }
  &:last-child {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    border-right: 0;
  }

  &[data-selected=true] {
    background: ${theme_1.colors.palette.neutralLight};
    box-shadow: inset 0 0 0 0.1rem ${theme_1.colors.palette.pale};
  }
  &:hover:not([data-selected=true]) {
    background: ${theme_1.colors.palette.neutralLighter};
  }
`;
const buttonBarCss = (0, styled_components_1.css) `
  [role="tablist"] {
    ${exports.buttonBarWrapperCss}
  }

  [role="tab"] {
    ${exports.buttonBarItemCss}
  }
`;
const tabsCss = (0, styled_components_1.css) `
  &[data-orientation="horizontal"] [role="tablist"] {
    border-bottom: 0.1rem solid ${theme_1.colors.palette.pale};
  }

  [role="tab"] {
    padding: 0 1.6rem;
    height: ${({ size }) => size === 'small' ? '2.9' : '4.8'}rem;
    border-bottom: 0.4rem solid transparent;

    &[data-selected=true], &:hover {
      border-color: ${palette_1.palette.darkGreen};
    }
  }
`;
const StyledTabs = (0, styled_components_1.default)(RAC.Tabs) `
  [role="tablist"] {
    ${exports.tabListBaseCss}
  }

  [role="tab"] {
    ${exports.tabBaseCss}
  }

  ${(props) => props.variant === "button-bar" ? buttonBarCss : tabsCss}
`;
const Tabs = ({ variant, size = "medium", className, children, ...restProps }) => {
    return ((0, jsx_runtime_1.jsx)(StyledTabs, { variant: variant, size: size, className: className, ...restProps, children: children }));
};
exports.Tabs = Tabs;
var react_aria_components_1 = require("react-aria-components");
Object.defineProperty(exports, "TabList", { enumerable: true, get: function () { return react_aria_components_1.TabList; } });
Object.defineProperty(exports, "Tab", { enumerable: true, get: function () { return react_aria_components_1.Tab; } });
Object.defineProperty(exports, "TabPanel", { enumerable: true, get: function () { return react_aria_components_1.TabPanel; } });

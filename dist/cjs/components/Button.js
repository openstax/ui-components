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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonLink = exports.PlainButton = exports.linkStyle = exports.LinkButton = exports.Button = exports.buttonCss = exports.applyButtonVariantStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = __importDefault(require("../theme"));
const buttons_1 = require("../theme/buttons");
Object.defineProperty(exports, "applyButtonVariantStyles", { enumerable: true, get: function () { return buttons_1.applyButtonVariantStyles; } });
exports.buttonCss = (0, styled_components_1.css) `
  ${props => (0, buttons_1.applyButtonVariantStyles)(props.variant || 'primary')}

  font-size: 1.6rem;
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  & + & {
    margin-left: 1.6rem;
  }
`;
exports.Button = (0, styled_components_1.default)((props) => {
    const { disabled, isWaiting, waitingText, children, variant, ...otherProps } = props;
    return (0, jsx_runtime_1.jsx)("button", { ...otherProps, disabled: isWaiting || disabled, children: (isWaiting && waitingText) || children });
}) `
  ${exports.buttonCss}
`;
exports.LinkButton = (0, styled_components_1.default)(({ variant, ...props }) => (0, jsx_runtime_1.jsx)("a", { ...props, children: props.children })) `
  ${exports.buttonCss}
`;
exports.linkStyle = (0, styled_components_1.css) `
  color: ${theme_1.default.colors.link.color};
  cursor: pointer;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    color: ${theme_1.default.colors.link.hover};
  }
`;
exports.PlainButton = styled_components_1.default.button `
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  background: none;
`;
// tslint:disable-next-line:variable-name
exports.ButtonLink = (0, styled_components_1.default)(exports.PlainButton) `
  ${exports.linkStyle}
`;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = exports.DropdownMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
Object.defineProperty(exports, "DropdownMenuItem", { enumerable: true, get: function () { return react_aria_components_1.MenuItem; } });
const styled_components_1 = __importDefault(require("styled-components"));
const buttons_1 = require("../theme/buttons");
const palette_1 = require("../theme/palette");
const StyledButton = (0, styled_components_1.default)(react_aria_components_1.Button) `
  ${(props) => (0, buttons_1.applyButtonVariantStyles)(props.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  position: relative;
  justify-content: center;
  line-height: 2rem;
  min-height: 2.5rem;
  padding: 0 1.5rem 0 0.5rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  ${(props) => props.width ? `width: ${props.width}` : null}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.4;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  :after {
    background: ${(props) => props.variant === 'light' ? palette_1.palette.black : palette_1.palette.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    position: absolute;
    height: 0.5rem;
    margin-top: -0.25rem;
    right: 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`;
const StyledMenu = (0, styled_components_1.default)(react_aria_components_1.Menu) `
  margin-top: -0.6rem;
  background-color: ${palette_1.palette.white};
  border: 0.1rem solid ${palette_1.palette.pale};
  padding: 0.3rem 0;
  cursor: pointer;
  color: ${palette_1.palette.black};

  [role="menuitem"] {
    font-size: 1.6rem;
    min-height: 2.5rem;
    line-height: 2rem;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background-color: ${palette_1.palette.pale};
    }
  }
`;
const DropdownMenu = ({ text, children, variant, width, disabled, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(react_aria_components_1.MenuTrigger, { ...props, children: [(0, jsx_runtime_1.jsx)(StyledButton, { variant: variant, width: width, isDisabled: disabled, children: text }), (0, jsx_runtime_1.jsx)(react_aria_components_1.Popover, { children: (0, jsx_runtime_1.jsx)(StyledMenu, { ...props, children: children }) })] }));
};
exports.DropdownMenu = DropdownMenu;

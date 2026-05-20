"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarMenuButton = exports.NavBarPopoverButton = exports.NavBarPopover = exports.PopoverContainer = exports.NavBarMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../../src/theme");
const NavBarButton_1 = require("./NavBarButton");
exports.NavBarMenuItem = (0, styled_components_1.default)(react_aria_components_1.MenuItem) ``;
exports.PopoverContainer = styled_components_1.default.div `
  padding: 1.6rem;
`;
exports.NavBarPopover = (0, styled_components_1.default)(react_aria_components_1.Popover) `
  margin-top: -1rem;
  border-top: 0.4rem solid ${theme_1.colors.palette.darkGreen};
  box-shadow: 0 0.4rem 0.4rem 0 #00000033;
  background: #fff;

  ${exports.NavBarMenuItem} {
    font-size: 1.6rem;
    min-height: 4rem;
    padding: 0 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover,
    &[data-hovered],
    &[data-focused] {
      background: ${theme_1.colors.palette.neutralLighter};
    }

    &:focus-visible {
      ${theme_1.defaultFocusOutline}
      outline-offset: -0.2rem;
    }

    &:active {
      font-weight: bold;
    }

    &:not(:last-child) {
      border-bottom: 0.1rem solid ${theme_1.colors.palette.neutralBright};
    }
  }
`;
const NavBarBaseButton = ({ isMenu, children, popoverProps, ...props }) => {
    const Trigger = isMenu ? react_aria_components_1.MenuTrigger : react_aria_components_1.DialogTrigger;
    const Content = isMenu ? react_aria_components_1.Menu : react_aria_components_1.Dialog;
    return ((0, jsx_runtime_1.jsxs)(Trigger, { children: [(0, jsx_runtime_1.jsx)(NavBarButton_1.NavBarButton, { ...props }), (0, jsx_runtime_1.jsx)(exports.NavBarPopover, { ...popoverProps, children: (0, jsx_runtime_1.jsx)(Content, { children: children }) })] }));
};
const NavBarPopoverButton = (props) => ((0, jsx_runtime_1.jsx)(NavBarBaseButton, { ...props, isMenu: false }));
exports.NavBarPopoverButton = NavBarPopoverButton;
const NavBarMenuButton = (props) => ((0, jsx_runtime_1.jsx)(NavBarBaseButton, { ...props, isMenu: true }));
exports.NavBarMenuButton = NavBarMenuButton;

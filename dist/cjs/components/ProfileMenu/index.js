"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIcon = exports.ProfileMenu = exports.ProfileMenuItem = exports.ProfileMenuPopover = exports.ProfileMenuButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_aria_components_1 = require("react-aria-components");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../../theme");
const NavBarMenuButtons_1 = require("../NavBarMenuButtons");
const UserIcon_1 = require("./UserIcon");
exports.ProfileMenuButton = (0, styled_components_1.default)(react_aria_components_1.Button) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  line-height: 1.6rem;
  font-size: 1.4rem;
  color: ${theme_1.colors.palette.white};
  background-color: ${theme_1.colors.palette.darkTeal};
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  }

  &[data-focused],
  &[data-focus-visible] {
    ${theme_1.defaultFocusOutline}
    outline-offset: 0.2rem;
  }

  svg {
    width: 1.5rem;
  }
`;
exports.ProfileMenuPopover = (0, styled_components_1.default)(NavBarMenuButtons_1.NavBarPopover) `
  min-width: 10rem;
  margin-top: 0.4rem;
`;
exports.ProfileMenuItem = (0, styled_components_1.default)(NavBarMenuButtons_1.NavBarMenuItem) `
  color: ${theme_1.colors.palette.neutralDarker};
  text-decoration: none;
`;
function getInitials(user) {
    var _a, _b;
    const first = ((_a = user === null || user === void 0 ? void 0 : user.firstName) === null || _a === void 0 ? void 0 : _a.charAt(0)) || '';
    const last = ((_b = user === null || user === void 0 ? void 0 : user.lastName) === null || _b === void 0 ? void 0 : _b.charAt(0)) || '';
    if (!first && !last) {
        return null;
    }
    return (first + last).toUpperCase();
}
const ProfileMenu = ({ user, onAction, ariaLabel = 'Account actions', children, 'data-testid': testId, }) => {
    const displayInitials = getInitials(user);
    return ((0, jsx_runtime_1.jsxs)(react_aria_components_1.MenuTrigger, { children: [(0, jsx_runtime_1.jsx)(exports.ProfileMenuButton, { "aria-label": ariaLabel, "data-testid": testId, children: displayInitials || (0, jsx_runtime_1.jsx)(UserIcon_1.UserIcon, {}) }), (0, jsx_runtime_1.jsx)(exports.ProfileMenuPopover, { placement: "bottom end", children: (0, jsx_runtime_1.jsx)(react_aria_components_1.Menu, { onAction: onAction, children: children }) })] }));
};
exports.ProfileMenu = ProfileMenu;
var UserIcon_2 = require("./UserIcon");
Object.defineProperty(exports, "UserIcon", { enumerable: true, get: function () { return UserIcon_2.UserIcon; } });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIcon = exports.ProfileMenu = exports.ProfileMenuItem = exports.ProfileMenuPopover = exports.ProfileMenuButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_aria_components_1 = require("react-aria-components");
const NavBarMenuButtons_1 = require("../NavBarMenuButtons");
const UserIcon_1 = require("./UserIcon");
require("./ProfileMenu.css");
require("../../theme/theme.css");
exports.ProfileMenuButton = react_1.default.forwardRef(({ className, ...props }, ref) => (
// style is deliberately not destructured: with the theme defaults moved into
// ProfileMenu.css there is nothing left to merge it with, so it passes straight through
// in ...props and react-aria handles both the object and render-callback forms.
(0, jsx_runtime_1.jsx)(react_aria_components_1.Button, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('profile-menu-button', resolved)), ...props })));
exports.ProfileMenuButton.displayName = 'ProfileMenuButton';
exports.ProfileMenuPopover = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(NavBarMenuButtons_1.NavBarPopover, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('profile-menu-popover', resolved)), ...props })));
exports.ProfileMenuPopover.displayName = 'ProfileMenuPopover';
exports.ProfileMenuItem = react_1.default.forwardRef(({ className, ...props }, ref) => (
// style passes through in ...props — see the note on ProfileMenuButton above.
(0, jsx_runtime_1.jsx)(NavBarMenuButtons_1.NavBarMenuItem, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('profile-menu-item', resolved)), ...props })));
exports.ProfileMenuItem.displayName = 'ProfileMenuItem';
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
    return ((0, jsx_runtime_1.jsxs)(react_aria_components_1.MenuTrigger, { children: [(0, jsx_runtime_1.jsx)(exports.ProfileMenuButton, { "aria-label": ariaLabel, "data-testid": testId, children: displayInitials || (0, jsx_runtime_1.jsx)(UserIcon_1.UserIcon, {}) }), (0, jsx_runtime_1.jsx)(exports.ProfileMenuPopover, { placement: "bottom end", isNonModal: true, children: (0, jsx_runtime_1.jsx)(react_aria_components_1.Menu, { onAction: onAction, children: children }) })] }));
};
exports.ProfileMenu = ProfileMenu;
var UserIcon_2 = require("./UserIcon");
Object.defineProperty(exports, "UserIcon", { enumerable: true, get: function () { return UserIcon_2.UserIcon; } });

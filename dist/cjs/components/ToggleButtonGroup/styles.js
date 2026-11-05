"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledToggleButton = exports.StyledToggleButtonGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_aria_components_1 = require("react-aria-components");
const classnames_1 = __importDefault(require("classnames"));
require("./ToggleButtonGroup.css");
require("../../theme/theme.css");
// composeRenderProps normalises the string and render-callback forms of className so a
// caller-supplied callback is composed rather than dropped. Consumers wrap these with
// styled(), which supplies a plain string, so composing rather than replacing matters.
exports.StyledToggleButtonGroup = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(react_aria_components_1.ToggleButtonGroup, { ref: ref, ...props, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('toggle-button-group', resolved)) })));
exports.StyledToggleButtonGroup.displayName = 'StyledToggleButtonGroup';
exports.StyledToggleButton = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(react_aria_components_1.ToggleButton, { ref: ref, ...props, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)('toggle-button', resolved)) })));
exports.StyledToggleButton.displayName = 'StyledToggleButton';

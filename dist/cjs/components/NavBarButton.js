"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBarButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_aria_components_1 = require("react-aria-components");
const classnames_1 = __importDefault(require("classnames"));
require("./NavBarButton.css");
require("../theme/theme.css");
exports.NavBarButton = react_1.default.forwardRef(({ label, icon, className, "aria-label": ariaLabel, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(react_aria_components_1.Button, { ref: ref, className: (0, react_aria_components_1.composeRenderProps)(className, (resolved) => (0, classnames_1.default)("navbar-button", resolved)), "aria-label": ariaLabel, ...props, children: [icon &&
            (typeof icon === "string" ? ((0, jsx_runtime_1.jsx)("img", { "aria-hidden": "true", src: icon, alt: "" })) : (icon)), label ? (0, jsx_runtime_1.jsx)("span", { children: label }) : null] })));
exports.NavBarButton.displayName = "NavBarButton";

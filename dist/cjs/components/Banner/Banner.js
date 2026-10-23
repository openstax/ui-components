"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = exports.CloseButton = exports.StyledBanner = exports.Severity = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const DismissIcon_1 = require("../svgs/DismissIcon");
const Html_1 = require("../Html");
require("./Banner.css");
require("../../theme/theme.css");
exports.Severity = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("span", { ref: ref, ...props, className: (0, classnames_1.default)('banner-severity', className) })));
exports.Severity.displayName = 'Severity';
exports.StyledBanner = react_1.default.forwardRef(({ severity, className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, ...props, className: (0, classnames_1.default)('banner', `banner-${severity}`, className) })));
exports.StyledBanner.displayName = 'StyledBanner';
exports.CloseButton = react_1.default.forwardRef(({ severity, className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("button", { ref: ref, ...props, className: (0, classnames_1.default)('banner-close-button', `banner-${severity}`, className) })));
exports.CloseButton.displayName = 'CloseButton';
/**
 * A message box that does not announce itself. For a banner that appears or changes because of
 * something the user or the app did, such as a failed request, use `BannerRegion`.
 */
const Banner = (props) => {
    const numWarnings = props.messages.length;
    return (0, jsx_runtime_1.jsxs)(exports.StyledBanner, { severity: props.severity, children: [(0, jsx_runtime_1.jsxs)("div", { children: [props.severity !== 'error' ? (0, jsx_runtime_1.jsx)(exports.Severity, { children: props.severity === 'note' ? 'Note: ' : 'Warning: ' }) : null, props.messages.map((message, i) => (0, jsx_runtime_1.jsx)(Html_1.Html, { block: numWarnings > 1, children: numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}` : message }, i))] }), props.onDismiss
                ? (0, jsx_runtime_1.jsx)(exports.CloseButton, { severity: props.severity, onClick: props.onDismiss, "aria-label": 'dismiss', children: (0, jsx_runtime_1.jsx)(DismissIcon_1.DismissIcon, { "aria-hidden": 'true', focusable: 'false' }) })
                : null] });
};
exports.Banner = Banner;

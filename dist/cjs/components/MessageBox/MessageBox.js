"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = exports.BoxEventId = exports.BoxBody = exports.BoxHeading = exports.BoxWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./MessageBox.css");
require("../../theme/theme.css");
exports.BoxWrapper = react_1.default.forwardRef(({ margin, className, style, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, ...props, className: (0, classnames_1.default)('message-box', className), 
    // Only the margin is bound from JS, because only the margin varies at runtime. It is
    // left unset when the prop is absent so the stylesheet's `0 auto` default still wins.
    style: margin === undefined ? style : { '--message-box-margin': margin, ...style } })));
exports.BoxWrapper.displayName = 'BoxWrapper';
exports.BoxHeading = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h3", { ref: ref, ...props, className: (0, classnames_1.default)('message-box-heading', className) })));
exports.BoxHeading.displayName = 'BoxHeading';
exports.BoxBody = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, ...props, className: (0, classnames_1.default)('message-box-body', className) })));
exports.BoxBody.displayName = 'BoxBody';
exports.BoxEventId = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, ...props, className: (0, classnames_1.default)('message-box-event-id', className) })));
exports.BoxEventId.displayName = 'BoxEventId';
const MessageBox = ({ children, customMargin, className, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(exports.BoxWrapper, { margin: customMargin, className: className, children: (0, jsx_runtime_1.jsx)(exports.BoxBody, { ...props, "data-testid": 'message-box', children: children }) }));
};
exports.MessageBox = MessageBox;

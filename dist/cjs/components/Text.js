"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = exports.H3 = exports.H2 = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./Text.css");
exports.H2 = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h2", { ref: ref, className: (0, classnames_1.default)('text-h2', className), ...props })));
exports.H2.displayName = 'H2';
exports.H3 = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h3", { ref: ref, className: (0, classnames_1.default)('text-h3', className), ...props })));
exports.H3.displayName = 'H3';
exports.Paragraph = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("p", { ref: ref, className: (0, classnames_1.default)('text-paragraph', className), ...props })));
exports.Paragraph.displayName = 'Paragraph';

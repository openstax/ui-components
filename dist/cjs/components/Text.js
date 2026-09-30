"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = exports.H3 = exports.H2 = exports.Heading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./Text.css");
/**
 * Renders a heading whose semantic level (the rendered `h1`–`h6` tag) is
 * independent of its visual style (`variant`). This lets consumers preserve a
 * correct document outline while reusing an existing heading style — e.g.
 * `<Heading level={2} variant="h3">` is an `<h2>` styled like an h3.
 */
exports.Heading = react_1.default.forwardRef(({ level, variant, className, ...props }, ref) => {
    const Tag = `h${level}`;
    // Default the visual style to match the semantic level.
    const resolvedVariant = variant !== null && variant !== void 0 ? variant : `h${level}`;
    return (0, jsx_runtime_1.jsx)(Tag, { ref: ref, className: (0, classnames_1.default)(`text-${resolvedVariant}`, className), ...props });
});
exports.Heading.displayName = 'Heading';
exports.H2 = react_1.default.forwardRef((props, ref) => (0, jsx_runtime_1.jsx)(exports.Heading, { level: 2, ref: ref, ...props }));
exports.H2.displayName = 'H2';
exports.H3 = react_1.default.forwardRef((props, ref) => (0, jsx_runtime_1.jsx)(exports.Heading, { level: 3, ref: ref, ...props }));
exports.H3.displayName = 'H3';
exports.Paragraph = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("p", { ref: ref, className: (0, classnames_1.default)('text-paragraph', className), ...props })));
exports.Paragraph.displayName = 'Paragraph';

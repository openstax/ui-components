"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeChevron = exports.TreeItemContent = exports.TreeItem = exports.Tree = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const RAC = __importStar(require("react-aria-components"));
const classnames_1 = __importDefault(require("classnames"));
require("./Tree.css");
require("../../theme/theme.css");
// composeRenderProps normalises the string and render-callback forms of className so a
// caller-supplied callback is composed rather than dropped.
//
// forwardRef erases the generic, so each wrapper is declared over `object` and then given
// back the generic signature react-aria-components itself exports for the component being
// wrapped. That keeps both the ref the styled() wrappers used to forward and the item-type
// inference callers rely on.
const TreeBase = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.Tree, { ref: ref, ...props, className: RAC.composeRenderProps(className, (resolved) => (0, classnames_1.default)('tree', resolved)) })));
TreeBase.displayName = 'Tree';
exports.Tree = TreeBase;
const TreeItemBase = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.TreeItem, { ref: ref, ...props, className: RAC.composeRenderProps(className, (resolved) => (0, classnames_1.default)('tree-item', resolved)) })));
TreeItemBase.displayName = 'TreeItem';
exports.TreeItem = TreeItemBase;
// TreeItemContent renders no DOM node, so it never had anything to style — the empty
// styled() wrapper it used to carry was a no-op.
var react_aria_components_1 = require("react-aria-components");
Object.defineProperty(exports, "TreeItemContent", { enumerable: true, get: function () { return react_aria_components_1.TreeItemContent; } });
// The caller's className lands on the button rather than the wrapper, matching the
// styled-components original. The button is always given a class, which is also what kept
// react-aria-components from applying its default `react-aria-Button` class.
const TreeChevron = (props) => ((0, jsx_runtime_1.jsx)("div", { className: "tree-chevron", children: (0, jsx_runtime_1.jsxs)(RAC.Button, { className: (0, classnames_1.default)('tree-chevron-button', props.className), type: "button", "aria-label": "expand/collapse", slot: "chevron", children: [(0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "m8.25 4.5 7.5 7.5-7.5 7.5" }) }), props.children] }) }));
exports.TreeChevron = TreeChevron;

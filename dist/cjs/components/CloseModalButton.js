"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseModalButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Times_1 = require("./svgs/Times");
require("./CloseModalButton.css");
require("../theme/theme.css");
exports.CloseModalButton = react_1.default.forwardRef(({ variant, className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("button", { ...props, ref: ref, type: 'button', "aria-label": 'Close', className: (0, classnames_1.default)('close-modal-button', variant !== 'default' && variant, className), children: (0, jsx_runtime_1.jsx)(Times_1.Times, { "aria-hidden": 'true', focusable: 'false' }) })));
exports.CloseModalButton.displayName = 'CloseModalButton';

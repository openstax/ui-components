"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const palette_1 = require("../theme/palette");
const classnames_1 = __importDefault(require("classnames"));
require("./ButtonBar.css");
const ButtonBar = ({ size = "medium", children, className, style: customStyle, ...restProps }) => {
    const buttonBarClass = (0, classnames_1.default)('button-bar', {
        'button-bar-small': size === 'small',
        'button-bar-medium': size === 'medium',
        'button-bar-large': size === 'large',
    }, className);
    const style = {
        '--button-bar-border-color': palette_1.palette.pale,
        '--button-bar-selected-bg': palette_1.palette.neutralLight,
        '--button-bar-hover-bg': palette_1.palette.neutralLighter,
        ...customStyle,
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: buttonBarClass, style: style, ...restProps, children: children }));
};
exports.ButtonBar = ButtonBar;

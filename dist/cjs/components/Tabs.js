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
exports.TabPanel = exports.Tab = exports.TabList = exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RAC = __importStar(require("react-aria-components"));
const classnames_1 = __importDefault(require("classnames"));
require("./Tabs.css");
require("../theme/theme.css");
const Tabs = ({ variant, size = "medium", className, style, ...restProps }) => {
    const variantClassName = (0, classnames_1.default)('tabs', {
        'tabs-button-bar': variant === 'button-bar',
        'tabs-small': size === 'small',
        'tabs-medium': size === 'medium',
        'tabs-large': size === 'large',
    });
    // className and style may each be a render callback, so resolve them against the
    // render props before merging. RAC folds its own defaultStyle in for us.
    return ((0, jsx_runtime_1.jsx)(RAC.Tabs, { ...restProps, className: (values) => (0, classnames_1.default)(variantClassName, typeof className === 'function' ? className(values) : className), style: (values) => (typeof style === 'function' ? style(values) : style) }));
};
exports.Tabs = Tabs;
var react_aria_components_1 = require("react-aria-components");
Object.defineProperty(exports, "TabList", { enumerable: true, get: function () { return react_aria_components_1.TabList; } });
Object.defineProperty(exports, "Tab", { enumerable: true, get: function () { return react_aria_components_1.Tab; } });
Object.defineProperty(exports, "TabPanel", { enumerable: true, get: function () { return react_aria_components_1.TabPanel; } });

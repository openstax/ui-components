"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_stately_1 = require("react-stately");
const react_aria_1 = require("react-aria");
const Tooltip_1 = require("./Tooltip");
const classnames_1 = __importDefault(require("classnames"));
require("./Radio.css");
require("../theme/theme.css");
const Radio = ({ children, disabled, labelAs, className, style, tooltipText, ...props }) => {
    const state = (0, react_stately_1.useTooltipTriggerState)({ delay: 0 });
    const ref = react_1.default.useRef(null);
    const { triggerProps, tooltipProps } = (0, react_aria_1.useTooltipTrigger)({ delay: 0 }, state, ref);
    // Label className
    const labelClassName = (0, classnames_1.default)('radio-label', { 'radio-label--disabled': disabled });
    // Input className
    const inputClassName = (0, classnames_1.default)('radio-input', { 'radio-input--disabled': disabled }, className);
    // Input style: only the values that vary at runtime. Static colours come from the
    // token defaults in Radio.css.
    const inputStyle = {
        '--radio-opacity': disabled ? '0.4' : '1',
        '--radio-checked-opacity': disabled ? '0' : '1',
        ...style
    };
    const labelElement = labelAs || 'label';
    const labelContent = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", className: inputClassName, style: inputStyle, disabled: disabled, ...props }), children] }));
    const labelWithTooltip = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [labelContent, state.isOpen && ((0, jsx_runtime_1.jsx)(Tooltip_1.CustomTooltip, { state: state, ...tooltipProps, placement: 'right', children: tooltipText }))] }));
    const tPropsWithUpdatedOnFocus = {
        ...triggerProps,
        onFocus: (e) => {
            var _a;
            (_a = triggerProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(triggerProps, e);
            state.open();
        },
    };
    return tooltipText
        ? (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { className: "radio-label-with-tooltip-wrapper", children: react_1.default.createElement(labelElement, {
                    ref,
                    className: labelClassName,
                    ...tPropsWithUpdatedOnFocus,
                }, labelWithTooltip) }) })
        : react_1.default.createElement(labelElement, { className: labelClassName }, labelContent);
};
exports.Radio = Radio;

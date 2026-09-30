"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredIndicator = exports.HelpText = exports.helpTextClassName = exports.FormLabelText = exports.formLabelTextClassName = exports.FormInputWrapper = exports.formInputWrapperClassName = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
require("./inputDecorations.css");
exports.formInputWrapperClassName = 'uncontrolled-form-input-wrapper';
exports.FormInputWrapper = react_1.default.forwardRef(({ className, as: Element = 'label', ...props }, ref) => (react_1.default.createElement(Element, { ref, className: [exports.formInputWrapperClassName, className].join(' ').trim(), ...props })));
exports.FormInputWrapper.displayName = 'FormInputWrapper';
exports.formLabelTextClassName = 'uncontrolled-form-label-text';
const FormLabelText = ({ className, as: Element = 'span', ...props }) => (react_1.default.createElement(Element, { className: [exports.formLabelTextClassName, className].join(' ').trim(), ...props }));
exports.FormLabelText = FormLabelText;
exports.helpTextClassName = 'uncontrolled-help-text';
const HelpText = ({ value, className, as: Element = 'p', ...props }) => value
    ? react_1.default.createElement(Element, { className: [exports.helpTextClassName, className].join(' ').trim(), ...props }, value)
    : null;
exports.HelpText = HelpText;
const RequiredIndicator = (props) => props.show ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "*" }) : null;
exports.RequiredIndicator = RequiredIndicator;

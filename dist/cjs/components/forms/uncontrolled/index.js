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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancel = exports.cancelButtonClassName = exports.Submit = exports.submitButtonClassName = exports.Buttons = exports.buttonsClassName = exports.Messages = exports.messagesClassName = exports.FormSection = exports.formSectionClassName = exports.Form = exports.formClassName = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fetch_1 = require("@openstax/ts-utils/fetch");
require("./formComponents.css");
__exportStar(require("./inputs"), exports);
exports.formClassName = 'uncontrolled-form';
const Form = ({ children, className, style, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("form", { className: [exports.formClassName, className].join(' ').trim(), style: style, ...props, children: children }));
};
exports.Form = Form;
exports.formSectionClassName = 'uncontrolled-form-section';
const FormSection = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: [exports.formSectionClassName, className].join(' ').trim(), ...props }));
exports.FormSection = FormSection;
exports.messagesClassName = 'uncontrolled-messages';
const Messages = ({ state, className }) => (0, fetch_1.stateHasError)(state)
    ? (0, jsx_runtime_1.jsx)("div", { className: [exports.messagesClassName, className].join(' ').trim(), children: state.error })
    : null;
exports.Messages = Messages;
exports.buttonsClassName = 'uncontrolled-buttons';
const Buttons = ({ className, ...props }) => ((0, jsx_runtime_1.jsxs)("div", { className: [exports.buttonsClassName, className].join(' ').trim(), children: ['onCancel' in props ? (0, jsx_runtime_1.jsx)(exports.Cancel, { onClick: props.onCancel, children: "Cancel" }) : null, (0, jsx_runtime_1.jsx)(exports.Submit, {})] }));
exports.Buttons = Buttons;
exports.submitButtonClassName = 'uncontrolled-submit-button';
const Submit = ({ className, ...props }) => (0, jsx_runtime_1.jsx)("input", { className: [exports.submitButtonClassName, className].join(' ').trim(), type: "submit", value: "Submit", ...props });
exports.Submit = Submit;
exports.cancelButtonClassName = 'uncontrolled-cancel-button';
const Cancel = ({ className, ...props }) => (0, jsx_runtime_1.jsx)("button", { className: [exports.cancelButtonClassName, className].join(' ').trim(), type: "button", ...props });
exports.Cancel = Cancel;

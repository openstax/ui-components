"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyPortalToastContainer = exports.ToastContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BodyPortal_1 = require("./BodyPortal");
const Toast_1 = require("./Toast");
const classnames_1 = __importDefault(require("classnames"));
require("./ToastContainer.css");
require("../theme/theme.css");
const makeToasts = (toasts, inline, onDismissToast) => (toasts.map((toast, index) => (0, jsx_runtime_1.jsx)(Toast_1.Toast, { onDismiss: onDismissToast, inline: inline, ...toast, children: toast.message }, `toast-${index}`)));
const ToastContainer = ({ toasts, onDismissToast, inline = false, className }) => {
    const containerClass = (0, classnames_1.default)('toast-container', {
        'toast-container-inline': inline,
    }, className);
    return ((0, jsx_runtime_1.jsx)("div", { className: containerClass, "aria-live": 'polite', children: makeToasts(toasts, inline, onDismissToast) }));
};
exports.ToastContainer = ToastContainer;
const BodyPortalToastContainer = ({ toasts, onDismissToast, inline = false, className }) => {
    const containerClass = (0, classnames_1.default)('toast-container', {
        'toast-container-inline': inline,
    }, className);
    return ((0, jsx_runtime_1.jsx)(BodyPortal_1.BodyPortal, { className: containerClass, "aria-live": 'polite', slot: 'toast', children: makeToasts(toasts, inline, onDismissToast) }));
};
exports.BodyPortalToastContainer = BodyPortalToastContainer;

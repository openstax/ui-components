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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyPortalToastContainer = exports.ToastContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const BodyPortal_1 = require("./BodyPortal");
const Toast_1 = require("./Toast");
const theme_1 = require("../theme");
const makeStyledToastContainer = (func) => func `
  ${(props) => !props.inline && (0, styled_components_1.css) `
    position: fixed;
    right: 2rem;
  `}
  z-index: ${theme_1.zIndex.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`;
const StyledToastContainer = makeStyledToastContainer(styled_components_1.default.div);
const StyledBodyPortalToastContainer = makeStyledToastContainer((0, styled_components_1.default)(BodyPortal_1.BodyPortal));
const makeToasts = (toasts, inline, onDismissToast) => (toasts.map((toast, index) => (0, jsx_runtime_1.jsx)(Toast_1.Toast, { onDismiss: onDismissToast, inline: inline, ...toast, children: toast.message }, `toast-${index}`)));
const ToastContainer = ({ toasts, onDismissToast, inline = false, className }) => ((0, jsx_runtime_1.jsx)(StyledToastContainer, { inline: inline, "aria-live": 'polite', className: className, children: makeToasts(toasts, inline, onDismissToast) }));
exports.ToastContainer = ToastContainer;
const BodyPortalToastContainer = ({ toasts, onDismissToast, inline = false, className }) => ((0, jsx_runtime_1.jsx)(StyledBodyPortalToastContainer, { inline: inline, "aria-live": 'polite', slot: 'toast', className: className, children: makeToasts(toasts, inline, onDismissToast) }));
exports.BodyPortalToastContainer = BodyPortalToastContainer;

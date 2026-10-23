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
exports.Overlay = exports.OverlayBody = exports.OverlayWrapper = exports.OverlayCloseButton = exports.OverlayMask = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const CloseModalButton_1 = require("./CloseModalButton");
const Modal_1 = require("./Modal");
const RAC = __importStar(require("react-aria-components"));
const react_1 = __importDefault(require("react"));
require("./Overlay.css");
require("../theme/theme.css");
exports.OverlayMask = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(Modal_1.Mask, { ref: ref, className: RAC.composeRenderProps(className, (resolved) => (0, classnames_1.default)('overlay-mask', resolved)), ...props })));
exports.OverlayMask.displayName = 'OverlayMask';
exports.OverlayCloseButton = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(CloseModalButton_1.CloseModalButton, { ref: ref, className: (0, classnames_1.default)('overlay-close-button', className), ...props })));
exports.OverlayCloseButton.displayName = 'OverlayCloseButton';
exports.OverlayWrapper = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(Modal_1.ModalWrapper, { ref: ref, className: RAC.composeRenderProps(className, (resolved) => (0, classnames_1.default)('overlay-wrapper', resolved)), ...props })));
exports.OverlayWrapper.displayName = 'OverlayWrapper';
exports.OverlayBody = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.Dialog, { ref: ref, className: (0, classnames_1.default)('overlay-body', className), ...props })));
exports.OverlayBody.displayName = 'OverlayBody';
const Overlay = ({ className, onClose, children, show, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, 'aria-details': ariaDetails, ...props }) => {
    if (!show) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.OverlayMask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onClose()), ...props, children: (0, jsx_runtime_1.jsxs)(exports.OverlayWrapper, { defaultOpen: true, children: [(0, jsx_runtime_1.jsx)(exports.OverlayCloseButton, { onClick: onClose, variant: 'inverted-circle' }), (0, jsx_runtime_1.jsx)(exports.OverlayBody, { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, "aria-details": ariaDetails, children: children })] }) }));
};
exports.Overlay = Overlay;

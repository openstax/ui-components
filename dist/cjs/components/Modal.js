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
exports.Modal = exports.ModalFooter = exports.ModalWrapper = exports.Mask = exports.ModalBody = exports.ModalBodyHeading = exports.ModalCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const CloseModalButton_1 = require("./CloseModalButton");
const RAC = __importStar(require("react-aria-components"));
const react_1 = __importDefault(require("react"));
require("./Modal.css");
require("../theme/theme.css");
exports.ModalCard = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.Dialog, { ref: ref, className: (0, classnames_1.default)('modal-card', className), ...props })));
exports.ModalCard.displayName = 'ModalCard';
const Header = react_1.default.forwardRef(({ className, variant, ...props }, ref) => ((0, jsx_runtime_1.jsx)("header", { ref: ref, className: (0, classnames_1.default)('modal-header', variant !== 'default' && variant, className), ...props })));
Header.displayName = 'Header';
const Heading = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.Heading, { ref: ref, className: (0, classnames_1.default)('modal-heading', className), ...props })));
Heading.displayName = 'Heading';
exports.ModalBodyHeading = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("h3", { ref: ref, className: (0, classnames_1.default)('modal-body-heading', className), ...props })));
exports.ModalBodyHeading.displayName = 'ModalBodyHeading';
exports.ModalBody = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)('modal-body', className), ...props })));
exports.ModalBody.displayName = 'ModalBody';
exports.Mask = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(RAC.ModalOverlay, { ref: ref, defaultOpen: true, className: RAC.composeRenderProps(className, (resolved) => (0, classnames_1.default)('mask', resolved)), ...props })));
exports.Mask.displayName = 'Mask';
exports.ModalWrapper = RAC.Modal;
const CardWrapper = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)('card-wrapper', className), ...props })));
CardWrapper.displayName = 'CardWrapper';
exports.ModalFooter = react_1.default.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.default)('modal-footer', className), ...props })));
exports.ModalFooter.displayName = 'ModalFooter';
const Modal = ({ className, heading, onModalClose, children, show, variant, ...props }) => {
    if (!show) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.Mask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onModalClose()), ...props, children: (0, jsx_runtime_1.jsx)(exports.ModalWrapper, { children: (0, jsx_runtime_1.jsx)(CardWrapper, { children: (0, jsx_runtime_1.jsxs)(exports.ModalCard, { children: [(0, jsx_runtime_1.jsxs)(Header, { variant: variant, children: [(0, jsx_runtime_1.jsx)(Heading, { slot: "title", children: heading }), (0, jsx_runtime_1.jsx)(CloseModalButton_1.CloseModalButton, { onClick: onModalClose, variant: variant })] }), children] }) }) }) }));
};
exports.Modal = Modal;

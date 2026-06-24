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
const styled_components_1 = __importDefault(require("styled-components"));
const CloseModalButton_1 = require("./CloseModalButton");
const Modal_1 = require("./Modal");
const RAC = __importStar(require("react-aria-components"));
exports.OverlayMask = (0, styled_components_1.default)(Modal_1.Mask) `
  background-color: rgba(0, 0, 0, 0.89);
`;
exports.OverlayCloseButton = (0, styled_components_1.default)(CloseModalButton_1.CloseModalButton) `
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`;
exports.OverlayWrapper = (0, styled_components_1.default)(Modal_1.ModalWrapper) `
  color: #fff;
`;
exports.OverlayBody = (0, styled_components_1.default)(RAC.Dialog) `
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`;
const Overlay = ({ className, onClose, children, show, ...props }) => {
    if (!show) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.OverlayMask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onClose()), ...props, children: (0, jsx_runtime_1.jsxs)(exports.OverlayWrapper, { defaultOpen: true, children: [(0, jsx_runtime_1.jsx)(exports.OverlayCloseButton, { onClick: onClose, variant: 'inverted-circle' }), (0, jsx_runtime_1.jsx)(exports.OverlayBody, { children: children })] }) }));
};
exports.Overlay = Overlay;

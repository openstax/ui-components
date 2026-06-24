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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.ModalFooter = exports.ModalWrapper = exports.Mask = exports.ModalBody = exports.ModalBodyHeading = exports.ModalCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const theme_1 = require("../theme");
const CloseModalButton_1 = require("./CloseModalButton");
const RAC = __importStar(require("react-aria-components"));
const modalPadding = 3;
exports.ModalCard = (0, styled_components_1.default)(RAC.Dialog) `
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${theme_1.colors.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
  outline: none;
`;
const Header = styled_components_1.default.header `
  display: flex;
  align-items: center;
  margin-bottom: ${modalPadding * 0.5}rem;
  padding: ${modalPadding * 0.5}rem ${modalPadding}rem;
  background: ${theme_1.colors.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${(props) => props.variant === 'error' && (0, styled_components_1.css) `
    background: ${theme_1.colors.palette.paleRed};
    color: ${theme_1.colors.palette.darkRed};
  `}
`;
const Heading = (0, styled_components_1.default)(RAC.Heading) `
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${modalPadding * 0.5}rem 0;
  font-size: 1.8rem;
`;
exports.ModalBodyHeading = styled_components_1.default.h3 `
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;
exports.ModalBody = styled_components_1.default.div `
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;
exports.Mask = (0, styled_components_1.default)((props) => ((0, jsx_runtime_1.jsx)(RAC.ModalOverlay, { defaultOpen: true, ...props }))) `
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: ${theme_1.zIndex.modals};
`;
exports.ModalWrapper = RAC.Modal;
const CardWrapper = styled_components_1.default.div `
  z-index: 1;
`;
exports.ModalFooter = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  padding: ${modalPadding}rem;

  button {
    min-width: 12rem;
  }
`;
const Modal = ({ className, heading, onModalClose, children, show, variant, ...props }) => {
    if (!show) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.Mask, { className: className, isDismissable: true, onOpenChange: (isOpen) => (!isOpen && onModalClose()), ...props, children: (0, jsx_runtime_1.jsx)(exports.ModalWrapper, { children: (0, jsx_runtime_1.jsx)(CardWrapper, { children: (0, jsx_runtime_1.jsxs)(exports.ModalCard, { children: [(0, jsx_runtime_1.jsxs)(Header, { variant: variant, children: [(0, jsx_runtime_1.jsx)(Heading, { slot: "title", children: heading }), (0, jsx_runtime_1.jsx)(CloseModalButton_1.CloseModalButton, { onClick: onModalClose, variant: variant })] }), children] }) }) }) }));
};
exports.Modal = Modal;

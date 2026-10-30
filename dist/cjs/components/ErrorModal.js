"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("./Button");
const Modal_1 = require("./Modal");
const Error_1 = require("./Error");
const ErrorModal = (props) => {
    const { children, heading, ...modalProps } = props;
    return (0, jsx_runtime_1.jsxs)(Modal_1.Modal, { ...modalProps, variant: 'error', heading: 'Error', children: [(0, jsx_runtime_1.jsx)(Error_1.Error, { heading: heading, children: children }), (0, jsx_runtime_1.jsx)(Modal_1.ModalFooter, { children: (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: props.onModalClose, children: "OK" }) })] });
};
exports.ErrorModal = ErrorModal;

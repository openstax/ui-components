import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
import { Modal, ModalFooter } from "./Modal";
import { Error } from "./Error";
export const ErrorModal = (props) => {
    const { children, heading, ...modalProps } = props;
    return _jsxs(Modal, { ...modalProps, variant: 'error', heading: 'Error', children: [_jsx(Error, { heading: heading, children: children }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: props.onModalClose, children: "OK" }) })] });
};

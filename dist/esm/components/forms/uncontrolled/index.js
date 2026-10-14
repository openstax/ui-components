import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { stateHasError } from "@openstax/ts-utils/fetch";
import './formComponents.css';
export * from './inputs';
export const formClassName = 'uncontrolled-form';
export const Form = ({ children, className, style, ...props }) => {
    return (_jsx("form", { className: [formClassName, className].join(' ').trim(), style: style, ...props, children: children }));
};
export const formSectionClassName = 'uncontrolled-form-section';
export const FormSection = ({ className, ...props }) => (_jsx("div", { className: [formSectionClassName, className].join(' ').trim(), ...props }));
export const messagesClassName = 'uncontrolled-messages';
export const Messages = ({ state, className }) => stateHasError(state)
    ? _jsx("div", { className: [messagesClassName, className].join(' ').trim(), children: state.error })
    : null;
export const buttonsClassName = 'uncontrolled-buttons';
export const Buttons = ({ className, ...props }) => (_jsxs("div", { className: [buttonsClassName, className].join(' ').trim(), children: ['onCancel' in props ? _jsx(Cancel, { onClick: props.onCancel, children: "Cancel" }) : null, _jsx(Submit, {})] }));
export const submitButtonClassName = 'uncontrolled-submit-button';
export const Submit = ({ className, ...props }) => _jsx("input", { className: [submitButtonClassName, className].join(' ').trim(), type: "submit", value: "Submit", ...props });
export const cancelButtonClassName = 'uncontrolled-cancel-button';
export const Cancel = ({ className, ...props }) => _jsx("button", { className: [cancelButtonClassName, className].join(' ').trim(), type: "button", ...props });

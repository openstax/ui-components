import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './inputDecorations.css';
export const formInputWrapperClassName = 'uncontrolled-form-input-wrapper';
export const FormInputWrapper = React.forwardRef(({ className, as: Element = 'label', ...props }, ref) => (React.createElement(Element, { ref, className: [formInputWrapperClassName, className].join(' ').trim(), ...props })));
FormInputWrapper.displayName = 'FormInputWrapper';
export const formLabelTextClassName = 'uncontrolled-form-label-text';
export const FormLabelText = ({ className, as: Element = 'span', ...props }) => (React.createElement(Element, { className: [formLabelTextClassName, className].join(' ').trim(), ...props }));
export const helpTextClassName = 'uncontrolled-help-text';
export const HelpText = ({ value, className, as: Element = 'p', ...props }) => value
    ? React.createElement(Element, { className: [helpTextClassName, className].join(' ').trim(), ...props }, value)
    : null;
export const RequiredIndicator = (props) => props.show ? _jsx(_Fragment, { children: "*" }) : null;

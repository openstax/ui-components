import React from 'react';
import './inputDecorations.css';

export const formInputWrapperClassName = 'uncontrolled-form-input-wrapper';
export const FormInputWrapper = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'label'> & { as?: string }
>(({className, as: Element = 'label', ...props}, ref) => (
  React.createElement(Element, {ref, className: [formInputWrapperClassName, className].join(' ').trim(), ...props})
));
FormInputWrapper.displayName = 'FormInputWrapper';

export const formLabelTextClassName = 'uncontrolled-form-label-text';
export const FormLabelText = ({className, as: Element = 'span', ...props}: React.ComponentPropsWithoutRef<'span'> & { as?: string }) => (
  React.createElement(Element, {className: [formLabelTextClassName, className].join(' ').trim(), ...props})
);

export type InputProps = {
  label: string;
  help?: string | React.ReactNode;
};

/*
 * help text
 */
type HelpTextProps = React.ComponentPropsWithoutRef<'p'> & {
  value: string | undefined | React.ReactNode;
};
export const helpTextClassName = 'uncontrolled-help-text';
export const HelpText = ({value, className, as: Element = 'p', ...props}: HelpTextProps & { as?: string }) => value
  ? React.createElement(Element, {className: [helpTextClassName, className].join(' ').trim(), ...props}, value)
  : null;

export const RequiredIndicator = (props: {show: boolean | undefined}) => props.show ? <>*</> : null;

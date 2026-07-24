import React from 'react';
import classNames from 'classnames';
import './inputDecorations.css';

export const FormInputWrapper = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'label'> & { as?: string }
>(({className, as: Element = 'label', ...props}, ref) => (
  React.createElement(Element, {ref, className: classNames('uncontrolled-form-input-wrapper', className), ...props})
));
FormInputWrapper.displayName = 'FormInputWrapper';

export const FormLabelText = ({className, as: Element = 'span', ...props}: React.ComponentPropsWithoutRef<'span'> & { as?: string }) => (
  React.createElement(Element, {className: classNames('uncontrolled-form-label-text', className), ...props})
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
export const HelpText = ({value, className, as: Element = 'p', ...props}: HelpTextProps & { as?: string }) => value
  ? React.createElement(Element, {className: classNames('uncontrolled-help-text', className), ...props}, value)
  : null;

export const RequiredIndicator = (props: {show: boolean | undefined}) => props.show ? <>*</> : null;

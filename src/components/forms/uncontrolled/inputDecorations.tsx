import React from 'react';
import classNames from 'classnames';
import './inputDecorations.css';

export const FormInputWrapper = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>(({className, ...props}, ref) => (
  <label ref={ref} className={classNames('uncontrolled-form-input-wrapper', className)} {...props} />
));
FormInputWrapper.displayName = 'FormInputWrapper';

export const FormLabelText = ({className, ...props}: React.ComponentPropsWithoutRef<'span'>) => (
  <span className={classNames('uncontrolled-form-label-text', className)} {...props} />
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
export const HelpText = ({value, className, ...props}: HelpTextProps) => value
  ? <p className={classNames('uncontrolled-help-text', className)} {...props}>{value}</p>
  : null;

export const RequiredIndicator = (props: {show: boolean | undefined}) => props.show ? <>*</> : null;

import React from 'react';
import './inputDecorations.css';

export const FormInputWrapper = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>(({className, ...props}, ref) => (
  <label ref={ref} className={`form-input-wrapper ${className || ''}`} {...props} />
));
FormInputWrapper.displayName = 'FormInputWrapper';

export const FormLabelText = ({className, ...props}: React.ComponentPropsWithoutRef<'span'>) => (
  <span className={`form-label-text ${className || ''}`} {...props} />
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
  ? <p className={`help-text ${className || ''}`} {...props}>{value}</p>
  : null;

export const RequiredIndicator = (props: {show: boolean | undefined}) => props.show ? <>*</> : null;

import React from 'react';
import { stateHasError, FetchState } from "@openstax/ts-utils/fetch";
import './formComponents.css';

export * from './inputs';

/*
 * form element
 */
type FormProps = React.ComponentPropsWithoutRef<'form'>;
export const formClassName = 'uncontrolled-form';
export const Form = ({children, className, style, ...props}: FormProps) => {
  return (
    <form className={[formClassName, className].join(' ').trim()} style={style} {...props}>
      {children}
    </form>
  );
};

export const formSectionClassName = 'uncontrolled-form-section';
export const FormSection = ({className, ...props}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={[formSectionClassName, className].join(' ').trim()} {...props} />
);

type MessagesProps = {
  state: FetchState<any, string>;
  className?: string;
};
export const messagesClassName = 'uncontrolled-messages';
export const Messages = ({state, className}: MessagesProps) => stateHasError(state)
  ? <div className={[messagesClassName, className].join(' ').trim()}>{state.error}</div>
  : null;

/*
 * form buttons
 */
type ButtonsProps = {
  state: FetchState<any, string>;
  onCancel?: () => void;
  className?: string;
};
export const buttonsClassName = 'uncontrolled-buttons';
export const Buttons = ({className, ...props}: ButtonsProps) => (
  <div className={[buttonsClassName, className].join(' ').trim()}>
    {'onCancel' in props ? <Cancel onClick={props.onCancel}>Cancel</Cancel> : null}
    <Submit />
  </div>
);

// submit button
type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export const submitButtonClassName = 'uncontrolled-submit-button';
export const Submit = ({className, ...props}: SubmitButtonProps) =>
  <input className={[submitButtonClassName, className].join(' ').trim()} type="submit" value="Submit" {...props} />;

// cancel button
type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const cancelButtonClassName = 'uncontrolled-cancel-button';
export const Cancel = ({className, ...props}: CancelButtonProps) =>
  <button className={[cancelButtonClassName, className].join(' ').trim()} type="button" {...props} />;

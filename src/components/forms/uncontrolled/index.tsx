import React from 'react';
import { stateHasError, FetchState } from "@openstax/ts-utils/fetch";
import './formComponents.css';

export * from './inputs';

/*
 * form element
 */
type FormProps = React.ComponentPropsWithoutRef<'form'>;
export const Form = ({children, className, style, ...props}: FormProps) => {
  return (
    <form className={`uncontrolled-form ${className || ''}`} style={style} {...props}>
      {children}
    </form>
  );
};

export const FormSection = ({className, ...props}: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={`uncontrolled-form-section ${className || ''}`} {...props} />
);

type MessagesProps = {
  state: FetchState<any, string>;
  className?: string;
};
export const Messages = ({state, className}: MessagesProps) => stateHasError(state)
  ? <div className={`uncontrolled-messages ${className || ''}`}>{state.error}</div>
  : null;

/*
 * form buttons
 */
type ButtonsProps = {
  state: FetchState<any, string>;
  onCancel?: () => void;
  className?: string;
};
export const Buttons = (props: ButtonsProps) => (
  <div className={`uncontrolled-buttons ${props.className || ''}`}>
    {'onCancel' in props ? <Cancel onClick={props.onCancel}>Cancel</Cancel> : null}
    <Submit />
  </div>
);

// submit button
type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export const Submit = ({...props}: SubmitButtonProps) =>
  <input type="submit" value="Submit" {...props} />;

// cancel button
type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const Cancel = ({...props}: CancelButtonProps) => <button type="button" {...props} />;

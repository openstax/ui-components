import React from 'react';
import styled from 'styled-components';
import { stateHasError, FetchState } from "@openstax/ts-utils/fetch.js";

export * from './inputs';

/*
 * form element
 */
const FormElement = styled.form`
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`;
type FormProps = React.ComponentPropsWithoutRef<'form'>;
export const Form = ({children, ...props}: FormProps) => <FormElement {...props}>
  {children}
</FormElement>;

export const FormSection = styled.div`
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const MessagesElement = styled.div`
  font-weight: bold;
`;
type MessagesProps = {
  state: FetchState<any, string>;
};
export const Messages = ({state}: MessagesProps) => stateHasError(state)
  ? <MessagesElement>{state.error}</MessagesElement>
  : null
;

/*
 * form buttons
 */
const ButtonsElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`;
type ButtonsProps = {
  state: FetchState<any, string>;
  onCancel?: () => void;
};
export const Buttons = (props: ButtonsProps) => <ButtonsElement>
  {'onCancel' in props ? <Cancel onClick={props.onCancel}>Cancel</Cancel> : null}
  <Submit />
</ButtonsElement>;

// submit button
const SubmitElement = styled.input`
`;
type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export const Submit = ({...props}: SubmitButtonProps) => <SubmitElement type="submit" value="Submit" {...props} />;

// cancel button
const CancelElement = styled.button`
`;
type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const Cancel = ({...props}: CancelButtonProps) => <CancelElement {...props} />;

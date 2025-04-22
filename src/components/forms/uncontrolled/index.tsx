import React from 'react';
import styled from 'styled-components';
import { stateHasError, FetchState } from "@openstax/ts-utils/fetch";

export * from './inputs';

/*
 * form element
 */
type FormProps = React.ComponentPropsWithoutRef<'form'>;
export const Form = styled(({children, ...props}: FormProps) => <form {...props}>
  {children}
</form>)`
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`;

export const FormSection = styled.div`
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

type MessagesProps = {
  state: FetchState<any, string>;
  className?: string;
};
export const Messages = styled(({state}: MessagesProps) => stateHasError(state)
  ? <div>{state.error}</div>
  : null
)`
  font-weight: bold;
`;

/*
 * form buttons
 */
type ButtonsProps = {
  state: FetchState<any, string>;
  onCancel?: () => void;
  className?: string;
};
export const Buttons = styled((props: ButtonsProps) => <div className={props.className}>
  {'onCancel' in props ? <Cancel onClick={props.onCancel}>Cancel</Cancel> : null}
  <Submit />
</div>)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`;

// submit button
type SubmitButtonProps = React.ComponentPropsWithoutRef<'input'>;
export const Submit = styled(({...props}: SubmitButtonProps) =>
  <input type="submit" value="Submit" {...props} />
)`
`;

// cancel button
type CancelButtonProps = React.ComponentPropsWithoutRef<'button'>;
export const Cancel = styled(({...props}: CancelButtonProps) => <button {...props} />)`
`;

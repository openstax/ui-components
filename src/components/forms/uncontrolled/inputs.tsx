import React from 'react';
import styled from 'styled-components';

export * from './inputTypes';

export const FormInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`;

export const FormLabelText = styled.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`;

export type InputProps = {
  label: string;
  help?: string;
};

/*
 * help text
 */
const HelpTextElement = styled.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`;
type HelpTextProps = React.ComponentPropsWithoutRef<'p'> & {
  value: string | undefined;
};
export const HelpText = ({value, ...props}: HelpTextProps) => value
  ? <HelpTextElement {...props}>{value}</HelpTextElement>
  : null;

export const RequiredIndicator = (props: {show: boolean | undefined}) => props.show ? <>*</> : null;

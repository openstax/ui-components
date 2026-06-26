import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
export const FormInputWrapper = styled.label `
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`;
export const FormLabelText = styled.span `
  white-space: nowrap;
  font-weight: bold;
  display: block;
`;
/*
 * help text
 */
const HelpTextElement = styled.p `
  font-style: italic;
  margin: 0;
  padding: 0;
`;
export const HelpText = ({ value, ...props }) => value
    ? _jsx(HelpTextElement, { ...props, children: value })
    : null;
export const RequiredIndicator = (props) => props.show ? _jsx(_Fragment, { children: "*" }) : null;

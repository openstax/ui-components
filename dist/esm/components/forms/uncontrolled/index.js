import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { stateHasError } from "@openstax/ts-utils/fetch";
export * from './inputs';
export const Form = styled(({ children, ...props }) => _jsx("form", { ...props, children: children })) `
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`;
export const FormSection = styled.div `
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;
export const Messages = styled(({ state }) => stateHasError(state)
    ? _jsx("div", { children: state.error })
    : null) `
  font-weight: bold;
`;
export const Buttons = styled((props) => _jsxs("div", { className: props.className, children: ['onCancel' in props ? _jsx(Cancel, { onClick: props.onCancel, children: "Cancel" }) : null, _jsx(Submit, {})] })) `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`;
export const Submit = styled(({ ...props }) => _jsx("input", { type: "submit", value: "Submit", ...props })) `
`;
export const Cancel = styled(({ ...props }) => _jsx("button", { type: "button", ...props })) `
`;

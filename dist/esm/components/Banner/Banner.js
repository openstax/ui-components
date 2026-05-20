import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DismissIcon } from "../svgs/DismissIcon";
import { Html } from "../Html";
import styled from 'styled-components';
import { Button, ButtonLink } from '../Button';
import { colors } from '../../theme';
export const Severity = styled.span `
  font-weight: bold;
  text-transform: uppercase;
`;
export const StyledBanner = styled.div `
  position: relative;
  background: ${({ severity }) => severity === 'error' ? '#F8E8EA' : '#fff5e0'};
  color: ${({ severity }) => severity === 'error' ? colors.palette.darkRed : '#976502'};
  border: ${({ severity }) => severity === 'error' ? `1px solid ${colors.palette.lightRed}` : '1px solid #fdbd3e'};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${colors.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${colors.link.hover}
    }
  }

  ${ButtonLink} {
    font-size: 1.6rem;
  }
`;
export const CloseButton = styled(Button) `
  color: ${({ severity }) => severity === 'error' ? colors.palette.darkRed : '#976502'};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`;
export const Banner = (props) => {
    const numWarnings = props.messages.length;
    return _jsxs(StyledBanner, { severity: props.severity, children: [_jsxs("div", { children: [props.severity !== 'error' ? _jsx(Severity, { children: props.severity === 'note' ? 'Note: ' : 'Warning: ' }) : null, props.messages.map((message, i) => _jsx(Html, { block: numWarnings > 1, children: numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}` : message }, i))] }), props.onDismiss
                ? _jsx(CloseButton, { severity: props.severity, onClick: props.onDismiss, "aria-label": 'dismiss', children: _jsx(DismissIcon, { "aria-hidden": 'true', focusable: 'false' }) })
                : null] });
};

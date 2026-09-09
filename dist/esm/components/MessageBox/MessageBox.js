import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { colors } from "../../theme";
const modalPadding = 3;
export const BoxWrapper = styled.div `
  margin: ${props => { var _a; return (_a = props.margin) !== null && _a !== void 0 ? _a : '0 auto'; }};
  max-width: 90.2rem;
  border: 0.1rem solid ${colors.palette.pale};
`;
export const BoxHeading = styled.h3 `
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;
export const BoxBody = styled.div `
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;
export const BoxEventId = styled.div `
  font-size: 1.4rem;
  color: ${colors.palette.neutralMedium};
  margin-top: 1.6rem;
`;
export const MessageBox = ({ children, customMargin, ...props }) => {
    return (_jsx(BoxWrapper, { margin: customMargin, children: _jsx(BoxBody, { ...props, "data-testid": 'message-box', children: children }) }));
};

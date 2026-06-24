import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import { Times } from "./svgs/Times";
import { colors } from "../theme";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const CloseModalButton = styled(({ variant, ...props }) => (_jsx("button", { ...props, type: 'button', "aria-label": 'Close', children: _jsx(Times, { "aria-hidden": 'true', focusable: 'false' }) }))) `
  padding: 0;
  cursor: pointer;
  margin-right: 0;
  background: transparent;
  color: ${colors.palette.neutralMedium};
  height: 2.4rem;
  width: 2.4rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: ${colors.palette.neutralDark};
  }

  ${(props) => props.variant === 'error' && css `
    color: ${colors.palette.darkRed};
  `}

  ${(props) => props.variant === 'inverted-circle' && css `
    color: ${colors.palette.white};
    border: 0.1rem solid ${colors.palette.white};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover, &:focus {
      color: ${colors.palette.black};
      background-color: ${colors.palette.white};
      border-color: ${colors.palette.white};
    }
  `}
`;

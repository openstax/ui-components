import styled, { css } from "styled-components";
import { Times } from "./svgs/Times";
import { colors } from "../theme";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const CloseModalButton = styled(({variant, ...props}) => (
  <button {...props} type='button' aria-label='Close'>
    <Times aria-hidden='true' focusable='false' />
  </button>
))`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  background: transparent;
  color: ${colors.palette.neutralMedium};
  height: 2rem;
  width: 2rem;
  border: 0;

  :hover {
    color: ${colors.palette.neutralDark};
  }

  ${(props: { variant?: string }) => props.variant === 'error' && css`
    color: ${colors.palette.darkRed};
  `}

  ${(props: { variant?: string }) => props.variant === 'inverted-circle' && css`
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

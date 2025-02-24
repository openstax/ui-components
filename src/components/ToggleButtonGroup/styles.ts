import styled from "styled-components";
import { ToggleButtonGroup, ToggleButton } from "react-aria-components";
import { colors } from "../../theme";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  overflow-x: auto;
`;

export const StyledToggleButton = styled(ToggleButton)`
  all: unset;
  height: 3.6rem;
  padding: 0 0.8rem;
  background-color: ${colors.palette.white};
  border: solid 0.1rem ${colors.palette.pale};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${colors.palette.neutralLighter};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${colors.palette.black};
  }
`;

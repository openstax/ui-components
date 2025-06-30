import styled from "styled-components";
import { ToggleButtonGroup, ToggleButton } from "react-aria-components";
import { colors } from "../../theme";
import { tabListBaseCss } from "../Tabs";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  ${tabListBaseCss}
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
  white-space: nowrap;
  user-select: none;

  & + & {
    border-left: none;
  }

  &[data-selected] {
    background-color: ${colors.palette.neutralLighter};
  }

  &[data-disabled] {
    color: ${colors.palette.neutralLight};
  }

  &[data-focus-visible] {
    outline: none;
    box-shadow: inset 0 0 0 0.1rem ${colors.palette.black};
  }
`;

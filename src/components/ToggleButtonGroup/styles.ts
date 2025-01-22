import styled from "styled-components";
import { ToggleButtonGroup, ToggleButton } from "react-aria-components";
import { colors } from "../../theme";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    display: flex;
`;

export const StyledToggleButton = styled(ToggleButton)`
    min-width: 4.4rem;
    height: 3.6rem;
    padding: 0.8rem;
    background-color: ${colors.palette.white};
    border: solid 0.1rem ${colors.palette.pale};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;

    &[data-selected],
    &[data-focus-visible] {
        background-color: ${colors.palette.neutralLighter};
    }
`;
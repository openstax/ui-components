import styled from "styled-components";
import { colors } from "../../src/theme";

const modalPadding = 3;

export const BoxWrapper = styled.div<{
  margin?: string;
}>`
  margin: ${props => props.margin ?? '0 auto'};
  max-width: 90.2rem;
  border: 0.1rem solid ${colors.palette.pale};
`;

export const BoxHeading = styled.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;

export const BoxBody = styled.div`
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;

export const BoxEventId = styled.div`
  font-size: 1.4rem;
  color: ${colors.palette.neutralMedium};
  margin-top: 1.6rem;
`;
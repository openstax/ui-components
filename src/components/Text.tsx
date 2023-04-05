import React from 'react';
import styled from "styled-components";
import { palette } from "../theme/palette";

const StyledHeading = styled.h2`
  color: ${palette.neutralDarker}  
  size: 36px;
  font-weight: 700;
`;

const StyledText = styled.p`
  color: ${palette.neutralDarker};
  size: '18px';
`;

export const Text = ({ children }: React.PropsWithChildren<HTMLParagraphElement>) => <StyledText>
    {children}
  </StyledText>;

export const Heading = ({ children }: React.PropsWithChildren<HTMLHeadingElement>) => <StyledHeading>
    {children}
  </StyledHeading>;

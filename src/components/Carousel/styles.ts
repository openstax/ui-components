import styled from 'styled-components';
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";

export const CarouselContainer = styled.div<{customWidth?: string}>`
  position: relative;
  width: ${({customWidth}) =>  customWidth ? customWidth : '30rem'};
  margin: 0 4rem;
`;

export const CarouselOverflow = styled.div`
  position: inherit;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: auto;
  transition: transform 0.3s ease-in-out;
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  margin-right: 1rem;
`;

export const StyledLeftArrow = styled(LeftArrow)<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  left: -2rem;
  transform: translateY(-50%);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const StyledRightArrow = styled(RightArrow)<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  right: -2rem;
  transform: translateY(-50%);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
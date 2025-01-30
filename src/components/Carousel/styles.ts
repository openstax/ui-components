import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const CarouselContainer = styled.div`
  position: relative;
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

export const StyledArrow = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: transparent;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    border: 0.1rem solid ${palette.pale};
  }

  svg {
    position: relative;
    margin-top: 0.5rem;
  }

  &.left-arrow {
    left: -3rem;
  }

  &.right-arrow {
    right: -3rem;
  }
`;


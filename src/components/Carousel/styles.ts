import styled from 'styled-components';

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
  border: none;
  background: transparent;

  &:hover {
    box-shadow: 0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }

  svg {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    margin: 0;
  }

  &.left-arrow {
    left: -3rem;
  }

  &.right-arrow {
    right: -3rem;
  }
`;


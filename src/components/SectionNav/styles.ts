import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const SectionNavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
  max-width: fit-content;
`;

export const SectionNavWrapper = styled.div`
  display: flex;
  position: inherit;
  overflow-x: auto;
  width: auto;
  transition: transform 0.3s ease-in-out;
`;

export const SectionNavGroup = styled.div`
  flex: 0 0 auto;
  &:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const StyledArrow = styled.button<{ disabled: boolean }>`
  position: absolute;
  top: 50%;
  width: 2.8rem;
  height: 100%;
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


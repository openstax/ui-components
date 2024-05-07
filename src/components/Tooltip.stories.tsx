import styled from 'styled-components';
import { TooltipGroup } from './Tooltip';
import { Placement } from 'react-aria';

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`;

export const Default = () => <Wrapper>
  {(['right', 'top', 'bottom'] as Placement[]).map((placement) =>
    <Row><TooltipGroup placement={placement}>Tooltip content goes here.</TooltipGroup>{placement}</Row>
  )}
  </Wrapper>
;

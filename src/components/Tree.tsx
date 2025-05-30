import * as RAC from "react-aria-components";
import { colors } from "../theme";
import styled from "styled-components";

export const Tree = styled(RAC.Tree)`
  padding: 0.8rem;

  &[data-expanded] .react-aria-Button[slot=chevron] svg {
    rotate: 90deg;
  }
`;

// The use of styled-components destroy the link between the `TreeItem` and the rest of the tree
export const TreeItem = styled(RAC.TreeItem)`
  padding-left: calc((var(--tree-item-level) - 1) * 5.5rem);
  padding-bottom: 1rem;

  &[data-expanded] svg {
    rotate: 90deg;
  }
`;

export const TreeItemContent = styled(RAC.TreeItemContent)`
`;

const ChevronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0 1rem 3rem;
  font-weight: bold;
  gap: 0.8rem;

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 100%;

    svg {
      rotate: 0deg;
      transition: rotate 200ms;
      width: 1.4rem;
      height: 1.4rem;
      stroke: ${colors.palette.neutralDarker};
      stroke-width: 0.3rem;
    }
  }
`;

export const TreeChevron = styled(
  (props: React.PropsWithChildren<{
    className?: string,
  }>) => (
    <ChevronWrapper>
      <RAC.Button
        className={props.className}
        type="button"
        aria-label="expand/collapse"
        slot="chevron"
      >
        <svg viewBox="0 0 24 24">
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </RAC.Button>
      {props.children}
    </ChevronWrapper>
  ))`
`;

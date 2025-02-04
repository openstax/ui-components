import React from "react";
import {
  SectionNavContainer,
  SectionNavWrapper,
  SectionNavGroup,
  StyledArrow,
} from './styles';
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";

export interface SectionNavProps {
  children: React.ReactNode[];
  handlePrevArrow: () => void;
  handleNextArrow: () => void;
  isPrevArrowDisabled?: boolean;
  isNextArrowDisabled?: boolean;
}

export const SectionNav = (
  {
    children,
    handlePrevArrow,
    handleNextArrow,
    isPrevArrowDisabled = false,
    isNextArrowDisabled = false
  }: SectionNavProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <SectionNavContainer>
      <StyledArrow
        onClick={handlePrevArrow}
        className="left-arrow"
        aria-label="move to previous item"
        disabled={isPrevArrowDisabled}
      >
        <LeftArrow width={14} height={14} />
      </StyledArrow>
      <SectionNavWrapper ref={wrapperRef} >
        {children.map((child, index) =>
          <SectionNavGroup key={`section-group-${index + 1}`} >
            {child}
          </SectionNavGroup>
        )}
      </SectionNavWrapper>
      <StyledArrow
        onClick={handleNextArrow}
        className="right-arrow"
        aria-label="move to next item"
        disabled={isNextArrowDisabled} >
        <RightArrow width={14} height={14} />
      </StyledArrow>
    </SectionNavContainer>
  );
};
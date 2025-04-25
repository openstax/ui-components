import React from "react";
import {
  ButtonNavContainer,
  ButtonNavWrapper,
  ButtonNavGroup,
  StyledArrow,
} from './styles';
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";

export interface ButtonNavProps {
  children: React.ReactNode[];
  handlePrevArrow: () => void;
  handleNextArrow: () => void;
  isPrevArrowDisabled?: boolean;
  isNextArrowDisabled?: boolean;
}

export const ButtonNav = (
  {
    children,
    handlePrevArrow,
    handleNextArrow,
    isPrevArrowDisabled = false,
    isNextArrowDisabled = false
  }: ButtonNavProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  return (
    <ButtonNavContainer>
      <StyledArrow
        onClick={handlePrevArrow}
        className="left-arrow"
        aria-label="move to previous item"
        disabled={isPrevArrowDisabled}
      >
        <LeftArrow width={14} height={14} />
      </StyledArrow>
      <ButtonNavWrapper ref={wrapperRef} >
        {children.map((child, index) =>
          <ButtonNavGroup key={`section-group-${index + 1}`} >
            {child}
          </ButtonNavGroup>
        )}
      </ButtonNavWrapper>
      <StyledArrow
        onClick={handleNextArrow}
        className="right-arrow"
        aria-label="move to next item"
        disabled={isNextArrowDisabled} >
        <RightArrow width={14} height={14} />
      </StyledArrow>
    </ButtonNavContainer>
  );
};
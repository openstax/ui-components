import React from "react";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
import { palette } from "../../theme/palette";
import { CSSPropertiesWithVariables } from "../../types";
import "./ButtonNav.css";

export interface ButtonNavProps {
  children: React.ReactNode[];
  handlePrevArrow: () => void;
  handleNextArrow: () => void;
  isPrevArrowDisabled?: boolean;
  isNextArrowDisabled?: boolean;
}

// Bound on the container; the arrows are children, so they inherit it.
const containerStyle: CSSPropertiesWithVariables = {
  '--button-nav-arrow-hover-border-color': palette.pale,
};

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
    <div className="button-nav" style={containerStyle}>
      <button
        onClick={handlePrevArrow}
        className="button-nav-arrow left-arrow"
        aria-label="move to previous item"
        disabled={isPrevArrowDisabled}
      >
        <LeftArrow width={14} height={14} />
      </button>
      <div className="button-nav-wrapper" ref={wrapperRef} >
        {children.map((child, index) =>
          <div className="button-nav-group" key={`section-group-${index + 1}`} >
            {child}
          </div>
        )}
      </div>
      <button
        onClick={handleNextArrow}
        className="button-nav-arrow right-arrow"
        aria-label="move to next item"
        disabled={isNextArrowDisabled} >
        <RightArrow width={14} height={14} />
      </button>
    </div>
  );
};

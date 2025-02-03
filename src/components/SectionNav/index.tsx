import React from "react";
import {
    SectionNavContainer,
    SectionNavWrapper,
    SectionNavItem,
    StyledArrow,
} from './styles';
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";

export interface SectionNavProps {
    children: React.ReactNode;
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
                disabled={isPrevArrowDisabled}
            >
                <LeftArrow width={14} height={14} />
            </StyledArrow>
            <SectionNavWrapper ref={wrapperRef} >
                <SectionNavItem
                >
                    {children}
                </SectionNavItem>
            </SectionNavWrapper>
            <StyledArrow
                onClick={handleNextArrow}
                className="right-arrow"
                disabled={isNextArrowDisabled} >
                <RightArrow width={14} height={14} />
            </StyledArrow>
        </SectionNavContainer>

    );
};
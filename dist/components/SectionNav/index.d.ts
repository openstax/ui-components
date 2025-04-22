import React from "react";
export interface SectionNavProps {
    children: React.ReactNode[];
    handlePrevArrow: () => void;
    handleNextArrow: () => void;
    isPrevArrowDisabled?: boolean;
    isNextArrowDisabled?: boolean;
}
export declare const SectionNav: ({ children, handlePrevArrow, handleNextArrow, isPrevArrowDisabled, isNextArrowDisabled }: SectionNavProps) => import("react/jsx-runtime").JSX.Element;

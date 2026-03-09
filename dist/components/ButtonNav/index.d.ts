import React from "react";
export interface ButtonNavProps {
    children: React.ReactNode[];
    handlePrevArrow: () => void;
    handleNextArrow: () => void;
    isPrevArrowDisabled?: boolean;
    isNextArrowDisabled?: boolean;
}
export declare const ButtonNav: ({ children, handlePrevArrow, handleNextArrow, isPrevArrowDisabled, isNextArrowDisabled }: ButtonNavProps) => import("react/jsx-runtime").JSX.Element;

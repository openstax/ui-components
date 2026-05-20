import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ButtonNavContainer, ButtonNavWrapper, ButtonNavGroup, StyledArrow, } from './styles';
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
export const ButtonNav = ({ children, handlePrevArrow, handleNextArrow, isPrevArrowDisabled = false, isNextArrowDisabled = false }) => {
    const wrapperRef = React.useRef(null);
    return (_jsxs(ButtonNavContainer, { children: [_jsx(StyledArrow, { onClick: handlePrevArrow, className: "left-arrow", "aria-label": "move to previous item", disabled: isPrevArrowDisabled, children: _jsx(LeftArrow, { width: 14, height: 14 }) }), _jsx(ButtonNavWrapper, { ref: wrapperRef, children: children.map((child, index) => _jsx(ButtonNavGroup, { children: child }, `section-group-${index + 1}`)) }), _jsx(StyledArrow, { onClick: handleNextArrow, className: "right-arrow", "aria-label": "move to next item", disabled: isNextArrowDisabled, children: _jsx(RightArrow, { width: 14, height: 14 }) })] }));
};

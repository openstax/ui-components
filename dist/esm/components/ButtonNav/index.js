import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { LeftArrow } from "../svgs/LeftArrow";
import { RightArrow } from "../svgs/RightArrow";
import "./ButtonNav.css";
import "../../theme/theme.css";
export const ButtonNav = ({ children, handlePrevArrow, handleNextArrow, isPrevArrowDisabled = false, isNextArrowDisabled = false }) => {
    const wrapperRef = React.useRef(null);
    return (_jsxs("div", { className: "button-nav", children: [_jsx("button", { onClick: handlePrevArrow, className: "button-nav-arrow left-arrow", "aria-label": "move to previous item", disabled: isPrevArrowDisabled, children: _jsx(LeftArrow, { width: 14, height: 14 }) }), _jsx("div", { className: "button-nav-wrapper", ref: wrapperRef, children: children.map((child, index) => _jsx("div", { className: "button-nav-group", children: child }, `section-group-${index + 1}`)) }), _jsx("button", { onClick: handleNextArrow, className: "button-nav-arrow right-arrow", "aria-label": "move to next item", disabled: isNextArrowDisabled, children: _jsx(RightArrow, { width: 14, height: 14 }) })] }));
};

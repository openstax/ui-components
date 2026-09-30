"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonNav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const LeftArrow_1 = require("../svgs/LeftArrow");
const RightArrow_1 = require("../svgs/RightArrow");
const ButtonNav = ({ children, handlePrevArrow, handleNextArrow, isPrevArrowDisabled = false, isNextArrowDisabled = false }) => {
    const wrapperRef = react_1.default.useRef(null);
    return ((0, jsx_runtime_1.jsxs)(styles_1.ButtonNavContainer, { children: [(0, jsx_runtime_1.jsx)(styles_1.StyledArrow, { onClick: handlePrevArrow, className: "left-arrow", "aria-label": "move to previous item", disabled: isPrevArrowDisabled, children: (0, jsx_runtime_1.jsx)(LeftArrow_1.LeftArrow, { width: 14, height: 14 }) }), (0, jsx_runtime_1.jsx)(styles_1.ButtonNavWrapper, { ref: wrapperRef, children: children.map((child, index) => (0, jsx_runtime_1.jsx)(styles_1.ButtonNavGroup, { children: child }, `section-group-${index + 1}`)) }), (0, jsx_runtime_1.jsx)(styles_1.StyledArrow, { onClick: handleNextArrow, className: "right-arrow", "aria-label": "move to next item", disabled: isNextArrowDisabled, children: (0, jsx_runtime_1.jsx)(RightArrow_1.RightArrow, { width: 14, height: 14 }) })] }));
};
exports.ButtonNav = ButtonNav;

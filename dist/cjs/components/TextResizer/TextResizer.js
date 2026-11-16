"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextResizer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const TextSizeDecrease_1 = require("../svgs/TextSizeDecrease");
const TextSizeIncrease_1 = require("../svgs/TextSizeIncrease");
const constants_1 = require("./constants");
require("./TextResizer.css");
require("../../theme/theme.css");
const percent = (value) => { var _a; return `${Math.round(((_a = constants_1.textResizerValueMap.get(value)) !== null && _a !== void 0 ? _a : 1) * 100)}%`; };
/**
 * Controls for the text size: a slider with a button at each end. It reports the size as
 * a percentage and announces a change made with a button. It has no popover and no
 * heading, so a consumer puts it in its own.
 */
const TextResizer = ({ value, onChange, sliderLabel = "Text size", decreaseLabel = "Decrease text size", increaseLabel = "Increase text size", announcement = (size) => `Text size ${size}`, fillColor, className, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, }) => {
    const [announced, setAnnounced] = react_1.default.useState();
    react_1.default.useEffect(() => {
        setAnnounced((current) => (current && current.value !== value ? undefined : current));
    }, [value]);
    const change = (next) => {
        if (next < constants_1.textResizerMinValue || next > constants_1.textResizerMaxValue)
            return;
        onChange(next);
        setAnnounced({ value: next, text: announcement(percent(next)) });
    };
    const onSliderChange = (event) => {
        const next = parseInt(event.currentTarget.value, 10);
        if (!constants_1.textResizerValues.includes(next))
            return;
        onChange(next);
    };
    const style = {
        "--text-resizer-progress": String((value - constants_1.textResizerMinValue) / (constants_1.textResizerMaxValue - constants_1.textResizerMinValue)),
        ...(fillColor ? { "--text-resizer-fill": fillColor } : {}),
    };
    const isGroup = ariaLabel !== undefined || ariaLabelledby !== undefined;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)("ox-text-resizer", className), style: style, role: isGroup ? "group" : undefined, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, children: [(0, jsx_runtime_1.jsx)("button", { type: "button", className: "ox-text-resizer-button", "aria-label": decreaseLabel, "aria-disabled": value <= constants_1.textResizerMinValue || undefined, onClick: () => change(value - 1), children: (0, jsx_runtime_1.jsx)(TextSizeDecrease_1.TextSizeDecrease, {}) }), (0, jsx_runtime_1.jsx)("input", { type: "range", className: "ox-text-resizer-slider", step: "1", min: constants_1.textResizerMinValue, max: constants_1.textResizerMaxValue, value: value, onChange: onSliderChange, "aria-label": sliderLabel, "aria-valuetext": percent(value) }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "ox-text-resizer-button", "aria-label": increaseLabel, "aria-disabled": value >= constants_1.textResizerMaxValue || undefined, onClick: () => change(value + 1), children: (0, jsx_runtime_1.jsx)(TextSizeIncrease_1.TextSizeIncrease, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "ox-text-resizer-status", role: "status", children: (announced === null || announced === void 0 ? void 0 : announced.value) === value ? announced.text : "" })] }));
};
exports.TextResizer = TextResizer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTooltip = exports.TooltipGroup = exports.Tooltip = exports.StyledTrigger = exports.StyledTooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_aria_components_1 = require("react-aria-components");
const Info_1 = require("./svgs/Info");
const react_aria_1 = require("react-aria");
const classnames_1 = __importDefault(require("classnames"));
require("./Tooltip.css");
require("../theme/theme.css");
/**
 * @deprecated The styles now live in the `.ox-tooltip` class in Tooltip.css. Prefer `Tooltip`;
 * this remains so consumers that composed the old styled-component keep working.
 */
exports.StyledTooltip = react_1.default.forwardRef(({ className, style, ...props }, ref) => ((0, jsx_runtime_1.jsx)(react_aria_components_1.Tooltip, { ref: ref, className: (0, classnames_1.default)('ox-tooltip', className), style: style, ...props })));
exports.StyledTooltip.displayName = 'StyledTooltip';
/**
 * @deprecated The styles now live in the `.ox-tooltip-trigger` class in Tooltip.css. Prefer
 * `TooltipGroup`; this remains so consumers that composed the old styled-component keep working.
 */
exports.StyledTrigger = react_1.default.forwardRef(({ className, style, ...props }, ref) => ((0, jsx_runtime_1.jsx)(react_aria_components_1.Button, { ref: ref, className: (0, classnames_1.default)('ox-tooltip-trigger', className), style: style, ...props })));
exports.StyledTrigger.displayName = 'StyledTrigger';
const Tooltip = ({ children, placement, className, style, ...props }) => (0, jsx_runtime_1.jsxs)(exports.StyledTooltip, { ...props, placement: placement, className: className, style: style, children: [(0, jsx_runtime_1.jsx)(react_aria_components_1.OverlayArrow, { children: (0, jsx_runtime_1.jsx)("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0 L4 4 L8 0", stroke: "var(--tooltip-border-color, #ccc)", strokeWidth: "1" }) }) }), children] });
exports.Tooltip = Tooltip;
/**
 * An info icon that reveals a tooltip. The trigger is a button: pressing it toggles the tooltip.
 *
 * `isOpen`, `defaultOpen` and `onOpenChange` go to `TooltipTrigger`, not `Tooltip`. Giving
 * either prop to `Tooltip` makes react-aria build a second state the trigger cannot see, so
 * `aria-describedby` is never set and Escape stops dismissing it.
 *
 * react-aria closes the tooltip on `onPointerDown` and `onKeyDown`, before `onPress`. So
 * `onPress` closes it only for a press with neither, such as a screen reader click
 * (pointerType "virtual"), and the state at press start is recorded in `onPressStart`.
 */
const TooltipGroup = ({ icon, ariaLabel, isOpen, defaultOpen, onOpenChange, ...props }) => {
    const [uncontrolledOpen, setUncontrolledOpen] = react_1.default.useState(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false);
    const open = isOpen !== null && isOpen !== void 0 ? isOpen : uncontrolledOpen;
    const openAtPressStart = react_1.default.useRef(false);
    const setOpen = (next) => {
        setUncontrolledOpen(next);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(next);
    };
    return (0, jsx_runtime_1.jsxs)(react_aria_components_1.TooltipTrigger, { delay: 0, isOpen: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(exports.StyledTrigger, { "aria-label": ariaLabel || 'More information', "aria-expanded": open, onPressStart: () => { openAtPressStart.current = open; }, onPress: (e) => {
                    if (!openAtPressStart.current || e.pointerType === 'virtual')
                        setOpen(!openAtPressStart.current);
                }, children: icon
                    ? (0, jsx_runtime_1.jsx)("img", { src: icon, "aria-hidden": true, alt: '' })
                    : (0, jsx_runtime_1.jsx)(Info_1.Info, { "aria-hidden": true }) }), (0, jsx_runtime_1.jsx)(exports.Tooltip, { ...props })] });
};
exports.TooltipGroup = TooltipGroup;
const CustomTooltip = ({ state, ...props }) => {
    const { tooltipProps } = (0, react_aria_1.useTooltip)(props, state);
    const mergedProps = (0, react_aria_1.mergeProps)(props, tooltipProps, { className: 'ox-tooltip' });
    return ((0, jsx_runtime_1.jsxs)("div", { "data-placement": props.placement, ...mergedProps, children: [props.children, (0, jsx_runtime_1.jsx)(react_aria_components_1.OverlayArrow, { ...props, children: (0, jsx_runtime_1.jsx)("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0 L4 4 L8 0", stroke: "var(--tooltip-border-color, #ccc)", strokeWidth: "1" }) }) })] }));
};
exports.CustomTooltip = CustomTooltip;

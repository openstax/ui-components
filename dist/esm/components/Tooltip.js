import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipTrigger, } from 'react-aria-components';
import { Info } from './svgs/Info';
import { mergeProps, useTooltip } from 'react-aria';
import classNames from 'classnames';
import './Tooltip.css';
import '../theme/theme.css';
/**
 * @deprecated The styles now live in the `.tooltip` class in Tooltip.css. Prefer `Tooltip`;
 * this remains so consumers that composed the old styled-component keep working.
 */
export const StyledTooltip = React.forwardRef(({ className, style, ...props }, ref) => (_jsx(AriaTooltip, { ref: ref, className: classNames('tooltip', className), style: style, ...props })));
StyledTooltip.displayName = 'StyledTooltip';
/**
 * @deprecated The styles now live in the `.tooltip-trigger` class in Tooltip.css. Prefer
 * `TooltipGroup`; this remains so consumers that composed the old styled-component keep working.
 */
export const StyledTrigger = React.forwardRef(({ className, style, ...props }, ref) => (_jsx(Button, { ref: ref, className: classNames('tooltip-trigger', className), style: style, ...props })));
StyledTrigger.displayName = 'StyledTrigger';
export const Tooltip = ({ children, placement, className, style, ...props }) => _jsxs(StyledTooltip, { ...props, placement: placement, className: className, style: style, children: [_jsx(OverlayArrow, { children: _jsx("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: _jsx("path", { d: "M0 0 L4 4 L8 0", stroke: "var(--tooltip-border-color, #ccc)", strokeWidth: "1" }) }) }), children] });
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
export const TooltipGroup = ({ icon, ariaLabel, isOpen, defaultOpen, onOpenChange, ...props }) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false);
    const open = isOpen !== null && isOpen !== void 0 ? isOpen : uncontrolledOpen;
    const openAtPressStart = React.useRef(false);
    const setOpen = (next) => {
        setUncontrolledOpen(next);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(next);
    };
    return _jsxs(TooltipTrigger, { delay: 0, isOpen: open, onOpenChange: setOpen, children: [_jsx(StyledTrigger, { "aria-label": ariaLabel || 'More information', "aria-expanded": open, onPressStart: () => { openAtPressStart.current = open; }, onPress: (e) => {
                    if (!openAtPressStart.current || e.pointerType === 'virtual')
                        setOpen(!openAtPressStart.current);
                }, children: icon
                    ? _jsx("img", { src: icon, "aria-hidden": true, alt: '' })
                    : _jsx(Info, { "aria-hidden": true }) }), _jsx(Tooltip, { ...props })] });
};
export const CustomTooltip = ({ state, ...props }) => {
    const { tooltipProps } = useTooltip(props, state);
    const mergedProps = mergeProps(props, tooltipProps, { className: 'tooltip' });
    return (_jsxs("div", { "data-placement": props.placement, ...mergedProps, children: [props.children, _jsx(OverlayArrow, { ...props, children: _jsx("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: _jsx("path", { d: "M0 0 L4 4 L8 0", stroke: "var(--tooltip-border-color, #ccc)", strokeWidth: "1" }) }) })] }));
};

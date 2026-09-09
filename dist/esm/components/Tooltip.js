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
export const TooltipGroup = ({ icon, ariaLabel, ...props }) => _jsxs(TooltipTrigger, { delay: 0, children: [_jsx(StyledTrigger, { "aria-label": ariaLabel || 'More information', children: icon
                ? _jsx("img", { src: icon, "aria-hidden": true, alt: '' })
                : _jsx(Info, { "aria-hidden": true }) }), _jsx(Tooltip, { ...props })] });
export const CustomTooltip = ({ state, ...props }) => {
    const { tooltipProps } = useTooltip(props, state);
    const mergedProps = mergeProps(props, tooltipProps, { className: 'tooltip' });
    return (_jsxs("div", { "data-placement": props.placement, ...mergedProps, children: [props.children, _jsx(OverlayArrow, { ...props, children: _jsx("svg", { width: 8, height: 8, viewBox: "0 0 8 8", children: _jsx("path", { d: "M0 0 L4 4 L8 0", stroke: "var(--tooltip-border-color, #ccc)", strokeWidth: "1" }) }) })] }));
};

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipTrigger } from 'react-aria';
import { CustomTooltip } from './Tooltip';
import classNames from 'classnames';
import "./Radio.css";
import '../theme/theme.css';
export const Radio = ({ children, disabled, labelAs, className, style, tooltipText, ...props }) => {
    const state = useTooltipTriggerState({ delay: 0 });
    const ref = React.useRef(null);
    const { triggerProps, tooltipProps } = useTooltipTrigger({ delay: 0 }, state, ref);
    // Label className
    const labelClassName = classNames('radio-label', { 'radio-label--disabled': disabled });
    // Input className
    const inputClassName = classNames('radio-input', { 'radio-input--disabled': disabled }, className);
    // Input style: only the values that vary at runtime. Static colours come from the
    // token defaults in Radio.css.
    const inputStyle = {
        '--radio-opacity': disabled ? '0.4' : '1',
        '--radio-checked-opacity': disabled ? '0' : '1',
        ...style
    };
    const labelElement = labelAs || 'label';
    const labelContent = (_jsxs(_Fragment, { children: [_jsx("input", { type: "radio", className: inputClassName, style: inputStyle, disabled: disabled, ...props }), children] }));
    const labelWithTooltip = (_jsxs(_Fragment, { children: [labelContent, state.isOpen && (_jsx(CustomTooltip, { state: state, ...tooltipProps, placement: 'right', children: tooltipText }))] }));
    const tPropsWithUpdatedOnFocus = {
        ...triggerProps,
        onFocus: (e) => {
            var _a;
            (_a = triggerProps.onFocus) === null || _a === void 0 ? void 0 : _a.call(triggerProps, e);
            state.open();
        },
    };
    return tooltipText
        ? _jsx("div", { children: _jsx("div", { className: "radio-label-with-tooltip-wrapper", children: React.createElement(labelElement, {
                    ref,
                    className: labelClassName,
                    ...tPropsWithUpdatedOnFocus,
                }, labelWithTooltip) }) })
        : React.createElement(labelElement, { className: labelClassName }, labelContent);
};

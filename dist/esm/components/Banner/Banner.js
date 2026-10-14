import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { DismissIcon } from "../svgs/DismissIcon";
import { Html } from "../Html";
import './Banner.css';
import '../../theme/theme.css';
export const Severity = React.forwardRef(({ className, ...props }, ref) => (_jsx("span", { ref: ref, ...props, className: classNames('banner-severity', className) })));
Severity.displayName = 'Severity';
export const StyledBanner = React.forwardRef(({ severity, className, ...props }, ref) => (_jsx("div", { ref: ref, ...props, className: classNames('banner', `banner-${severity}`, className) })));
StyledBanner.displayName = 'StyledBanner';
export const CloseButton = React.forwardRef(({ severity, className, ...props }, ref) => (_jsx("button", { ref: ref, ...props, className: classNames('banner-close-button', `banner-${severity}`, className) })));
CloseButton.displayName = 'CloseButton';
/**
 * A message box that does not announce itself. For a banner that appears or changes because of
 * something the user or the app did, such as a failed request, use `BannerRegion`.
 */
export const Banner = (props) => {
    const numWarnings = props.messages.length;
    return _jsxs(StyledBanner, { severity: props.severity, children: [_jsxs("div", { children: [props.severity !== 'error' ? _jsx(Severity, { children: props.severity === 'note' ? 'Note: ' : 'Warning: ' }) : null, props.messages.map((message, i) => _jsx(Html, { block: numWarnings > 1, children: numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}` : message }, i))] }), props.onDismiss
                ? _jsx(CloseButton, { severity: props.severity, onClick: props.onDismiss, "aria-label": 'dismiss', children: _jsx(DismissIcon, { "aria-hidden": 'true', focusable: 'false' }) })
                : null] });
};

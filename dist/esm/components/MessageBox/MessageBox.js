import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import "./MessageBox.css";
import "../../theme/theme.css";
export const BoxWrapper = React.forwardRef(({ margin, className, style, ...props }, ref) => (_jsx("div", { ref: ref, ...props, className: classNames('message-box', className), 
    // Only the margin is bound from JS, because only the margin varies at runtime. It is
    // left unset when the prop is absent so the stylesheet's `0 auto` default still wins.
    style: margin === undefined ? style : { '--message-box-margin': margin, ...style } })));
BoxWrapper.displayName = 'BoxWrapper';
export const BoxHeading = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, ...props, className: classNames('message-box-heading', className) })));
BoxHeading.displayName = 'BoxHeading';
export const BoxBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, ...props, className: classNames('message-box-body', className) })));
BoxBody.displayName = 'BoxBody';
export const BoxEventId = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, ...props, className: classNames('message-box-event-id', className) })));
BoxEventId.displayName = 'BoxEventId';
export const MessageBox = ({ children, customMargin, ...props }) => {
    return (_jsx(BoxWrapper, { margin: customMargin, children: _jsx(BoxBody, { ...props, "data-testid": 'message-box', children: children }) }));
};

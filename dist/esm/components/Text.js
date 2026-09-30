import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import './Text.css';
/**
 * Renders a heading whose semantic level (the rendered `h1`–`h6` tag) is
 * independent of its visual style (`variant`). This lets consumers preserve a
 * correct document outline while reusing an existing heading style — e.g.
 * `<Heading level={2} variant="h3">` is an `<h2>` styled like an h3.
 */
export const Heading = React.forwardRef(({ level, variant, className, ...props }, ref) => {
    const Tag = `h${level}`;
    // Default the visual style to match the semantic level.
    const resolvedVariant = variant !== null && variant !== void 0 ? variant : `h${level}`;
    return _jsx(Tag, { ref: ref, className: classNames(`text-${resolvedVariant}`, className), ...props });
});
Heading.displayName = 'Heading';
export const H2 = React.forwardRef((props, ref) => _jsx(Heading, { level: 2, ref: ref, ...props }));
H2.displayName = 'H2';
export const H3 = React.forwardRef((props, ref) => _jsx(Heading, { level: 3, ref: ref, ...props }));
H3.displayName = 'H3';
export const Paragraph = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: classNames('text-paragraph', className), ...props })));
Paragraph.displayName = 'Paragraph';

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classNames from 'classnames';
import './Toast.css';
import '../theme/theme.css';
const ANIMATION_TIME_MS = 500;
const DISMISS_AFTER_MS_FLOOR = 1000;
export const Toast = ({ id, title, children, variant = 'neutral', inline = false, dismissAfterMs, onDismiss, }) => {
    const [show, setShow] = React.useState(true);
    if (dismissAfterMs) {
        dismissAfterMs = Math.max(dismissAfterMs, DISMISS_AFTER_MS_FLOOR);
    }
    React.useEffect(() => {
        if (!dismissAfterMs) {
            return;
        }
        const timeoutId = setTimeout(() => {
            setShow(false);
            if (onDismiss) {
                onDismiss(id);
            }
        }, dismissAfterMs);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (!show) {
        return null;
    }
    const toastClass = classNames('toast', {
        'toast-inline': inline,
        'toast-dismissable': dismissAfterMs,
    });
    const style = {
        '--toast-animation-duration': `${ANIMATION_TIME_MS}ms`,
        ...(dismissAfterMs ? { animationDelay: `${dismissAfterMs - ANIMATION_TIME_MS}ms` } : {}),
    };
    return (_jsx("div", { className: toastClass, style: style, children: _jsxs("div", { className: variant, children: [_jsx("div", { className: 'title', children: title }), _jsx("div", { className: 'body', children: children })] }) }));
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const palette_1 = require("../theme/palette");
const classnames_1 = __importDefault(require("classnames"));
require("./Toast.css");
const ANIMATION_TIME_MS = 500;
const DISMISS_AFTER_MS_FLOOR = 1000;
const Toast = ({ id, title, children, variant = 'neutral', inline = false, dismissAfterMs, onDismiss, }) => {
    const [show, setShow] = react_1.default.useState(true);
    if (dismissAfterMs) {
        dismissAfterMs = Math.max(dismissAfterMs, DISMISS_AFTER_MS_FLOOR);
    }
    react_1.default.useEffect(() => {
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
    const toastClass = (0, classnames_1.default)('toast', {
        'toast-inline': inline,
        'toast-dismissable': dismissAfterMs,
    });
    const style = {
        '--toast-animation-duration': `${ANIMATION_TIME_MS}ms`,
        '--toast-success-title-color': palette_1.palette.darkerGreen,
        '--toast-success-bg': palette_1.palette.paleGreen,
        '--toast-neutral-title-color': palette_1.palette.neutralDarker,
        '--toast-neutral-bg': palette_1.palette.neutralLighter,
        '--toast-failure-title-color': palette_1.palette.darkRed,
        '--toast-failure-bg': palette_1.palette.paleRed,
        '--toast-failure-icon-color': palette_1.palette.neutralDark,
        ...(dismissAfterMs ? { animationDelay: `${dismissAfterMs - ANIMATION_TIME_MS}ms` } : {}),
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: toastClass, style: style, children: (0, jsx_runtime_1.jsxs)("div", { className: variant, children: [(0, jsx_runtime_1.jsx)("div", { className: 'title', children: title }), (0, jsx_runtime_1.jsx)("div", { className: 'body', children: children })] }) }));
};
exports.Toast = Toast;

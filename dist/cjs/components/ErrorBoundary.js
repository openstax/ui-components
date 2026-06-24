"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Sentry = __importStar(require("@sentry/react"));
const react_1 = __importDefault(require("react"));
const Error_1 = require("./Error");
const contexts_1 = require("../contexts");
const utils_1 = require("../utils");
const Error = ({ children, ...props }) => (0, jsx_runtime_1.jsx)(Error_1.Error, { "data-testid": 'error-fallback', ...props, children: children });
const defaultErrorFallbacks = {
    'generic': (0, jsx_runtime_1.jsx)(Error, { "data-testid": 'error-fallback' }),
    'SessionExpiredError': (0, jsx_runtime_1.jsxs)(Error, { heading: 'Your session has expired', children: ["Please refresh your browser and try again. If this doesn't solve the problem, visit our ", (0, jsx_runtime_1.jsx)("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }),
    'UnauthorizedError': (0, jsx_runtime_1.jsxs)(Error, { heading: "Uh-oh, it seems you can't access this page.", children: ["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ", (0, jsx_runtime_1.jsx)("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] })
};
const defaultErrorLevels = {
    'SessionExpiredError': 'warning'
};
const ErrorBoundary = ({ children, renderFallback, fallback = defaultErrorFallbacks['generic'], sentryDsn, sentryInit, ...props }) => {
    const [error, setError] = react_1.default.useState(null);
    const errorFallbacks = { ...defaultErrorFallbacks, ...props.errorFallbacks };
    const errorLevels = { ...defaultErrorLevels, ...props.errorLevels };
    const typedFallback = (error === null || error === void 0 ? void 0 : error.type) ? errorFallbacks[error.type] : undefined;
    const initCalled = react_1.default.useRef(false);
    // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
    const renderElement = error && renderFallback ? (typedFallback || fallback) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    react_1.default.useEffect(() => {
        var _a, _b;
        if (!sentryDsn && !sentryInit) {
            return;
        }
        if (initCalled.current) {
            throw 'Sentry.init was already called';
        }
        initCalled.current = true;
        Sentry.init(sentryInit || {
            dsn: sentryDsn,
            release: (_a = window._OX_FRONTEND_CONFIG) === null || _a === void 0 ? void 0 : _a.releaseId,
            environment: window.location.hostname,
            initialScope: {
                user: { uuid: (_b = window._OX_USER_DATA) === null || _b === void 0 ? void 0 : _b.uuid },
            },
            integrations: [
                Sentry.browserTracingIntegration(),
                Sentry.extraErrorDataIntegration()
            ],
            tracesSampleRate: 0.1,
        });
    }, [sentryDsn, sentryInit]);
    react_1.default.useEffect(() => {
        var _a;
        if (initCalled.current && ((_a = window._OX_USER_DATA) === null || _a === void 0 ? void 0 : _a.uuid) !== props.userUuid) {
            Sentry.setUser({ uuid: props.userUuid });
        }
    }, [props.userUuid]);
    // There are two references to the render element here because the Sentry fallback (and
    // onError) are not used for unhandledrejection events. To support those events, we provide
    // setError in a context to reuse the same error state and render logic.
    return (0, jsx_runtime_1.jsx)(contexts_1.ErrorContext.Provider, { value: { error, setError }, children: (0, jsx_runtime_1.jsx)(Sentry.ErrorBoundary, { fallback: renderElement, onError: (error, componentStack, eventId) => {
                setError({
                    error,
                    // If the error is a custom error from ts-utils, use the custom type instead of 'Error'
                    type: (0, utils_1.getTypeFromError)(error),
                    componentStack,
                    eventId
                });
            }, beforeCapture: (scope, error) => {
                // We need to set the level here, before `setError` is called in `onError`
                // throw -> beforeCapture -> onError -> error captured -> setError -> etc.
                if (error) {
                    const type = (0, utils_1.getTypeFromError)(error);
                    const errorLevel = errorLevels[type];
                    if (errorLevel) {
                        scope.setLevel(errorLevel);
                    }
                }
            }, ...props, onReset: () => setError(null), children: renderElement }) });
};
exports.ErrorBoundary = ErrorBoundary;

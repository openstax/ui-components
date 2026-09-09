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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const ErrorDisplay = ({ children, ...props }) => (0, jsx_runtime_1.jsx)(Error_1.Error, { "data-testid": 'error-fallback', ...props, children: children });
const defaultErrorFallbacks = {
    'generic': (0, jsx_runtime_1.jsx)(ErrorDisplay, { "data-testid": 'error-fallback' }),
    'SessionExpiredError': (0, jsx_runtime_1.jsxs)(ErrorDisplay, { heading: 'Your session has expired', children: ["Please refresh your browser and try again. If this doesn't solve the problem, visit our ", (0, jsx_runtime_1.jsx)("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }),
    'UnauthorizedError': (0, jsx_runtime_1.jsxs)(ErrorDisplay, { heading: "Uh-oh, it seems you can't access this page.", children: ["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ", (0, jsx_runtime_1.jsx)("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] })
};
const defaultErrorLevels = {
    'SessionExpiredError': 'warning'
};
const ErrorBoundary = ({ children, includeDefaultHandlers = true, sentryDsn, sentryInit, ...props }) => {
    const parentContext = react_1.default.useContext(contexts_1.ErrorContext);
    const [error, setThisError] = react_1.default.useState(null);
    const errorFallbacks = react_1.default.useMemo(() => ({
        ...(includeDefaultHandlers ? defaultErrorFallbacks : {}),
        ...props.errorFallbacks
    }), [includeDefaultHandlers, props.errorFallbacks]);
    const errorLevels = react_1.default.useMemo(() => ({
        ...(includeDefaultHandlers ? defaultErrorLevels : {}),
        ...props.errorLevels
    }), [includeDefaultHandlers, props.errorLevels]);
    const typedFallback = (error === null || error === void 0 ? void 0 : error.type) ? errorFallbacks[error.type] : undefined;
    const initCalled = react_1.default.useRef(false);
    react_1.default.useEffect(() => {
        var _a, _b;
        if (!sentryDsn && !sentryInit) {
            return;
        }
        // init once; re-runs (StrictMode double-invoke, prop change) are a no-op
        // child boundaries do not re-setup
        if (initCalled.current || parentContext.initialized) {
            return;
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
    }, [sentryDsn, sentryInit, parentContext.initialized]);
    react_1.default.useEffect(() => {
        var _a;
        if (initCalled.current && ((_a = window._OX_USER_DATA) === null || _a === void 0 ? void 0 : _a.uuid) !== props.userUuid) {
            Sentry.setUser({ uuid: props.userUuid });
        }
    }, [props.userUuid]);
    const setError = react_1.default.useCallback((input, componentStack, isInline) => {
        if (input === null) {
            setThisError(null);
            if (parentContext.initialized) {
                parentContext.setError(null);
            }
            return;
        }
        const error = input instanceof Error ? input : new Error(String(input));
        const type = (0, utils_1.getTypeFromError)(error);
        if (type in errorFallbacks || !parentContext.initialized) {
            setThisError({
                error, type, componentStack, isInline,
                // the level goes on the scope because sentry's capture hint disallows
                // mixing scope fields with the mechanism below
                eventId: Sentry.withScope((scope) => {
                    var _a;
                    scope.setLevel((_a = errorLevels[type]) !== null && _a !== void 0 ? _a : 'error');
                    // captureReactException grafts the component stack onto the event as a
                    // synthetic cause error; Sentry.ErrorBoundary used to do this for us
                    return componentStack
                        ? Sentry.captureReactException(error, { componentStack }, {
                            mechanism: { handled: true, type: 'auto.function.react.error_boundary' }
                        })
                        : Sentry.captureException(error);
                })
            });
        }
        else {
            // isInline intentionally does not bubble; it only exists to skip a
            // RenderErrorCatcher whose subtree react is tearing down, and the parent's
            // catcher is intact because this boundary is the one that caught the error
            parentContext.setError(input, componentStack);
        }
    }, [errorFallbacks, errorLevels, parentContext]);
    const contextValue = react_1.default.useMemo(() => ({
        error,
        setError,
        initialized: true
    }), [error, setError]);
    const errorDisplay = typedFallback || defaultErrorFallbacks.generic;
    // ErrorBoundary is not an actual ErrorBoundary becuase writing class components
    // is too annoying, we delegate just the catching part to RenderErrorCatcher
    return (0, jsx_runtime_1.jsx)(contexts_1.ErrorContext.Provider, { value: contextValue, children: error && error.isInline
            ? errorDisplay
            : (0, jsx_runtime_1.jsx)(RenderErrorCatcher, { catch: setError, children: error ? errorDisplay : children }) });
};
exports.ErrorBoundary = ErrorBoundary;
// according to https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
// error boundaries cannot be functional components; this is the implementation from that doc
class RenderErrorCatcher extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        this.props.catch(error, info.componentStack, true);
    }
    render() {
        var _a;
        if (this.state.hasError) {
            // this is never used, except perhaps interstitially during state updates.
            // parent renders the typed fallback
            return null;
        }
        return (_a = this.props.children) !== null && _a !== void 0 ? _a : null;
    }
}

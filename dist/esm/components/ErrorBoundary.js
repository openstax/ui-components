import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent } from './Error';
import { ErrorContext } from '../contexts';
import { getTypeFromError } from '../utils';
const ErrorDisplay = ({ children, ...props }) => _jsx(ErrorComponent, { "data-testid": 'error-fallback', ...props, children: children });
const defaultErrorFallbacks = {
    'generic': _jsx(ErrorDisplay, { "data-testid": 'error-fallback' }),
    'SessionExpiredError': _jsxs(ErrorDisplay, { heading: 'Your session has expired', children: ["Please refresh your browser and try again. If this doesn't solve the problem, visit our ", _jsx("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }),
    'UnauthorizedError': _jsxs(ErrorDisplay, { heading: "Uh-oh, it seems you can't access this page.", children: ["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ", _jsx("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] })
};
const defaultErrorLevels = {
    'SessionExpiredError': 'warning'
};
export const ErrorBoundary = ({ children, includeDefaultHandlers = true, sentryDsn, sentryInit, ...props }) => {
    const parentContext = React.useContext(ErrorContext);
    const [error, setThisError] = React.useState(null);
    const errorFallbacks = React.useMemo(() => ({
        ...(includeDefaultHandlers ? defaultErrorFallbacks : {}),
        ...props.errorFallbacks
    }), [includeDefaultHandlers, props.errorFallbacks]);
    const errorLevels = React.useMemo(() => ({
        ...(includeDefaultHandlers ? defaultErrorLevels : {}),
        ...props.errorLevels
    }), [includeDefaultHandlers, props.errorLevels]);
    const typedFallback = (error === null || error === void 0 ? void 0 : error.type) ? errorFallbacks[error.type] : undefined;
    const initCalled = React.useRef(false);
    React.useEffect(() => {
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
    React.useEffect(() => {
        var _a;
        if (initCalled.current && ((_a = window._OX_USER_DATA) === null || _a === void 0 ? void 0 : _a.uuid) !== props.userUuid) {
            Sentry.setUser({ uuid: props.userUuid });
        }
    }, [props.userUuid]);
    const setError = React.useCallback((input, componentStack, isInline) => {
        if (input === null) {
            setThisError(null);
            if (parentContext.initialized) {
                parentContext.setError(null);
            }
            return;
        }
        const error = input instanceof Error ? input : new Error(String(input));
        const type = getTypeFromError(error);
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
    const contextValue = React.useMemo(() => ({
        error,
        setError,
        initialized: true
    }), [error, setError]);
    const errorDisplay = typedFallback || defaultErrorFallbacks.generic;
    // ErrorBoundary is not an actual ErrorBoundary becuase writing class components
    // is too annoying, we delegate just the catching part to RenderErrorCatcher
    return _jsx(ErrorContext.Provider, { value: contextValue, children: error && error.isInline
            ? errorDisplay
            : _jsx(RenderErrorCatcher, { catch: setError, children: error ? errorDisplay : children }) });
};
// according to https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
// error boundaries cannot be functional components; this is the implementation from that doc
class RenderErrorCatcher extends React.Component {
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

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent } from './Error';
import { ErrorContext } from '../contexts';
import { getTypeFromError } from '../utils';
const Error = ({ children, ...props }) => _jsx(ErrorComponent, { "data-testid": 'error-fallback', ...props, children: children });
const defaultErrorFallbacks = {
    'generic': _jsx(Error, { "data-testid": 'error-fallback' }),
    'SessionExpiredError': _jsxs(Error, { heading: 'Your session has expired', children: ["Please refresh your browser and try again. If this doesn't solve the problem, visit our ", _jsx("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }),
    'UnauthorizedError': _jsxs(Error, { heading: "Uh-oh, it seems you can't access this page.", children: ["You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser. If the issue persists, visit our ", _jsx("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] })
};
const defaultErrorLevels = {
    'SessionExpiredError': 'warning'
};
export const ErrorBoundary = ({ children, renderFallback, fallback = defaultErrorFallbacks['generic'], sentryDsn, sentryInit, ...props }) => {
    const [error, setError] = React.useState(null);
    const errorFallbacks = { ...defaultErrorFallbacks, ...props.errorFallbacks };
    const errorLevels = { ...defaultErrorLevels, ...props.errorLevels };
    const typedFallback = (error === null || error === void 0 ? void 0 : error.type) ? errorFallbacks[error.type] : undefined;
    const initCalled = React.useRef(false);
    // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
    const renderElement = error && renderFallback ? (typedFallback || fallback) : _jsx(_Fragment, { children: children });
    React.useEffect(() => {
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
    React.useEffect(() => {
        var _a;
        if (initCalled.current && ((_a = window._OX_USER_DATA) === null || _a === void 0 ? void 0 : _a.uuid) !== props.userUuid) {
            Sentry.setUser({ uuid: props.userUuid });
        }
    }, [props.userUuid]);
    // There are two references to the render element here because the Sentry fallback (and
    // onError) are not used for unhandledrejection events. To support those events, we provide
    // setError in a context to reuse the same error state and render logic.
    return _jsx(ErrorContext.Provider, { value: { error, setError }, children: _jsx(Sentry.ErrorBoundary, { fallback: renderElement, onError: (error, componentStack, eventId) => {
                setError({
                    // Sentry v8+ types this callback's error as `unknown`; a React error boundary
                    // always hands us a thrown Error here.
                    error: error,
                    // If the error is a custom error from ts-utils, use the custom type instead of 'Error'
                    type: getTypeFromError(error),
                    componentStack,
                    eventId
                });
            }, beforeCapture: (scope, error) => {
                // We need to set the level here, before `setError` is called in `onError`
                // throw -> beforeCapture -> onError -> error captured -> setError -> etc.
                if (error) {
                    const type = getTypeFromError(error);
                    const errorLevel = errorLevels[type];
                    if (errorLevel) {
                        scope.setLevel(errorLevel);
                    }
                }
            }, ...props, onReset: () => setError(null), children: renderElement }) });
};

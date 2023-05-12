import * as Sentry from '@sentry/react';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
export declare const defaultErrorFallbacks: {
    generic: JSX.Element;
    SessionExpiredError: JSX.Element;
};
export declare const ErrorBoundary: ({ children, renderFallback, fallback, catchUnhandledRejections, windowImpl, sentryDsn, sentryInit, errorFallbacks, ...props }: Sentry.ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    catchUnhandledRejections?: boolean | undefined;
    windowImpl?: Window | Pick<Window, "addEventListener" | "removeEventListener"> | undefined;
    sentryDsn?: string | undefined;
    sentryInit?: Sentry.BrowserOptions | undefined;
    errorFallbacks?: {
        [_: string]: JSX.Element;
    } | undefined;
}) => JSX.Element;

import * as Sentry from '@sentry/react';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
export declare const ErrorBoundary: ({ children, renderFallback, fallback, catchUnhandledRejections, windowImpl, sentryDsn, sentryInit, ...props }: Sentry.ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    catchUnhandledRejections?: boolean | undefined;
    windowImpl?: Window | Pick<Window, "addEventListener" | "removeEventListener"> | undefined;
    sentryDsn?: string | undefined;
    sentryInit?: Sentry.BrowserOptions | undefined;
}) => JSX.Element;

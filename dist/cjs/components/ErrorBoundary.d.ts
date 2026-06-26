import * as Sentry from '@sentry/react';
import type { ErrorBoundaryProps } from '@sentry/react';
export declare const ErrorBoundary: ({ children, renderFallback, fallback, sentryDsn, sentryInit, ...props }: ErrorBoundaryProps & {
    renderFallback?: boolean;
    sentryDsn?: string;
    sentryInit?: Sentry.BrowserOptions;
    errorFallbacks?: {
        [_: string]: JSX.Element;
    };
    errorLevels?: {
        [_: string]: Sentry.SeverityLevel;
    };
    userUuid?: string;
}) => import("react/jsx-runtime").JSX.Element;

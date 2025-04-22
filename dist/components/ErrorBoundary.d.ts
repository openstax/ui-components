/// <reference types="react" />
import * as Sentry from '@sentry/react';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
export declare const ErrorBoundary: ({ children, renderFallback, fallback, sentryDsn, sentryInit, ...props }: ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    sentryDsn?: string | undefined;
    sentryInit?: Sentry.BrowserOptions | undefined;
    errorFallbacks?: {
        [_: string]: JSX.Element;
    } | undefined;
}) => import("react/jsx-runtime").JSX.Element;

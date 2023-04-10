import * as Sentry from '@sentry/react';
import React from 'react';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
declare type SentryError = {
    error: Error;
    componentStack?: string;
    eventId?: string;
};
export declare const ErrorContext: React.Context<SentryError | null>;
export declare const ErrorBoundary: ({ children, renderFallback, windowImpl, fallback, ...props }: Sentry.ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    windowImpl?: Window | Pick<Window, "addEventListener" | "removeEventListener"> | undefined;
}) => JSX.Element;
export {};

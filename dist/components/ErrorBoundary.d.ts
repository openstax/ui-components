import * as Sentry from '@sentry/react';
import React from 'react';
import { ErrorPropTypes } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
declare const Error: ({ children, ...props }: React.PropsWithChildren<ErrorPropTypes>) => JSX.Element;
export declare const getTypeFromError: (error: Error | PromiseRejectionEvent['reason']) => any;
export declare const ErrorBoundary: ({ children, renderFallback, fallback, catchUnhandledRejections, windowImpl, sentryDsn, sentryInit, ...props }: Sentry.ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    catchUnhandledRejections?: boolean | undefined;
    windowImpl?: Window | Pick<Window, "addEventListener" | "removeEventListener"> | undefined;
    sentryDsn?: string | undefined;
    sentryInit?: Sentry.BrowserOptions | undefined;
    errorFallbacks?: {
        [_: string]: JSX.Element;
    } | undefined;
}) => JSX.Element;
export {};

import * as Sentry from '@sentry/react';
import React from 'react';
export declare const ErrorBoundary: ({ children, includeDefaultHandlers, sentryDsn, sentryInit, ...props }: {
    includeDefaultHandlers?: boolean;
    sentryDsn?: string;
    sentryInit?: Sentry.BrowserOptions;
    errorFallbacks?: {
        [_: string]: JSX.Element;
    };
    errorLevels?: {
        [_: string]: Sentry.SeverityLevel;
    };
    userUuid?: string;
    children?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;

import * as Sentry from '@sentry/react';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
export declare const ErrorBoundary: ({ children, renderFallback, windowImpl, fallback, ...props }: Sentry.ErrorBoundaryProps & {
    renderFallback?: boolean | undefined;
    windowImpl?: Window | Pick<Window, "addEventListener" | "removeEventListener"> | undefined;
}) => JSX.Element;

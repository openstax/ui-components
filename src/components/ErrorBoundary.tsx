import * as Sentry from '@sentry/react';
import React from 'react';
import { Error } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';

type SentryError = {
  error: Error;
  componentStack?: string;
  eventId?: string;
};

export const ErrorContext = React.createContext<SentryError | null>(null);

export const ErrorBoundary = ({ children, renderFallback, ...props }: ErrorBoundaryProps & {
  renderFallback?: boolean;
}) => {
  const [sentryError, setSentryError] = React.useState<SentryError | null>(null);

  React.useEffect(() => {
    const handleRejection = (e: PromiseRejectionEvent) => setSentryError({
      error: { name: e.type, message: e.reason.toString() },
    });
    window.addEventListener('unhandledrejection', handleRejection);
    return () => window.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  return <ErrorContext.Provider value={sentryError}>
    <Sentry.ErrorBoundary
      fallback={renderFallback ? <Error /> : <>{children}</>}
      onError={(error, componentStack, eventId) => {
        setSentryError({ error, componentStack, eventId });
      }}
      {...props}
    >
      {children}
    </Sentry.ErrorBoundary>
  </ErrorContext.Provider>;
}

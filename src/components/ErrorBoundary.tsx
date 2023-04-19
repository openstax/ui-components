import * as Sentry from '@sentry/react';
import React from 'react';
import { Error } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';

export const ErrorBoundary = ({
  children,
  renderFallback,
  fallback,
  catchUnhandledRejections = true,
  windowImpl = window,
  sentryDsn,
  sentryInit,
  ...props
}: ErrorBoundaryProps & {
  renderFallback?: boolean;
  catchUnhandledRejections?: boolean;
  windowImpl?: Window | Pick<Window, 'addEventListener' | 'removeEventListener'>;
  sentryDsn?: string;
  sentryInit?: Sentry.BrowserOptions;
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const defaultFallback = <Error data-testid='error-fallback' />;
  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? (fallback || defaultFallback) : <>{children}</>;

  React.useEffect(() => {
    if (!sentryDsn && !sentryInit) {
      return;
    }

    Sentry.init(sentryInit || {
      dsn: sentryDsn,
      environment: window.location.hostname,
      integrations: [
        new Sentry.BrowserTracing(),
      ],
    });
  }, []);

  React.useEffect(() => {
    if (!catchUnhandledRejections) {
      return;
    }
    const handleRejection = (e: PromiseRejectionEvent) => setError({
      error: { name: e.type, message: e.reason.toString() },
    });
    windowImpl.addEventListener('unhandledrejection', handleRejection);
    return () => windowImpl.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  // There are two references to the render element here because the Sentry fallback (and onError)
  // are not used for unhandledrejection events. To support those events, we add a listener and
  // reuse the same error state and rendering logic.
  return <ErrorContext.Provider value={error}>
    <Sentry.ErrorBoundary
      fallback={renderElement}
      onError={(error, componentStack, eventId) => {
        setError({ error, componentStack, eventId });
      }}
      {...props}
      onReset={() => setError(null)}
    >
      {renderElement}
    </Sentry.ErrorBoundary>
  </ErrorContext.Provider>;
}

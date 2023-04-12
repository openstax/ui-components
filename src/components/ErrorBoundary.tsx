import * as Sentry from '@sentry/react';
import React from 'react';
import { Error } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { SentryError } from 'src/types';
import { ErrorContext } from 'src/contexts';

export const ErrorBoundary = ({
  children,
  renderFallback,
  windowImpl = window,
  fallback,
  ...props
}: ErrorBoundaryProps & {
  renderFallback?: boolean;
  windowImpl?: Window | Pick<Window, 'addEventListener' | 'removeEventListener'>;
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const defaultFallback = <Error data-testid='error-fallback' />;
  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? (fallback || defaultFallback) : <>{children}</>;

  React.useEffect(() => {
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

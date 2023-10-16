import React from 'react';
import { ErrorContext } from './contexts';
import { getTypeFromError } from './utils';
import * as Sentry from '@sentry/react';

// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
export const useSetAppError = () => {
  const { setError } = React.useContext(ErrorContext);

  return React.useCallback((error: Error | null) => {
    setError(
      // ErrorBoundary expects a wrapped SentryError
      error ? {
        error: error,
        type: getTypeFromError(error),
        eventId: Sentry.captureException(error)
      } : null
    );
  }, [setError])
}

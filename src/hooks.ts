import React from 'react';
import { ErrorContext } from './contexts';
import { getTypeFromError } from './utils';

// Convenience hook for manually displaying an app-level error screen.
// Takes a plain error object, or null to clear the error.
export const useSetAppError = () => {
  const { setError } = React.useContext(ErrorContext);

  return React.useCallback((error: Error | null) => {
    setError(
      // ErrorBoundary expects a wrapped SentryError
      error ? {
        error: error,
        type: getTypeFromError(error),
      } : null
    );
  }, [setError])
}

import React from 'react';
import { ErrorContext } from './contexts';
import { getTypeFromError } from './utils';

export const useSetAppError = () => {
  const { setError } = React.useContext(ErrorContext);

  return React.useCallback((error: Error | null) => {
    setError(
      error ? {
        error: error,
        type: getTypeFromError(error),
      } : null
    );
  }, [setError])
}

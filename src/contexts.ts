import React from 'react';
import { SentryError } from './types';

export const ErrorContext = React.createContext<{
  initialized: boolean;
  error: SentryError | null;
  setError: (error: Error | unknown | null, componentStack?: string) => void;
  // Forwards a render error with the settings of the render that threw. setError uses the last
  // committed settings, which a parent hasn't published yet while its child's catch runs.
  catchRenderError?: (error: Error | unknown, componentStack?: string) => void;
}>({
  initialized: false,
  error: null,
  setError: () => {
    throw new Error('Expected setError to be initialized');
  }
});

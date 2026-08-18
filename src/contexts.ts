import React from 'react';
import { SentryError } from './types';

export const ErrorContext = React.createContext<{
  initialized: boolean;
  error: SentryError | null;
  setError: (error: Error | unknown | null, componentStack?: string) => void;
}>({
  initialized: false,
  error: null,
  setError: () => {
    throw new Error('Expected setError to be initialized');
  }
});

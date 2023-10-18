import React from 'react';
import { SentryError } from './types';

export const ErrorContext = React.createContext<{
  error: SentryError | null;
  setError: React.Dispatch<React.SetStateAction<SentryError | null>>;
}>({
  error: null,
  setError: () => {
    throw new Error('Expected setError to be initialized');
  }
});

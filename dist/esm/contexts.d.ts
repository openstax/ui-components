import React from 'react';
import { SentryError } from './types';
export declare const ErrorContext: React.Context<{
    initialized: boolean;
    error: SentryError | null;
    setError: (error: Error | unknown | null, componentStack?: string) => void;
}>;

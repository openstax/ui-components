import React from 'react';
import { SentryError } from './types';
export declare const ErrorContext: React.Context<{
    error: SentryError | null;
    setError: React.Dispatch<React.SetStateAction<SentryError | null>>;
}>;

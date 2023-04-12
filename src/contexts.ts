import { SentryError } from 'src/types';
import React from 'react';

export const ErrorContext = React.createContext<SentryError | null>(null);

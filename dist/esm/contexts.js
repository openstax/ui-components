import React from 'react';
export const ErrorContext = React.createContext({
    initialized: false,
    error: null,
    setError: () => {
        throw new Error('Expected setError to be initialized');
    }
});

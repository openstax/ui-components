import React from 'react';
import { ErrorContext } from './contexts';

// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
export const useSetAppError = () => {
  const { setError } = React.useContext(ErrorContext);
  return setError;
}

export const useMatchMediaQuery = (query: string) => {
  const matchMedia = window.matchMedia(query);
  const [matches, setMatches] = React.useState(matchMedia.matches);

  const listener = React.useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setMatches(true);
    } else {
      setMatches(false);
    }
  }, []);

  React.useEffect(() => {
    if (typeof matchMedia.addEventListener === "function") {
      matchMedia.addEventListener("change", listener);
    } else {
      matchMedia.addListener(listener);
    }
    return () => {
      if (typeof matchMedia.removeEventListener === "function") {
        matchMedia.removeEventListener("change", listener);
      } else {
        matchMedia.removeListener(listener);
      }
    };
  }, [listener, matchMedia]);

  return matches;
};

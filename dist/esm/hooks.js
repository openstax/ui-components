import React from 'react';
import { ErrorContext } from './contexts';
// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
export const useSetAppError = () => {
    const { setError } = React.useContext(ErrorContext);
    return setError;
};
// Calls onFocusIframe when focus moves into an iframe, which is what a press inside one does.
// That press happens in the iframe's document, so outside-press detection never sees it; the
// parent only gets a window blur. Switching tabs also blurs the window, but leaves
// activeElement alone, so only a blur that lands on an iframe counts. activeElement is read
// after the blur, since some browsers only update it once the event has finished.
export const useFocusIframe = (onFocusIframe, isDisabled = false) => {
    const callbackRef = React.useRef(onFocusIframe);
    callbackRef.current = onFocusIframe;
    React.useEffect(() => {
        if (isDisabled)
            return;
        let timeout;
        const onBlur = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                var _a;
                if (((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) === 'IFRAME')
                    callbackRef.current();
            });
        };
        window.addEventListener('blur', onBlur);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('blur', onBlur);
        };
    }, [isDisabled]);
};
export const useMatchMediaQuery = (query) => {
    const matchMedia = React.useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = React.useState(matchMedia.matches);
    const listener = React.useCallback((e) => {
        if (e.matches) {
            setMatches(true);
        }
        else {
            setMatches(false);
        }
    }, []);
    React.useEffect(() => {
        setMatches(matchMedia.matches);
        if (typeof matchMedia.addEventListener === "function") {
            matchMedia.addEventListener("change", listener);
        }
        else {
            matchMedia.addListener(listener);
        }
        return () => {
            if (typeof matchMedia.removeEventListener === "function") {
                matchMedia.removeEventListener("change", listener);
            }
            else {
                matchMedia.removeListener(listener);
            }
        };
    }, [listener, matchMedia]);
    return matches;
};

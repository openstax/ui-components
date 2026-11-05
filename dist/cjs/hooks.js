"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMatchMediaQuery = exports.useFocusIframe = exports.useSetAppError = void 0;
const react_1 = __importDefault(require("react"));
const contexts_1 = require("./contexts");
// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
const useSetAppError = () => {
    const { setError } = react_1.default.useContext(contexts_1.ErrorContext);
    return setError;
};
exports.useSetAppError = useSetAppError;
// Calls onFocusIframe when focus moves into an iframe, which is what a press inside one does.
// That press happens in the iframe's document, so outside-press detection never sees it; the
// parent only gets a window blur. Switching tabs also blurs the window, but leaves
// activeElement alone, so only a blur that lands on an iframe counts. activeElement is read
// after the blur, since some browsers only update it once the event has finished.
const useFocusIframe = (onFocusIframe, isDisabled = false) => {
    const callbackRef = react_1.default.useRef(onFocusIframe);
    callbackRef.current = onFocusIframe;
    react_1.default.useEffect(() => {
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
exports.useFocusIframe = useFocusIframe;
const useMatchMediaQuery = (query) => {
    const matchMedia = react_1.default.useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = react_1.default.useState(matchMedia.matches);
    const listener = react_1.default.useCallback((e) => {
        if (e.matches) {
            setMatches(true);
        }
        else {
            setMatches(false);
        }
    }, []);
    react_1.default.useEffect(() => {
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
exports.useMatchMediaQuery = useMatchMediaQuery;

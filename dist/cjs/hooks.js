"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMatchMediaQuery = exports.useSetAppError = void 0;
const react_1 = __importDefault(require("react"));
const contexts_1 = require("./contexts");
// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
const useSetAppError = () => {
    const { setError } = react_1.default.useContext(contexts_1.ErrorContext);
    return setError;
};
exports.useSetAppError = useSetAppError;
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

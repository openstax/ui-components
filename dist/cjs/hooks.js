"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMatchMediaQuery = exports.useSetAppError = void 0;
const react_1 = __importDefault(require("react"));
const contexts_1 = require("./contexts");
const utils_1 = require("./utils");
const Sentry = __importStar(require("@sentry/react"));
// Convenience hook for manually displaying an app-level error screen and notifying Sentry.
// Takes a plain error object, or null to clear the error.
const useSetAppError = () => {
    const { setError } = react_1.default.useContext(contexts_1.ErrorContext);
    return react_1.default.useCallback((error) => {
        setError(
        // ErrorBoundary expects a wrapped SentryError
        error ? {
            error: error,
            type: (0, utils_1.getTypeFromError)(error),
            eventId: Sentry.captureException(error)
        } : null);
    }, [setError]);
};
exports.useSetAppError = useSetAppError;
const useMatchMediaQuery = (query) => {
    const matchMedia = window.matchMedia(query);
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageCookiesLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Button_1 = require("./Button");
const styled_components_1 = require("styled-components");
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  .cky-btn-revisit { display: none; }
`;
// documentation for this at https://www.cookieyes.com/documentation/change-cookie-consent-using-cookieyes/
const ManageCookiesLink = ({ children, className, wrapper, ...props }) => {
    const inBrowser = typeof window === 'object';
    const [cookieYesLoaded, setCookieYesLoaded] = react_1.default.useState(false);
    const buttonRef = react_1.default.useRef(null);
    const observerRef = react_1.default.useRef(null);
    const timeoutIdRef = react_1.default.useRef(null);
    const observerTimeoutIdRef = react_1.default.useRef(null);
    react_1.default.useEffect(() => {
        if (inBrowser && !cookieYesLoaded) {
            const handleCkyLoaded = () => setCookieYesLoaded(true);
            if ('getCkyConsent' in window) {
                handleCkyLoaded();
            }
            else {
                document.addEventListener('cookieyes_banner_load', handleCkyLoaded);
                return () => document.removeEventListener('cookieyes_banner_load', handleCkyLoaded);
            }
        }
        return;
    }, [cookieYesLoaded, inBrowser]);
    // Helper function to clean up observer and timeouts
    const cleanupObserverAndTimeouts = react_1.default.useCallback(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
        }
        if (observerTimeoutIdRef.current !== null) {
            clearTimeout(observerTimeoutIdRef.current);
            observerTimeoutIdRef.current = null;
        }
    }, []);
    // Helper function to clear the initialization timeout
    const clearInitTimeout = react_1.default.useCallback(() => {
        if (timeoutIdRef.current !== null) {
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = null;
        }
    }, []);
    // Cleanup observer and timeouts on unmount
    react_1.default.useEffect(() => {
        return () => {
            clearInitTimeout();
            cleanupObserverAndTimeouts();
        };
    }, [clearInitTimeout, cleanupObserverAndTimeouts]);
    const onClick = props.onClick;
    const handleClick = react_1.default.useCallback((e) => {
        const button = buttonRef.current;
        // Call any existing onClick handler
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        // Early return if prerequisites aren't met
        if (!button || !inBrowser) {
            return;
        }
        // Clear any existing timeout from previous clicks
        clearInitTimeout();
        // Wait for the modal to appear in the DOM
        timeoutIdRef.current = window.setTimeout(() => {
            timeoutIdRef.current = null;
            const ckyModal = document.querySelector('.cky-modal');
            if (!ckyModal) {
                return;
            }
            // Clean up any existing observer and timeouts
            cleanupObserverAndTimeouts();
            // Create new observer to watch for class changes
            observerRef.current = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const target = mutation.target;
                        // Check if cky-modal-open class was removed
                        if (!target.classList.contains('cky-modal-open')) {
                            // Modal closed - restore focus
                            button.focus();
                            // Clean up observer and safety timeout
                            cleanupObserverAndTimeouts();
                            break;
                        }
                    }
                }
            });
            // Start observing the modal element for class changes
            observerRef.current.observe(ckyModal, {
                attributes: true,
                attributeFilter: ['class']
            });
            // Safety timeout: disconnect observer after 10 seconds if modal never closes properly
            observerTimeoutIdRef.current = window.setTimeout(() => {
                cleanupObserverAndTimeouts();
            }, 10000);
        }, 100); // Small delay to allow CookieYes to add the modal to DOM
    }, [inBrowser, onClick, clearInitTimeout, cleanupObserverAndTimeouts]);
    if (!inBrowser) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(GlobalStyle, {}) });
    }
    const button = (0, jsx_runtime_1.jsx)(Button_1.ButtonLink, { ref: buttonRef, className: `cky-banner-element${className ? ` ${className}` : ''}`, ...props, onClick: handleClick, children: children || 'Manage Cookies' });
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle, {}), cookieYesLoaded
                ? typeof wrapper === 'function'
                    ? wrapper(button)
                    : button
                : null] });
};
exports.ManageCookiesLink = ManageCookiesLink;

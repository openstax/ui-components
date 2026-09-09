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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Sentry = __importStar(require("@sentry/react"));
const MessageBox_1 = require("./MessageBox/MessageBox");
const contexts_1 = require("../contexts");
const Error = ({ heading, children, ...props }) => {
    var _a, _b;
    const context = react_1.default.useContext(contexts_1.ErrorContext);
    const [lastEventId, setLastEventId] = react_1.default.useState(Sentry.lastEventId());
    react_1.default.useEffect(() => {
        var _a;
        if (((_a = context.error) === null || _a === void 0 ? void 0 : _a.eventId) || lastEventId) {
            return;
        }
        const intervalId = setInterval(() => {
            const currentEventId = Sentry.lastEventId();
            if (lastEventId !== currentEventId) {
                setLastEventId(currentEventId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [lastEventId, (_a = context.error) === null || _a === void 0 ? void 0 : _a.eventId]);
    return (0, jsx_runtime_1.jsxs)(MessageBox_1.BoxBody, { ...props, "data-testid": 'error', children: [(0, jsx_runtime_1.jsx)(MessageBox_1.BoxHeading, { children: heading !== null && heading !== void 0 ? heading : `Uh-oh, there's been a glitch` }), children !== null && children !== void 0 ? children : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ", (0, jsx_runtime_1.jsx)("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }), (0, jsx_runtime_1.jsx)(MessageBox_1.BoxEventId, { "data-testid": 'event-id', children: ((_b = context.error) === null || _b === void 0 ? void 0 : _b.eventId) || lastEventId })] });
};
exports.Error = Error;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import * as Sentry from '@sentry/react';
import { BoxBody, BoxHeading, BoxEventId } from "./MessageBox/MessageBox";
import { ErrorContext } from "../contexts";
export const Error = ({ heading, children, ...props }) => {
    var _a, _b;
    const context = React.useContext(ErrorContext);
    const [lastEventId, setLastEventId] = React.useState(Sentry.lastEventId());
    React.useEffect(() => {
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
    return _jsxs(BoxBody, { ...props, "data-testid": 'error', children: [_jsx(BoxHeading, { children: heading !== null && heading !== void 0 ? heading : `Uh-oh, there's been a glitch` }), children !== null && children !== void 0 ? children : _jsxs(_Fragment, { children: ["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ", _jsx("a", { href: "https://help.openstax.org", target: "_blank", children: "Support Center" }), "."] }), _jsx(BoxEventId, { "data-testid": 'event-id', children: ((_b = context.error) === null || _b === void 0 ? void 0 : _b.eventId) || lastEventId })] });
};

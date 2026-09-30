import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ErrorContext } from "../contexts";
export const ErrorMessage = ({ message, showEventId = true }) => {
    var _a;
    const { error } = React.useContext(ErrorContext);
    return _jsxs(_Fragment, { children: [message || ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message), showEventId ? _jsx("div", { children: error === null || error === void 0 ? void 0 : error.eventId }) : null] });
};

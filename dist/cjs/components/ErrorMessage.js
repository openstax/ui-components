"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const contexts_1 = require("../contexts");
const ErrorMessage = ({ message, showEventId = true }) => {
    var _a;
    const { error } = react_1.default.useContext(contexts_1.ErrorContext);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [message || ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message), showEventId ? (0, jsx_runtime_1.jsx)("div", { children: error === null || error === void 0 ? void 0 : error.eventId }) : null] });
};
exports.ErrorMessage = ErrorMessage;

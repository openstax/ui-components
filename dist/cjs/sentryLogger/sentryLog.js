"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSentryLogger = void 0;
const react_1 = require("@sentry/react");
const logger_1 = require("@openstax/ts-utils/services/logger");
/**
 * Flatten nested objects
 * @see https://stackoverflow.com/a/70377608
 */
const flattenObj = (obj) => Object.keys(obj).reduce((acc, curKey) => {
    if (typeof obj[curKey] === 'object') {
        acc = { ...acc, ...flattenObj(obj[curKey]) };
    }
    else {
        acc[curKey] = obj[curKey];
    }
    return acc;
}, {});
const serializeLevel = (level) => level === logger_1.Level.Warn ? 'warning' : level;
const serializeBreadcrumb = (level, breadcrumb) => {
    const { type, category, message, timestamp, ...rest } = breadcrumb;
    return {
        level: serializeLevel(level),
        category: 'log',
        message: typeof message === 'string' ? message : '',
        timestamp: typeof timestamp === 'number' ? timestamp : undefined,
        data: flattenObj(rest),
    };
};
/**
 * Creates a logger that creates breadcrumbs using Sentry.
 * @see https://develop.sentry.dev/sdk/data-model/event-payloads/breadcrumbs/
 */
const createSentryLogger = () => (0, logger_1.createCoreLogger)((level, breadcrumb) => (0, react_1.addBreadcrumb)(serializeBreadcrumb(level, breadcrumb)));
exports.createSentryLogger = createSentryLogger;

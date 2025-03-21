import { addBreadcrumb, SeverityLevel } from "@sentry/react";
import { createCoreLogger, Level } from '@openstax/ts-utils/services/logger';
import { JsonCompatibleStruct } from "@openstax/ts-utils/routing";

/**
 * Flatten nested objects
 * @see https://stackoverflow.com/a/70377608
 */

const flattenObj = (obj: { [x: string]: any; }) =>
  Object.keys(obj).reduce((acc: { [x: string]: any; }, curKey) => {
    if (typeof obj[curKey] === 'object') {
      acc = { ...acc, ...flattenObj(obj[curKey]) }
    } else {
      acc[curKey] = obj[curKey]
    }
    return acc
  }, {});

const serializeLevel = (level: Level): SeverityLevel =>
  level === Level.Warn ? 'warning' : level;

const serializeBreadcrumb = (level: Level, breadcrumb: JsonCompatibleStruct): {
  level?: SeverityLevel;
  category?: string;
  message?: string;
  timestamp?: number;
  data?: { [key: string]: any };
} => {
  const { type, category, message, timestamp, ...rest } = breadcrumb;

  return {
    level: serializeLevel(level),
    category: 'log',
    message: typeof message === 'string' ? message : '',
    timestamp: typeof timestamp === 'number' ? timestamp : undefined,
    data: flattenObj(rest),
  }
};

/**
 * Creates a logger that creates breadcrumbs using Sentry.
 * @see https://develop.sentry.dev/sdk/data-model/event-payloads/breadcrumbs/
 */
export const createSentryLogger = () => createCoreLogger((level, breadcrumb) =>
  addBreadcrumb(serializeBreadcrumb(level, breadcrumb))
);
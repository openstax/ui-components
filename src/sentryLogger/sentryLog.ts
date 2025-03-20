import { addBreadcrumb, SeverityLevel } from "@sentry/react";
import { createCoreLogger, Level } from '@openstax/ts-utils/services/logger';
import { JsonCompatibleArray, JsonCompatibleStruct, JsonCompatibleValue } from "@openstax/ts-utils/routing";

/**
 * Creates a logger that creates breadcrumbs using Sentry.
 * 
 * More info: https://develop.sentry.dev/sdk/data-model/event-payloads/breadcrumbs/
 */

const checkTypeOf = (
  value: JsonCompatibleStruct | JsonCompatibleValue | JsonCompatibleArray,
  typeValue: string,
  defaultValue: any,
) =>
  value && typeof value === typeValue ? value : defaultValue
  ;

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
  type?: string;
  level?: SeverityLevel;
  category?: string;
  message?: string;
  timestamp?: number;
  data?: { [key: string]: any };
} => {
  const { type, category, message, timestamp, ...rest } = breadcrumb;

  return {
    type: checkTypeOf(type, 'string', ''),
    level: serializeLevel(level),
    category: checkTypeOf(category, 'string', ''),
    message: checkTypeOf(message, 'string', ''),
    timestamp: checkTypeOf(timestamp, 'string', undefined),
    data: flattenObj(rest),
  }
};

export const createSentryLogger = () => createCoreLogger((level, breadcrumb) =>
  addBreadcrumb(serializeBreadcrumb(level, breadcrumb))
);
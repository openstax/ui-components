import { addBreadcrumb, SeverityLevel } from "@sentry/react";
import { createCoreLogger, Level } from '@openstax/ts-utils/services/logger';
import { JsonCompatibleStruct } from "@openstax/ts-utils/routing";

/**
 * Creates a logger that creates breadcrumbs using Sentry.
 * 
 * More info: https://develop.sentry.dev/sdk/data-model/event-payloads/breadcrumbs/
 */

const serializeLevel = (level: Level): string =>
  level === Level.Warn ? 'warning' : level;

const serializeBreadcrumb = (level: Level, breadcrumb: JsonCompatibleStruct): {
  type?: string;
  level?: SeverityLevel;
  event_id?: string;
  category?: string;
  message?: string;
  timestamp?: number;
  data?: { [key: string]: any };
} => {
  const { type, event_id, category, message, timestamp, data } = breadcrumb;
  // Casting values to remove JsonCompatibleStruct type from event
  return {
    type: (type?? '') as string,
    level: serializeLevel(level) as SeverityLevel,
    "event_id": (event_id ?? '') as string,
    category: (category ?? '') as string,
    message: (message ?? '') as string,
    timestamp: timestamp as number ?? undefined,
    data: (data ?? {}) as { [key: string]: any },
  }
};

export const createSentryLogger = () => createCoreLogger((level, breadcrumb) =>
  addBreadcrumb(serializeBreadcrumb(level, breadcrumb))
);
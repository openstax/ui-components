import { createSentryLogger } from './sentryLog';
import * as Sentry from "@sentry/react";
import { Level, Logger } from '@openstax/ts-utils/services/logger';

describe('createConsoleLogger', () => {
  let logFn: jest.SpyInstance;
  let logger: Logger;

  beforeEach(() => {
    logger = createSentryLogger();
    logFn = jest.spyOn(Sentry, 'addBreadcrumb').mockImplementation(() => null);
  });

  afterEach(() => {
    logFn.mockReset();
  });

  it('logs all fields', () => {
    logger.setContext({ extra: 'context' });
    logger.logEvent(
      Level.Info,
      {
        "timestamp": 1461165894000,
        "type": "navigation",
        "event_id": "any-id",
        "category": "any-category",
        "message": "This is a test",
        "from": "/login",
        "to": "/dashboard",
        "profile": {},
        "address": {
          "city": "New York"
        }
      }
    );

    expect(logFn).toHaveBeenCalledWith(
      {
        "timestamp": 1461165894000,
        "type": "navigation",
        "level": "info",
        "message": "This is a test",
        "category": "any-category",
        "data": {
          "from": "/login",
          "to": "/dashboard",
          "event_id": "any-id",
          "extra": "context",
          "city": "New York",
        }
      }
    );
  });

  it('logs with missing fields', () => {
    logger.logEvent(
      Level.Warn,
      {},
    );

    expect(logFn).toHaveBeenCalledWith(
      {
        "timestamp": undefined,
        "category": "",
        "type": "",
        "message": "",
        "level": "warning",
        "data": {}
      }
    );
  });
});

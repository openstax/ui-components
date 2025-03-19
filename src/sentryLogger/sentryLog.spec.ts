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
        "timestamp": "2016-04-20T20:55:53.847Z",
        "type": "navigation",
        "event_id": "any-id",
        "category": "any-category",
        "message": "This is a test",
        "data": {
          "from": "/login",
          "to": "/dashboard"
        }
      }
    );

    expect(logFn).toHaveBeenCalledWith(
      {
        "timestamp": "2016-04-20T20:55:53.847Z",
        "type": "navigation",
        "level": "info",
        "message": "This is a test",
        "event_id": "any-id",
        "category": "any-category",
        "data": {
          "from": "/login",
          "to": "/dashboard"
        }
      }
    );
  });

  it('logs with missing fields', () => {
    logger.setContext({ extra: 'context' });
    logger.logEvent(
      Level.Warn,
      {},
    );

    expect(logFn).toHaveBeenCalledWith(
      {
        "timestamp": undefined,
        "category": "",
        "event_id": "",
        "type": "",
        "message": "",
        "level": "warning",
        "data": {}
      }
    );
  });
});

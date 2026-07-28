import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { ErrorBoundary } from './ErrorBoundary';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { findByTestId } from '../test/utils';
import { SessionExpiredError } from '@openstax/ts-utils/errors';

// Sentry v8+ exposes named exports as read-only getters; mock init so it is
// spyable while delegating to the real implementation for testkit transport setup.
jest.mock('@sentry/react', () => {
  const actual = jest.requireActual('@sentry/react');
  return {
    __esModule: true,
    ...actual,
    init: jest.fn(actual.init),
  };
});

const { testkit, sentryTransport } = sentryTestkit();

const ErrorComponent = () => { throw new Error('Test Error') };

describe('ErrorBoundary', () => {
  beforeAll(() => {
    Sentry.init({
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      transport: sentryTransport,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    // Sentry v8+ flushes captured events to the testkit transport synchronously,
    // so reports leak between tests unless we clear them after each one.
    testkit.reset();
  });

  it('renders children', () => {
    const tree = renderer.create(
      <ErrorBoundary>
        Test
      </ErrorBoundary>
    ).toJSON();
    expect(tree).toMatchInlineSnapshot(`"Test"`);
  });

  it('captures errors', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => undefined);

    const render = renderer.create(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(findByTestId(render.root, 'error-fallback')).toBeTruthy();
    expect(testkit.reports()).toHaveLength(1);

    spy.mockRestore();
  });

  it('sets level appropriately', () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => undefined);

    // Clear previous reports
    testkit.reset();

    const SessionExpiredComponent = () => {
      throw new SessionExpiredError();
    };

    // Should create warning (reports[0])
    renderer.create(
      <ErrorBoundary>
        <SessionExpiredComponent />
      </ErrorBoundary>
    );

    // Should create error (reports[1])
    renderer.create(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    const reports = testkit.reports();
    expect(reports).toHaveLength(2);
    expect(reports[0].level).toBe('warning');
    expect(reports[1].level).toBe('error');

    spy.mockRestore();
  });

  it('can override level in error fallbacks', () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => undefined);

    // Clear previous reports
    testkit.reset();

    const SessionExpiredComponent = () => {
      throw new SessionExpiredError();
    };

    // Round 1: Override default 'warning' level with 'debug'
    // Should create debug (reports[0])
    renderer.create(
      <ErrorBoundary
        errorLevels={{ SessionExpiredError: 'debug' }}
      >
        <SessionExpiredComponent />
      </ErrorBoundary>
    );

    // Should create error (reports[1])
    renderer.create(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    
    const reports = testkit.reports();
    expect(reports).toHaveLength(2);
    expect(reports[0].level).toBe('debug');
    expect(reports[1].level).toBe('error');

    // Round 2: Ensure 'error' level is default
    testkit.reset();

    const unsetLevel = (undefined as unknown) as Sentry.SeverityLevel

    renderer.create(
      <ErrorBoundary
        errorLevels={{ SessionExpiredError: unsetLevel }}
      >
        <SessionExpiredComponent />
      </ErrorBoundary>
    );

    expect(testkit.reports()).toHaveLength(1);
    expect(testkit.reports()[0].level).toBe('error');

    spy.mockRestore();
  });

  it('can override fallback components for specific errors', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => undefined);

    const SessionExpiredComponent = () => {
      throw new SessionExpiredError();
    };

    const tree = renderer.create(
      <ErrorBoundary
        errorFallbacks={{
          'SessionExpiredError': <>You are signed out</>,
        }}
        >
        <SessionExpiredComponent />
      </ErrorBoundary>
    ).toJSON();

    expect(tree).toMatchInlineSnapshot(`"You are signed out"`);

    spy.mockRestore();
  });

  it('inits Sentry', () => {
    const initMock = Sentry.init as jest.Mock;
    initMock.mockClear();

    act(() => {
      renderer.create(
        <ErrorBoundary sentryDsn='https://examplePublicKey@o0.ingest.sentry.io/0' />
      );
    });

    expect(initMock).toHaveBeenCalled();
  });

  it('can override Sentry init', () => {
    const initMock = Sentry.init as jest.Mock;
    initMock.mockClear();
    const config = {
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      enabled: false,
      transport: sentryTransport
    };

    act(() => {
      renderer.create(
        <ErrorBoundary
          sentryInit={config}
        />
      );
    });

    expect(initMock).toHaveBeenCalledWith(config);
  });

  it('is idempotent when the init effect re-runs (does not throw or re-init)', () => {
    const initMock = Sentry.init as jest.Mock;
    initMock.mockClear();
    const config = {
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      enabled: false,
      transport: sentryTransport
    };

    let instance: ReactTestRenderer;
    act(() => {
      instance = renderer.create(
        <ErrorBoundary
          sentryInit={config}
        />
      );
    });

    expect(initMock).toHaveBeenCalledTimes(1);

    let caught;
    const saveError = console.error;
    console.error = jest.fn();
    try {
      act(() => instance.update(<ErrorBoundary sentryInit={{dsn: 'foo'}} />))
    } catch (e) {
      caught = e;
    }
    console.error = saveError;

    expect(caught).toBeUndefined();
    expect(initMock).toHaveBeenCalledTimes(1);
  });
});

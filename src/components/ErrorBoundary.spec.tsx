import React from 'react';
import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { ErrorBoundary } from './ErrorBoundary';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { findByTestId } from '../test/utils';
import { useSetAppError } from '../hooks';
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

type Report = ReturnType<typeof testkit.reports>[number];

// captureReactException attaches the component stack to the event as a synthetic
// cause exception named 'React ErrorBoundary <name>', so its frames are the stack
const componentStackFrom = (report: Report) => report.originalReport.exception?.values
  ?.find((value) => value.type?.startsWith('React ErrorBoundary'))
  ?.stacktrace?.frames?.map((frame) => frame.function);

// silences the console.error react logs a rendering error boundary always emits
const withoutReactLogs = (test: () => void) => {
  const spy = jest.spyOn(console, 'error');
  spy.mockImplementation(() => undefined);
  try {
    test();
  } finally {
    spy.mockRestore();
  }
};

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

  describe('nested boundaries', () => {
    it('handles the error at the first boundary with a matching fallback', () => withoutReactLogs(() => {
      const tree = renderer.create(
        <ErrorBoundary>
          <div data-testid='outer-content' />
          <ErrorBoundary errorFallbacks={{ 'Error': <div data-testid='inner-fallback' /> }}>
            <ErrorComponent />
          </ErrorBoundary>
        </ErrorBoundary>
      );

      expect(findByTestId(tree.root, 'inner-fallback')).toBeTruthy();
      // the outer boundary is untouched, so its other children keep rendering
      expect(findByTestId(tree.root, 'outer-content')).toBeTruthy();
      expect(testkit.reports()).toHaveLength(1);
    }));

    it('bubbles to the parent when it has no matching fallback', () => withoutReactLogs(() => {
      const tree = renderer.create(
        <ErrorBoundary errorFallbacks={{ 'Error': <div data-testid='outer-fallback' /> }}>
          <div data-testid='outer-content' />
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </ErrorBoundary>
      );

      expect(findByTestId(tree.root, 'outer-fallback')).toBeTruthy();
      // the outer boundary replaced its children, so the inner one is gone
      expect(() => findByTestId(tree.root, 'outer-content')).toThrow();
      // reported once by the handling boundary, not by every boundary it passed
      expect(testkit.reports()).toHaveLength(1);
    }));

    it('only inits Sentry at the outermost boundary', () => {
      const initMock = Sentry.init as jest.Mock;
      initMock.mockClear();
      const config = { dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0', enabled: false };

      act(() => {
        renderer.create(
          <ErrorBoundary sentryInit={config}>
            <ErrorBoundary sentryInit={config}>
              <div data-testid='content' />
            </ErrorBoundary>
          </ErrorBoundary>
        );
      });

      expect(initMock).toHaveBeenCalledTimes(1);
    });

    it('recovers the subtree once the error is cleared', () => withoutReactLogs(() => {
      let shouldThrow = true;
      const SometimesErrorComponent = () => {
        if (shouldThrow) { throw new Error('Test Error'); }
        return <div data-testid='recovered' />;
      };
      const ResetFallback = () => {
        const setAppError = useSetAppError();
        return <div data-testid='reset' onClick={() => setAppError(null)} />;
      };

      const tree = renderer.create(
        <ErrorBoundary errorFallbacks={{ 'Error': <ResetFallback /> }}>
          <SometimesErrorComponent />
        </ErrorBoundary>
      );

      shouldThrow = false;
      act(() => findByTestId(tree.root, 'reset').props.onClick());

      expect(findByTestId(tree.root, 'recovered')).toBeTruthy();
    }));
  });

  describe('debug info', () => {
    it('sends the component stack to Sentry', () => withoutReactLogs(() => {
      renderer.create(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      );

      expect(componentStackFrom(testkit.reports()[0])).toContain('ErrorComponent');
    }));

    it('keeps the component stack when the error bubbles to a parent', () => withoutReactLogs(() => {
      renderer.create(
        <ErrorBoundary errorFallbacks={{ 'Error': <div data-testid='outer-fallback' /> }}>
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </ErrorBoundary>
      );

      expect(componentStackFrom(testkit.reports()[0])).toContain('ErrorComponent');
    }));

    it('reports errors set outside of rendering, which have no component stack', () => {
      const AsyncErrorComponent = () => {
        const setAppError = useSetAppError();
        React.useEffect(() => { setAppError(new Error('Async Error')); }, [setAppError]);
        return null;
      };

      act(() => {
        renderer.create(
          <ErrorBoundary>
            <AsyncErrorComponent />
          </ErrorBoundary>
        );
      });

      const reports = testkit.reports();
      expect(reports).toHaveLength(1);
      expect(reports[0].error?.message).toBe('Async Error');
      expect(componentStackFrom(reports[0])).toBeUndefined();
    });
  });
});

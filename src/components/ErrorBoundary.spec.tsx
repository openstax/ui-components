import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { ErrorBoundary } from './ErrorBoundary';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { findByTestId } from '../test/utils';
import { SessionExpiredError } from '@openstax/ts-utils/errors';

const { testkit, sentryTransport } = sentryTestkit();

const ErrorComponent = () => { throw new Error('Test Error') };

describe('ErrorBoundary', () => {
  beforeAll(() => {
    Sentry.init({
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      transport: sentryTransport,
    });

    jest.spyOn(Sentry, 'lastEventId').mockReturnValue('someuuid');
  });

  afterEach(() => {
    jest.resetAllMocks();
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
      <ErrorBoundary renderFallback>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(findByTestId(render.root, 'error-fallback')).toBeTruthy();
    expect(testkit.reports()).toHaveLength(1);

    spy.mockRestore();
  });

  it('resets error', () => {
    const spy = jest.spyOn(console, 'error')
    spy.mockImplementation(() => undefined);

    let render: ReactTestRenderer;
    expect(() => {
      render = renderer.create(
        <ErrorBoundary
          renderFallback
          fallback={({ resetError }: {
            resetError: () => void
          }) => { resetError(); return <></> }}
        >
          <ErrorComponent />
        </ErrorBoundary>
      );
    }).toThrow();

    expect(() => findByTestId(render.root, 'error-fallback')).toThrow();
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
      <ErrorBoundary renderFallback>
        <SessionExpiredComponent />
      </ErrorBoundary>
    );

    // Should create error (reports[1])
    renderer.create(
      <ErrorBoundary renderFallback>
        <ErrorComponent />
      </ErrorBoundary>
    );

    const reports = testkit.reports();
    expect(reports).toHaveLength(2);
    expect(reports[0].level).toBe('warning');
    expect(reports[1].level).toBe('error');

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
        renderFallback
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
    const initSpy = jest.spyOn(Sentry, 'init');

    act(() => {
      renderer.create(
        <ErrorBoundary sentryDsn='https://examplePublicKey@o0.ingest.sentry.io/0' />
      );
    });

    expect(initSpy).toHaveBeenCalled();
  });

  it('can override Sentry init', () => {
    const initSpy = jest.spyOn(Sentry, 'init');
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

    expect(initSpy).toHaveBeenCalledWith(config);
  });
  it('throws if Sentry init is called twice', () => {
    const config = {
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      enabled: false,
      transport: sentryTransport
    };

    const instance = renderer.create(
      <ErrorBoundary
        sentryInit={config}
      />
    );

    let caught;
    const saveError = console.error;
    console.error = jest.fn();
    try {
      act(() => instance.update(<ErrorBoundary sentryInit={{dsn: 'foo'}} />))
    } catch (e) {
      caught = e;
    }

    expect(caught).toBe('Sentry.init was already called');
    console.error = saveError;
  });
});

import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { ErrorBoundary, getTypeFromError } from './ErrorBoundary';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { findByTestId } from '../test/utils';
import { SessionExpiredError } from '@openstax/ts-utils/errors';

const { testkit, sentryTransport } = sentryTestkit();

const ErrorComponent = () => { throw new Error('Test Error') };

describe('ErrorBoundary', () => {
  beforeEach(() => {
    Sentry.init({
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      transport: sentryTransport,
    });

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

  describe('getTypeFromError', () => {
    it('returns name if the constuctor does not contain TYPE ', () => {
      class MyError extends Error {
        constructor() {
          super();
          Object.setPrototypeOf(this, MyError.prototype);
        }
      }

      expect(getTypeFromError(new MyError())).toEqual('MyError');
    });
  })

  describe('unhandled rejections', () => {
    it('are captured', async () => {
      const callbacks: Record<string, ({ reason }: { reason: string }) => void> = {};
      const mockWindow = {
        addEventListener: jest.fn().mockImplementation(
          (event, callback) => callbacks[event] = callback
        ),
        removeEventListener: jest.fn().mockImplementation(
          (event: string) => delete callbacks[event],
        )
      };

      let render: ReactTestRenderer | undefined;
      act(() => {
        render = renderer.create(
          <ErrorBoundary renderFallback windowImpl={mockWindow}>
            Content
          </ErrorBoundary>
        );
      });

      expect(mockWindow.addEventListener).toHaveBeenCalled();

      act(() => {
        callbacks.unhandledrejection({ reason: 'Test Rejection' });
      });

      expect(render?.toJSON()).toMatchSnapshot();

      act(() => {
        render?.unmount();
      });

      expect(mockWindow.removeEventListener).toHaveBeenCalled();
    });

    it('can be disabled', async () => {
      const callbacks: Record<string, ({ reason }: { reason: string }) => void> = {};
      const mockWindow = {
        addEventListener: jest.fn().mockImplementation(
          (event, callback) => callbacks[event] = callback
        ),
        removeEventListener: jest.fn().mockImplementation(
          (event: string) => delete callbacks[event],
        )
      };

      let render: ReactTestRenderer | undefined;
      act(() => {
        render = renderer.create(
          <ErrorBoundary renderFallback windowImpl={mockWindow} catchUnhandledRejections={false}>
            Content
          </ErrorBoundary>
        );
      });

      expect(mockWindow.addEventListener).not.toHaveBeenCalled();
      expect(callbacks).toStrictEqual({});
      expect(render?.toJSON()).toMatchSnapshot();

      act(() => {
        render?.unmount();
      });

      expect(mockWindow.removeEventListener).not.toHaveBeenCalled();
    });

    it('does not crash on undefined reasons', async () => {
      const callbacks: Record<string, ({}) => void> = {};

      const mockWindow = {
        addEventListener: jest.fn().mockImplementation(
          (event, callback) => callbacks[event] = callback
        ),
        removeEventListener: jest.fn().mockImplementation(
          (event: string) => delete callbacks[event],
        )
      };

      let render: ReactTestRenderer | undefined;
      act(() => {
        render = renderer.create(
          <ErrorBoundary renderFallback windowImpl={mockWindow}>
            Content
          </ErrorBoundary>
        );
      });

      expect(mockWindow.addEventListener).toHaveBeenCalled();

      act(() => {
        callbacks.unhandledrejection({});
      });

      expect(render?.toJSON()).toMatchSnapshot();

      act(() => {
        render?.unmount();
      });

      expect(mockWindow.removeEventListener).toHaveBeenCalled();
    });
  });

  it('inits Sentry', () => {
    jest.resetAllMocks();
    const initSpy = jest.spyOn(Sentry, 'init');

    act(() => {
      renderer.create(
        <ErrorBoundary sentryDsn='https://examplePublicKey@o0.ingest.sentry.io/0' />
      );
    });

    expect(initSpy).toHaveBeenCalled();
  });

  it('can override Sentry init', () => {
    jest.resetAllMocks();
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
});

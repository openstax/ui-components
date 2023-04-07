import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { ErrorBoundary } from './ErrorBoundary';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { findByTestId } from '../test/utils';

const { testkit, sentryTransport } = sentryTestkit();

const ErrorComponent = () => { throw new Error('Test Error') };

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  transport: sentryTransport,
});

describe('ErrorBoundary', () => {
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
    spy.mockImplementation(() => {});

    let render: ReactTestRenderer;

    render = renderer.create(
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
    spy.mockImplementation(() => {});

    let render: ReactTestRenderer;
    expect(() => {
      render = renderer.create(
        <ErrorBoundary
          renderFallback
          fallback={({ resetError }) => { resetError(); return <></> }}
        >
          <ErrorComponent />
        </ErrorBoundary>
      );
    }).toThrow();

    expect(() => findByTestId(render.root, 'error-fallback')).toThrow();
    expect(testkit.reports()).toHaveLength(1);

    spy.mockRestore();
  });

  it('captures unhandled rejections', async () => {
    const callbacks: Record<string, Function> = {};
    const mockWindow = {
      addEventListener: jest.fn().mockImplementation(
        (event, callback) => callbacks[event] = callback
      ),
      removeEventListener: jest.fn().mockImplementation(
        (event: string) => delete callbacks[event],
      )
    };

    let render: ReactTestRenderer;
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
    expect(render!.toJSON()).toMatchSnapshot();

    act(() => {
      render!.unmount();
    });

    expect(mockWindow.removeEventListener).toHaveBeenCalled();
  });
});

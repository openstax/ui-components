import { render } from '@testing-library/react';
import { useSetAppError } from './hooks';
import sentryTestkit from 'sentry-testkit';
import * as Sentry from '@sentry/react';
import { ErrorContext } from './contexts';

const { testkit, sentryTransport } = sentryTestkit();

describe('useSetAppError', () => {
  let setErrorMock: jest.Mock;

  beforeEach(() => {
    Sentry.init({
      dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
      transport: sentryTransport,
    });
    setErrorMock = jest.fn();
    testkit.reset();
  });

  it('should capture exception with Sentry and set error', () => {
    const ErrorComponent = () => {
      useSetAppError()(new Error('test'));
      return null;
    };

    render(
      <ErrorContext.Provider value={{ error: null, setError: setErrorMock }}>
        <ErrorComponent />
      </ErrorContext.Provider>
    );

    expect(testkit.reports()).toHaveLength(1);
    expect(setErrorMock).toHaveBeenCalledWith({
      error: new Error('test'),
      type: 'Error',
      eventId: testkit.reports()[0].originalReport.event_id
     });
  });

  it('should clear error when called with null', () => {
    const ResetComponent = () => {
      useSetAppError()(null);
      return null;
    }

    render(
      <ErrorContext.Provider value={{ error: null, setError: setErrorMock }}>
        <ResetComponent />
      </ErrorContext.Provider>
    );

    expect(testkit.reports()).toHaveLength(0);
    expect(setErrorMock).toHaveBeenCalledWith(null);
  });
});

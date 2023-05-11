import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent, ErrorPropTypes } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';
import { SessionExpiredError } from '@openstax/ts-utils/errors';

const Error = ({ children, ...props }: React.PropsWithChildren<ErrorPropTypes>) =>
  <ErrorComponent data-testid='error-fallback' {...props}>{children}</ErrorComponent>;

const genericFallback = <Error data-testid='error-fallback' />;

export const defaultErrorFallbacks = {
  [SessionExpiredError.TYPE]: <Error heading='Your session has expired'>
    Please refresh your browser and try again.
  </Error>,
};

export const ErrorBoundary = ({
  children,
  renderFallback,
  fallback = genericFallback,
  catchUnhandledRejections = true,
  windowImpl = window,
  sentryDsn,
  sentryInit,
  errorFallbacks = defaultErrorFallbacks,
  ...props
}: ErrorBoundaryProps & {
  renderFallback?: boolean;
  catchUnhandledRejections?: boolean;
  windowImpl?: Window | Pick<Window, 'addEventListener' | 'removeEventListener'>;
  sentryDsn?: string;
  sentryInit?: Sentry.BrowserOptions;
  errorFallbacks?: { [_: string]: JSX.Element }
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const fallbackElement = error?.error.name ?
    errorFallbacks[error.error.name] || fallback
    : fallback;

  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? fallbackElement : <>{children}</>;

  React.useEffect(() => {
    if (!sentryDsn && !sentryInit) {
      return;
    }

    Sentry.init(sentryInit || {
      dsn: sentryDsn,
      environment: window.location.hostname,
      integrations: [
        new Sentry.BrowserTracing(),
      ],
    });
  }, []);

  React.useEffect(() => {
    if (!catchUnhandledRejections) {
      return;
    }

    const handleRejection = (e: PromiseRejectionEvent) => {
      setError({
        error: { name: e.reason.constructor.name, message: e.reason.toString() },
      });
    };

    windowImpl.addEventListener('unhandledrejection', handleRejection);
    return () => windowImpl.removeEventListener('unhandledrejection', handleRejection);
  }, []);

  // There are two references to the render element here because the Sentry fallback (and onError)
  // are not used for unhandledrejection events. To support those events, we add a listener and
  // reuse the same error state and rendering logic.
  return <ErrorContext.Provider value={error}>
    <Sentry.ErrorBoundary
      fallback={renderElement}
      onError={(error, componentStack, eventId) => {
        setError({
          error: {
            ...error,
            // If the error is a custom error from ts-utils, use the custom name instead of 'Error'
            name: ('TYPE' in error.constructor ? error.constructor.name : error.name)
          },
          componentStack,
          eventId
        });
      }}
      {...props}
      onReset={() => setError(null)}
    >
      {renderElement}
    </Sentry.ErrorBoundary>
  </ErrorContext.Provider>;
}

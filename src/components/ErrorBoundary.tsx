import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent, ErrorPropTypes } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';

const Error = ({ children, ...props }: React.PropsWithChildren<ErrorPropTypes>) =>
  <ErrorComponent data-testid='error-fallback' {...props}>{children}</ErrorComponent>;

const defaultErrorFallbacks = {
  'generic': <Error data-testid='error-fallback' />,
  'SessionExpiredError': <Error heading='Your session has expired'>
    Please refresh your browser and try again. If this doesn't solve the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
  </Error>,
  'UnauthorizedError': <Error heading="Uh-oh, it seems you can't access this page.">
    You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser.
    If the issue persists, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
  </Error>
};

export const getTypeFromError = (error: Error | PromiseRejectionEvent['reason']) => {
  if (!error) { return undefined };
  const { TYPE, name } = error.constructor;
  return TYPE && typeof TYPE === 'string' ? TYPE : name;
};

export const ErrorBoundary = ({
  children,
  renderFallback,
  fallback = defaultErrorFallbacks['generic'],
  catchUnhandledRejections = true,
  windowImpl = window,
  sentryDsn,
  sentryInit,
  ...props
}: ErrorBoundaryProps & {
  renderFallback?: boolean;
  catchUnhandledRejections?: boolean;
  windowImpl?: Window | Pick<Window, 'addEventListener' | 'removeEventListener'>;
  sentryDsn?: string;
  sentryInit?: Sentry.BrowserOptions;
  errorFallbacks?: { [_: string]: JSX.Element }
}) => {
  const [error, setError] = React.useState<SentryError & { type?: string } | null>(null);
  const errorFallbacks = { ...defaultErrorFallbacks, ...props.errorFallbacks };
  const typedFallback = error?.type ? errorFallbacks[error.type] : undefined;

  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? (typedFallback || fallback) : <>{children}</>;

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
        error: {
          name: e.type,
          message: e.reason?.toString(),
        },
        type: getTypeFromError(e.reason),
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
          error,
          // If the error is a custom error from ts-utils, use the custom type instead of 'Error'
          type: getTypeFromError(error),
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

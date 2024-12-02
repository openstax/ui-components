import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent, ErrorPropTypes } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';
import { getTypeFromError } from '../utils';

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

export const ErrorBoundary = ({
  children,
  renderFallback,
  fallback = defaultErrorFallbacks['generic'],
  sentryDsn,
  sentryInit,
  ...props
}: ErrorBoundaryProps & {
  renderFallback?: boolean;
  sentryDsn?: string;
  sentryInit?: Sentry.BrowserOptions;
  errorFallbacks?: { [_: string]: JSX.Element }
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const errorFallbacks: { [_: string]: JSX.Element } = { ...defaultErrorFallbacks, ...props.errorFallbacks };
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // There are two references to the render element here because the Sentry fallback (and
  // onError) are not used for unhandledrejection events. To support those events, we provide
  // setError in a context to reuse the same error state and render logic.
  return <ErrorContext.Provider value={{ error, setError }}>
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

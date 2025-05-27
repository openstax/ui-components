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
  'SessionExpiredError': {
    element: (
      <Error heading='Your session has expired'>
        Please refresh your browser and try again. If this doesn't solve the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
      </Error>
    ),
    level: 'warning'
  } as const,
  'UnauthorizedError': <Error heading="Uh-oh, it seems you can't access this page.">
    You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser.
    If the issue persists, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
  </Error>
};

interface FallbackWithOptions {
  element: JSX.Element
  level?: Sentry.SeverityLevel
}

export interface ErrorFallback {
  [_: string]: JSX.Element | FallbackWithOptions
}

const isFallbackWithOptions = (thing: unknown): thing is FallbackWithOptions => (
  typeof thing == 'object' && thing !== null && 'element' in thing
);

const getFallbackElement = (entry: JSX.Element | FallbackWithOptions | undefined) => (
  isFallbackWithOptions(entry) ? entry.element : entry
);

const getFallbackLevel = (entry: JSX.Element | FallbackWithOptions | undefined) => (
  isFallbackWithOptions(entry) ? entry.level : undefined
);

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
  errorFallbacks?: ErrorFallback,
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const errorFallbacks: ErrorFallback = { ...defaultErrorFallbacks, ...props.errorFallbacks };
  const fallbackEntry = error?.type ? errorFallbacks[error.type] : undefined
  const typedFallback = getFallbackElement(fallbackEntry);
  const initCalled = React.useRef(false);

  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? (typedFallback || fallback) : <>{children}</>;

  React.useEffect(() => {
    if (!sentryDsn && !sentryInit) {
      return;
    }
    if (initCalled.current) {
      throw 'Sentry.init was already called';
    }

    initCalled.current = true;
    Sentry.init(sentryInit || {
      dsn: sentryDsn,
      environment: window.location.hostname,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.extraErrorDataIntegration()
      ],
      tracesSampleRate: 0.1,
    });
  }, [sentryDsn, sentryInit]);

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
      beforeCapture={(scope, error) => {
        // We need to set the level here, before `setError` is called in `onError`
        // throw -> beforeCapture -> error captured -> onError -> setError -> etc.
        if (error) {
          const type = getTypeFromError(error);
          const errorLevel = getFallbackLevel(errorFallbacks[type]);
          if (errorLevel) {
            scope.setLevel(errorLevel);
          }
        }
      }}
      {...props}
      onReset={() => setError(null)}
    >
      {renderElement}
    </Sentry.ErrorBoundary>
  </ErrorContext.Provider>;
}

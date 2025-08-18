import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent, ErrorPropTypes } from './Error';
import type { ErrorBoundaryProps } from '@sentry/react/types/errorboundary';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';
import { getTypeFromError } from '../utils';
import type { User } from '@openstax/ts-utils/services/authProvider';

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

const defaultErrorLevels: { [_: string]: Sentry.SeverityLevel } = {
  'SessionExpiredError': 'warning'
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
  errorLevels?: { [_: string]: Sentry.SeverityLevel }
  userUuid?: string; // Optional user UUID to set in Sentry
}) => {
  const [error, setError] = React.useState<SentryError | null>(null);
  const errorFallbacks: { [_: string]: JSX.Element } = { ...defaultErrorFallbacks, ...props.errorFallbacks };
  const errorLevels = { ...defaultErrorLevels, ...props.errorLevels };
  const typedFallback = error?.type ? errorFallbacks[error.type] : undefined;
  const initCalled = React.useRef(false);

  // Optionally re-render with the children so they can display inline errors with <ErrorMessage />
  const renderElement = error && renderFallback ? (typedFallback || fallback) : <>{children}</>;

  type FrontendConfigType = {
    releaseId: string;
    [key: string]: unknown; // any other properties, can vary depending on the frontend config repository
  };

  type WindowWithUserData = Window & { _OX_USER_DATA?: User, _OX_FRONTEND_CONFIG?: FrontendConfigType }

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
      release: (window as WindowWithUserData)._OX_FRONTEND_CONFIG?.releaseId,
      environment: window.location.hostname,
      initialScope: {
        user: { uuid: (window as WindowWithUserData)._OX_USER_DATA?.uuid },
      },
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.extraErrorDataIntegration()
      ],
      tracesSampleRate: 0.1,
    });
  }, [sentryDsn, sentryInit]);

  React.useEffect(() => {
    if (initCalled.current && (window as WindowWithUserData)._OX_USER_DATA?.uuid !== props.userUuid) {
      Sentry.setUser({ uuid: props.userUuid });
    }
  }, [props.userUuid]);

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
        // throw -> beforeCapture -> onError -> error captured -> setError -> etc.
        if (error) {
          const type = getTypeFromError(error);
          const errorLevel = errorLevels[type];
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

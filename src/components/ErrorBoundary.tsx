import * as Sentry from '@sentry/react';
import React from 'react';
import { Error as ErrorComponent, ErrorPropTypes } from './Error';
import { ErrorContext } from '../contexts';
import { SentryError } from '../types';
import { getTypeFromError } from '../utils';
import type { User } from '@openstax/ts-utils/services/authProvider';

const ErrorDisplay = ({ children, ...props }: React.PropsWithChildren<ErrorPropTypes>) =>
  <ErrorComponent data-testid='error-fallback' {...props}>{children}</ErrorComponent>;

const defaultErrorFallbacks = {
  'generic': <ErrorDisplay data-testid='error-fallback' />,
  'SessionExpiredError': <ErrorDisplay heading='Your session has expired'>
    Please refresh your browser and try again. If this doesn't solve the problem, visit our <a href="https://help.openstax.org" target="_blank">Support Center</a>.
  </ErrorDisplay>,
  'UnauthorizedError': <ErrorDisplay heading="Uh-oh, it seems you can't access this page.">
    You may not have the required permissions or may have been logged out. Try refreshing the page or restarting your browser.
    If the issue persists, visit our <a href="https://help.openstax.org" target="_blank">Support Center</a>.
  </ErrorDisplay>
};

const defaultErrorLevels: { [_: string]: Sentry.SeverityLevel } = {
  'SessionExpiredError': 'warning'
};

export const ErrorBoundary = ({
  children,
  includeDefaultHandlers = true,
  sentryDsn,
  sentryInit,
  ...props
}: {
  includeDefaultHandlers?: boolean;
  sentryDsn?: string;
  sentryInit?: Sentry.BrowserOptions;
  errorFallbacks?: { [_: string]: JSX.Element };
  errorLevels?: { [_: string]: Sentry.SeverityLevel };
  userUuid?: string; // Optional user UUID to set in Sentry
  children?: React.ReactNode;
}) => {
  const parentContext = React.useContext(ErrorContext);
  const [error, setThisError] = React.useState<(SentryError & {isInline?: boolean}) | null>(null);
  const errorFallbacks: { [_: string]: JSX.Element } = React.useMemo(() => ({
    ...(includeDefaultHandlers ? defaultErrorFallbacks : {}),
    ...props.errorFallbacks
  }), [includeDefaultHandlers, props.errorFallbacks]);
  const errorLevels = React.useMemo(() => ({
    ...(includeDefaultHandlers ? defaultErrorLevels : {}),
    ...props.errorLevels
  }), [includeDefaultHandlers, props.errorLevels]);
  const typedFallback = error?.type ? errorFallbacks[error.type] : undefined;
  const initCalled = React.useRef(false);

  type FrontendConfigType = {
    releaseId: string;
    [key: string]: unknown; // any other properties, can vary depending on the frontend config repository
  };

  type WindowWithUserData = Window & { _OX_USER_DATA?: User, _OX_FRONTEND_CONFIG?: FrontendConfigType }

  React.useEffect(() => {
    if (!sentryDsn && !sentryInit) {
      return;
    }
    // init once; re-runs (StrictMode double-invoke, prop change) are a no-op
    // child boundaries do not re-setup
    if (initCalled.current || parentContext.initialized) {
      return;
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
  }, [sentryDsn, sentryInit, parentContext.initialized]);

  React.useEffect(() => {
    if (initCalled.current && (window as WindowWithUserData)._OX_USER_DATA?.uuid !== props.userUuid) {
      Sentry.setUser({ uuid: props.userUuid });
    }
  }, [props.userUuid]);

  const setError = React.useCallback((input: unknown, componentStack?: string, isInline?: boolean) => {

    if (input === null) {
      setThisError(null);

      if (parentContext.initialized) {
        parentContext.setError(null);
      }
      return;
    }

    const error = input instanceof Error ? input : new Error(String(input));
    const type = getTypeFromError(error);

    if (type in errorFallbacks || !parentContext.initialized) {
      setThisError({
        error, type, componentStack, isInline,
        // the level goes on the scope because sentry's capture hint disallows
        // mixing scope fields with the mechanism below
        eventId: Sentry.withScope((scope) => {
          scope.setLevel(errorLevels[type] ?? 'error');

          // captureReactException grafts the component stack onto the event as a
          // synthetic cause error; Sentry.ErrorBoundary used to do this for us
          return componentStack
            ? Sentry.captureReactException(error, { componentStack }, {
              mechanism: { handled: true, type: 'auto.function.react.error_boundary' }
            })
            : Sentry.captureException(error);
        })
      });
    } else {
      // isInline intentionally does not bubble; it only exists to skip a
      // RenderErrorCatcher whose subtree react is tearing down, and the parent's
      // catcher is intact because this boundary is the one that caught the error
      parentContext.setError(input, componentStack);
    }
  }, [errorFallbacks, errorLevels, parentContext]);

  const contextValue = React.useMemo(() => ({
    error,
    setError,
    initialized: true
  }), [error, setError]);

  const errorDisplay = typedFallback || defaultErrorFallbacks.generic;

  // ErrorBoundary is not an actual ErrorBoundary becuase writing class components
  // is too annoying, we delegate just the catching part to RenderErrorCatcher
  return <ErrorContext.Provider value={contextValue}>
    {error && error.isInline
      ? errorDisplay 
      : <RenderErrorCatcher catch={setError}>{error ? errorDisplay : children}</RenderErrorCatcher>
    }
  </ErrorContext.Provider>;
};

type RenderErrorCatcherProps = {
  catch: (error: unknown, componentStack: string, isInline: boolean) => void;
  children?: React.ReactNode;
};
// according to https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
// error boundaries cannot be functional components; this is the implementation from that doc
class RenderErrorCatcher extends React.Component<RenderErrorCatcherProps, { hasError: boolean }> {
  constructor(props: RenderErrorCatcherProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    this.props.catch(error, info.componentStack, true);
  }

  render() {
    if (this.state.hasError) {
      // this is never used, except perhaps interstitially during state updates.
      // parent renders the typed fallback
      return null;
    }

    return this.props.children ?? null;
  }
}

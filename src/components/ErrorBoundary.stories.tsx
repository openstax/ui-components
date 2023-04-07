import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import * as Sentry from '@sentry/react';
import { ErrorMessage } from "./ErrorMessage";

Sentry.init({
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Integrations.GlobalHandlers({
      onerror: true,
      onunhandledrejection: true,
    }),
  ],
});

const ErrorComponent = ({ doThrow, setShowError }: {
  doThrow: boolean;
  setShowError: React.Dispatch<boolean>
}) => {

  React.useEffect(() => {
    if (doThrow) {
      setShowError(false);
      throw new Error('Test Error');
    }
  }, [doThrow]);

  return null;
};

export const InlineMessages = () => {
  const [showError, setShowError] = React.useState(false);

  return <ErrorBoundary>
    <ErrorMessage />
    <ErrorComponent
      doThrow={showError}
      setShowError={setShowError}
    />
    <button onClick={() => { setShowError(true) }}>Throw Error</button>
    <button onClick={() => {
      Promise.reject( Error('Test Error') )
    }}>Reject Promise</button>
  </ErrorBoundary>
};

export const FallbackComponent_Default = () => {
  const [showError, setShowError] = React.useState(false);

  return <ErrorBoundary renderFallback>
    <ErrorComponent
      doThrow={showError}
      setShowError={setShowError}
    />
    <button onClick={() => { setShowError(true) }}>Throw Error</button>
    <button onClick={() => {
      Promise.reject( Error('Test Error') );
    }}>Reject Promise</button>
  </ErrorBoundary>
};

export const FallbackComponent_Custom = () => {
  const [showError, setShowError] = React.useState(false);

  return <ErrorBoundary
    renderFallback
    fallback={(props) => (
      <>
      <h2>This is a custom error fallback</h2>
        <p>{props && props.error.toString()}</p>
        {props && props.resetError ? <button onClick={props && props.resetError}>Reset</button> : null}
      </>
    )}>
    <ErrorComponent
      doThrow={showError}
      setShowError={setShowError}
    />
    <button onClick={() => { setShowError(true) }}>Throw Error</button>
    <button onClick={() => {
      Promise.reject( Error('Test Error') )
    }}>Reject Promise</button>
  </ErrorBoundary>
};

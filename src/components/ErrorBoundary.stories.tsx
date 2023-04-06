import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import * as Sentry from '@sentry/react';
import { ErrorMessage } from "./ErrorMessage";

Sentry.init({
  // dsn: "https://8d362df880a448a090ab4e1a2d9b885e@o484761.ingest.sentry.io/4504951308222464",
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Integrations.GlobalHandlers({
      onerror: true,
      onunhandledrejection: true,
    }),
  ],
  tracesSampleRate: 1.0,
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

export const Default = () => {
  const [showError, setShowError] = React.useState(false);

  return <ErrorBoundary >
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

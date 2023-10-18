import React from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { ErrorMessage } from "./ErrorMessage";
import { UnauthorizedError, SessionExpiredError } from "@openstax/ts-utils/errors";

const ErrorComponent = ({ doThrow, setShowError, error: error, errorMessage }: {
  doThrow: boolean;
  setShowError: React.Dispatch<boolean>;
  error?: Error;
  errorMessage?: string;
}) => {

  React.useEffect(() => {
    if (doThrow) {
      setShowError(false);
      throw(
        error instanceof Error ? error : new Error(errorMessage || 'Test Error')
      );
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

export const Fallback_GenericError_Default = () => {
  const [showError, setShowError] = React.useState(false);

  return <ErrorBoundary renderFallback sentryDsn="https://0@o0.ingest.sentry.io/0">
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

export const Fallback_GenericError_Custom = () => {
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

export const Fallback_SpecialError = () => {
  const [showError1, setShowError1] = React.useState(false);
  const [showError2, setShowError2] = React.useState(false);

  return <ErrorBoundary
    renderFallback
  >
    <ErrorComponent
      doThrow={showError1}
      setShowError={setShowError1}
      error={new SessionExpiredError}
    />
    <ErrorComponent
      doThrow={showError2}
      setShowError={setShowError2}
      error={new UnauthorizedError}
    />
    <button onClick={() => { setShowError1(true) }}>Throw SessionExpiredError</button>
    <br />
    <button onClick={async () => {
      throw new SessionExpiredError();
    }}>Throw Async SessionExpiredError</button>
    <br />
    <button onClick={() => { setShowError2(true) }}>Throw UnauthorizedError</button>
  </ErrorBoundary>
};

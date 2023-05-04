import React from "react";
import { ErrorBoundary, defaultErrorFallbacks } from "./ErrorBoundary";
import { ErrorMessage } from "./ErrorMessage";
import { InvalidRequestError, SessionExpiredError } from '@openstax/ts-utils/errors';

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

export const CustomErrorFallbacks = () => {
  const [showError1, setShowError1] = React.useState(false);
  const [showError2, setShowError2] = React.useState(false);

  return <ErrorBoundary
    renderFallback
    errorFallbacks={{
      ...defaultErrorFallbacks,
      'InvalidRequestError': <h2>Custom fallback matching on InvalidRequestError</h2>
    }}
  >
    <ErrorComponent
      doThrow={showError1}
      setShowError={setShowError1}
      error={new SessionExpiredError}
    />
    <ErrorComponent
      doThrow={showError2}
      setShowError={setShowError2}
      error={new InvalidRequestError}
    />
    <button onClick={() => { setShowError1(true) }}>Throw SessionExpiredError</button>
    <br />
    <button onClick={async () => {
      throw new SessionExpiredError();
    }}>Throw Async SessionExpiredError</button>
    <br />
    <button onClick={() => { setShowError2(true) }}>Throw InvalidRequestError</button>
  </ErrorBoundary>
};

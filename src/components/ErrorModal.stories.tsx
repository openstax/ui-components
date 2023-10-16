import React from "react";
import { ErrorModal } from "./ErrorModal";
import { ErrorBoundary } from "./ErrorBoundary";

export const Default = () => {
  React.useEffect(() => {
    Promise.reject('Test error for modal');
  }, []);

  const [show, setShow] = React.useState(true);

  return <ErrorBoundary sentryDsn="https://0@o0.ingest.sentry.io/0">
    <ErrorModal
      onModalClose={() => setShow(false)}
      show={show}
    />
  </ErrorBoundary>;
}

import React from "react";
import { ErrorModal } from "./ErrorModal";
import { ErrorBoundary } from "./ErrorBoundary";

export const Default = () => {
  React.useEffect(() => {
    Promise.reject('Test error for modal');
  }, []);

  return <ErrorBoundary sentryDsn="https://0@o0.ingest.sentry.io/0">
    <ErrorModal
      onModalClose={() => {}}
      show={true}
    />
  </ErrorBoundary>;
}

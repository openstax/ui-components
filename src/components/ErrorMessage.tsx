import React from "react";
import { ErrorContext } from "./ErrorBoundary";

export const ErrorMessage = ({ message, showEventId = true }: {
  message?: string;
  showEventId?: boolean;
}) => {
  const context = React.useContext(ErrorContext);

  return <>
    {message || context?.error.message}
    {showEventId ? <div>{context?.eventId}</div> : null}
  </>
};

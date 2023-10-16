import React from "react";
import { ErrorContext } from "../contexts";

export const ErrorMessage = ({ message, showEventId = true }: {
  message?: string;
  showEventId?: boolean;
}) => {
  const { error } = React.useContext(ErrorContext);

  return <>
    {message || error?.error?.message }
    {showEventId ? <div>{error?.eventId}</div> : null}
  </>
};

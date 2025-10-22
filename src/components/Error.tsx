import React from "react";
import * as Sentry from '@sentry/react';
import { BoxBody, BoxHeading, BoxEventId } from "./MessageBox/MessageBox";
import { ErrorContext } from "../contexts";

export interface ErrorPropTypes {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
}

export const Error = ({ heading, children, ...props }: ErrorPropTypes) => {
  const context = React.useContext(ErrorContext);
  const [lastEventId, setLastEventId] = React.useState<string | undefined>(Sentry.lastEventId());

  React.useEffect(() => {
    if (context.error?.eventId || lastEventId) {
      return;
    }

    const intervalId = setInterval(() => {
      const currentEventId = Sentry.lastEventId();
      if (lastEventId !== currentEventId) {
        setLastEventId(currentEventId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [lastEventId, context.error?.eventId]);

  return <BoxBody {...props} data-testid='error'>
    <BoxHeading>{heading ?? `Uh-oh, there's been a glitch`}</BoxHeading>
    {children ?? <>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </>}
    <BoxEventId data-testid='event-id'>{context.error?.eventId || lastEventId}</BoxEventId>
  </BoxBody>
};

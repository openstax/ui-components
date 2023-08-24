import React from "react";
import * as Sentry from '@sentry/react';
import { ModalBody, ModalBodyHeading } from "./Modal";
import styled from "styled-components";
import { colors } from "../../src/theme";
import { ErrorContext } from "../contexts";

export interface ErrorPropTypes {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
}

const EventId = styled.div`
  font-size: 1.4rem;
  color: ${colors.palette.neutralMedium};
  margin-top: 1.6rem;
`;

export const Error = ({ heading, children, ...props }: ErrorPropTypes) => {
  const context = React.useContext(ErrorContext);
  const [lastEventId, setLastEventId] = React.useState<string | undefined>(Sentry.lastEventId());

  React.useEffect(() => {
    if (context?.eventId) {
      return;
    }

    const intervalId = setInterval(() => {
      const currentEventId = Sentry.lastEventId();
      if (lastEventId !== currentEventId) {
        setLastEventId(currentEventId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [lastEventId, context?.eventId]);

  return <ModalBody {...props} data-testid='error'>
    <ModalBodyHeading>{heading ?? `Uh-oh, there's been a glitch`}</ModalBodyHeading>
    {children ?? <>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </>}
    <EventId>{context?.eventId || lastEventId}</EventId>
  </ModalBody>
};

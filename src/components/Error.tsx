import React from "react";
import { ModalBody, ModalBodyHeading } from "./Modal";
import styled from "styled-components/macro";
import { colors } from "../../src/theme";
import { ErrorContext } from "../contexts";

export interface ErrorPropTypes {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
}

const EventId = styled.div`
  font-size: 0.9rem;
  color: ${colors.palette.neutralMedium};
  margin-top: 1.2rem;
`;

export const Error = ({ heading, children, ...props }: ErrorPropTypes) => {
  const context = React.useContext(ErrorContext);

  return <ModalBody {...props} data-testid='error'>
    <ModalBodyHeading>{heading ?? `Uh-oh, there's been a glitch`}</ModalBodyHeading>
    {children ?? <>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </>}
    <EventId>{context?.eventId}</EventId>
  </ModalBody>
};

import React from "react";
import { ErrorContext } from "./ErrorBoundary";
import { ModalBody, ModalBodyHeading } from "./Modal";

export interface ErrorPropTypes {
  className?: string;
  children?: React.ReactNode;
  heading?: string;
}

export const Error = ({ heading, children, ...props }: ErrorPropTypes) => {
  const context = React.useContext(ErrorContext);

  return <ModalBody {...props}>
    <ModalBodyHeading>{heading ?? `Uh-oh, there's been a glitch`}</ModalBodyHeading>
    {children ?? <>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </>}
    {context?.eventId}
  </ModalBody>
};

import { ModalBody, ModalBodyHeading } from "./Modal";

export interface ErrorPropTypes {
  className?: string;
}

export const Error = (props: ErrorPropTypes) => {
  return <ModalBody {...props}>
    <ModalBodyHeading>Uh-oh, there's been a glitch</ModalBodyHeading>
    We're not quite sure what went wrong. Restart your browser. If this doesn't solve
    the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
  </ModalBody>
};

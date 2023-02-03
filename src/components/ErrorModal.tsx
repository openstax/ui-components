import { Button } from "./Button";
import { Modal, ModalFooter, ModalPropTypes } from "./Modal";
import { Error } from "./Error";

type ErrorModalProps = React.PropsWithChildren<Omit<ModalPropTypes, 'variant' | 'heading'>>;

export const ErrorModal = (props: ErrorModalProps) => {
  return <Modal {...props} variant='error' heading='Error'>
    <Error />
    <ModalFooter><Button onClick={props.onModalClose}>OK</Button></ModalFooter>
  </Modal>;
};

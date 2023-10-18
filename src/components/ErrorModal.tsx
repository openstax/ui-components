import { Button } from "./Button";
import { Modal, ModalFooter, ModalPropTypes } from "./Modal";
import { Error } from "./Error";

type ErrorModalProps = React.PropsWithChildren<Omit<ModalPropTypes, 'variant'>>;

export const ErrorModal = (props: ErrorModalProps) => {
  const { children, heading, ...modalProps } = props;

  return <Modal {...modalProps} variant='error' heading='Error'>
    <Error heading={heading}>
      {children}
    </Error>
    <ModalFooter><Button onClick={props.onModalClose}>OK</Button></ModalFooter>
  </Modal>;
};

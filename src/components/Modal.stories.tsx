import { ModalBody, Modal } from './Modal';
import { ErrorModal } from './ErrorModal';
import { useState } from 'react';

export const Default = () => {
  const [show, setShow] = useState(true);
  return <Modal heading='test' onModalClose={() => setShow(false)} show={show}>
    <ModalBody>Message</ModalBody>
  </Modal>;
};

export const Error = () => {
  const [show, setShow] = useState(true);
  return <ErrorModal onModalClose={() => setShow(false)} show={show}>
    <ModalBody>Message</ModalBody>
  </ErrorModal>;
};

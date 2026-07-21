import { ModalBody, Modal, ModalBodyHeading, ModalFooter, ModalCard, Mask, ModalWrapper } from './Modal';
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

export const WithBodyHeading = () => {
  const [show, setShow] = useState(true);
  return <Modal heading='Modal with Body Heading' onModalClose={() => setShow(false)} show={show}>
    <ModalBody>
      <ModalBodyHeading>Section Title</ModalBodyHeading>
      <p>This modal demonstrates the ModalBodyHeading component.</p>
    </ModalBody>
  </Modal>;
};

export const WithFooter = () => {
  const [show, setShow] = useState(true);
  return <Modal heading='Modal with Footer' onModalClose={() => setShow(false)} show={show}>
    <ModalBody>
      <p>This modal demonstrates the ModalFooter component.</p>
    </ModalBody>
    <ModalFooter>
      <button onClick={() => setShow(false)}>Cancel</button>
      <button onClick={() => setShow(false)}>Confirm</button>
    </ModalFooter>
  </Modal>;
};

export const CustomModalComposition = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <Mask isDismissable onOpenChange={(isOpen) => !isOpen && setShow(false)}>
      <ModalWrapper>
        <div className="card-wrapper">
          <ModalCard>
            <header className="modal-header">
              <h2 slot="title">Custom Modal using Subcomponents</h2>
              <button aria-label="Close" onClick={() => setShow(false)}>✕</button>
            </header>
            <ModalBody>
              <ModalBodyHeading>Custom Composition</ModalBodyHeading>
              <p>This demonstrates using the exported subcomponents (Mask, ModalWrapper, ModalCard, ModalBody) to create a custom modal.</p>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => setShow(false)}>Close</button>
            </ModalFooter>
          </ModalCard>
        </div>
      </ModalWrapper>
    </Mask>
  );
};

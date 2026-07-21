import { useState } from 'react';
import { Overlay, OverlayMask, OverlayWrapper, OverlayCloseButton, OverlayBody } from './Overlay';

export const Default = () => {
  const [show, setShow] = useState(true);
  return <Overlay onClose={() => setShow(false)} show={show}>
    <h1>Overlay</h1>
  </Overlay>;
};

export const WithContent = () => {
  const [show, setShow] = useState(true);
  return <Overlay onClose={() => setShow(false)} show={show}>
    <h1>Overlay Title</h1>
    <p>This overlay demonstrates more complex content with multiple elements.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </Overlay>;
};

export const CustomOverlayComposition = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <OverlayMask isDismissable onOpenChange={(isOpen) => !isOpen && setShow(false)}>
      <OverlayWrapper defaultOpen={true}>
        <OverlayCloseButton onClick={() => setShow(false)} variant="inverted-circle" />
        <OverlayBody>
          <h1>Custom Overlay</h1>
          <p>This demonstrates using the exported subcomponents (OverlayMask, OverlayWrapper, OverlayCloseButton, OverlayBody) to create a custom overlay.</p>
        </OverlayBody>
      </OverlayWrapper>
    </OverlayMask>
  );
};

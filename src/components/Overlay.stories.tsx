import { useState } from 'react';
import { Overlay } from './Overlay';

export const Default = () => {
  const [show, setShow] = useState(true);
  return <Overlay onModalClose={() => setShow(false)} show={show}>
    <h1>Overlay</h1>
  </Overlay>;
};

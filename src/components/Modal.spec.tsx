import { render } from '@testing-library/react';
import { Modal, ModalBody } from './Modal';

describe('Modal', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(
      <Modal onModalClose={jest.fn()} show={true} heading='Heading'>
        <ModalBody>Modal Body</ModalBody>
      </Modal>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('hides', () => {
    render(
      <Modal onModalClose={jest.fn()} show={false} heading='Heading'>
        <ModalBody>Modal Body</ModalBody>
      </Modal>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });
});

import { act, render } from '@testing-library/react';
import { Modal, ModalBody } from './Modal';
import userEvent from '@testing-library/user-event';

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

  it('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    await act(async() => {
      const overlay = render(<Modal heading='Heading' show onModalClose={onClose} />);
      await user.type(overlay.container, '{esc}');
    });

    expect(onClose).toHaveBeenCalled();
  });
});

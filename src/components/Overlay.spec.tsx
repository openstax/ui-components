import { act, render } from '@testing-library/react';
import { Overlay } from './Overlay';
import userEvent from '@testing-library/user-event';

describe('Overlay', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(
      <Overlay onClose={jest.fn()} show={true}>
        Inner content
      </Overlay>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('hides', () => {
    render(
      <Overlay onClose={jest.fn()} show={false}>
        Inner content
      </Overlay>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    await act(async() => {
      const overlay = render(<Overlay show onClose={onClose} />);
      await user.type(overlay.container, '{esc}');
    });

    expect(onClose).toHaveBeenCalled();
  });
});

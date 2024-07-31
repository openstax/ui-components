import { render } from '@testing-library/react';
import { Overlay } from './Overlay';

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
});

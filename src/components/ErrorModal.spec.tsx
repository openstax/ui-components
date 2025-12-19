import { render } from '@testing-library/react';
import { ErrorModal } from './ErrorModal';

describe('Modal', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(
      <ErrorModal onModalClose={jest.fn()} show={true} />, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('matches snapshot when heading and children are set', () => {
    render(
      <ErrorModal heading='Scores not sent' onModalClose={jest.fn()} show={true}>
        There was an issue syncing your scores. Please try again in a few minutes. If the issue persists, visit our
        <a href="https://help.openstax.org" target="_blank" rel="noreferrer">Support Center</a>.
      </ErrorModal>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });
});

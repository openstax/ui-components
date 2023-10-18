import renderer from 'react-test-renderer';
import { ErrorModal } from './ErrorModal';

describe('Modal', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <ErrorModal onModalClose={jest.fn()} show={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when heading and children are set', () => {
    const tree = renderer.create(
      <ErrorModal heading='Scores not sent' onModalClose={jest.fn()} show={true}>
        There was an issue syncing your scores. Please try again in a few minutes. If the issue persists, visit our
        <a href="https://openstax.secure.force.com/help" target="_blank" rel="noreferrer">Support Center</a>.
      </ErrorModal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

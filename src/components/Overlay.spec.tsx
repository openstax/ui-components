import renderer from 'react-test-renderer';
import { Overlay } from './Overlay';

describe('Overlay', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Overlay onClose={jest.fn()} show={true}>
        Inner content
      </Overlay>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <Overlay onClose={jest.fn()} show={false}>
        Inner content
      </Overlay>
    ).toJSON();
    expect(tree).toBeNull();
  });
});

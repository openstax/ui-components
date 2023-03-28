import renderer from 'react-test-renderer';
import { Error } from './Error';

describe('Error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Error />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can override text', () => {
    const tree = renderer.create(
      <Error heading='An important heading'>Body text</Error>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

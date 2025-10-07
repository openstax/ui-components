import { DismissIcon } from './DismissIcon';
import renderer from 'react-test-renderer';

describe('DismissIcon', () => {
  it('matches body snapshot', () => {
    const tree = renderer.create(
      <DismissIcon />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches body snapshot (aria-hidden)', () => {
    const tree = renderer.create(
      <DismissIcon aria-hidden='true' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { Checkbox } from './Checkbox';
import renderer from 'react-test-renderer';

describe('Checkbox', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Checkbox>Click Me</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles options', () => {
    const tree = renderer.create(
      <Checkbox bold size={2} variant='light'>Click Me</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

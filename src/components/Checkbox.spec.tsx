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

  it('allows setting props on label', () => {
    const tree = renderer.create(
      <Checkbox bold size={2} variant='light' labelProps={{ "aria-label": "custom label"}}>
        Click Me
      </Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('handles disabled state', () => {
    const tree = renderer.create(
      <Checkbox disabled>Click Me</Checkbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { Radio } from './Radio';
import renderer from 'react-test-renderer';

describe('Radio', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Radio>Click Me</Radio>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches disabled snapshot', () => {
    const tree = renderer.create(
      <Radio disabled>Disabled</Radio>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

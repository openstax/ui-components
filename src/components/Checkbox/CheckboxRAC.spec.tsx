import { CheckboxRAC } from './CheckboxRAC';
import renderer from 'react-test-renderer';

describe('CheckboxRAC', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <CheckboxRAC>Click Me</CheckboxRAC>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles options', () => {
    const tree = renderer.create(
      <CheckboxRAC bold size={2} variant='light'>Click Me</CheckboxRAC>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles disabled state', () => {
    const tree = renderer.create(
      <CheckboxRAC isDisabled>Click Me</CheckboxRAC>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('supports slot="selection"', () => {
    const tree = renderer.create(
      <CheckboxRAC slot="selection">Click Me</CheckboxRAC>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
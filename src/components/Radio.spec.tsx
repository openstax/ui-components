import { Radio } from './Radio';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

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

  it('calls onFocus handler', () => {
    const { getByRole } = render(<Radio tooltipText='hi'>Click Me</Radio>);
    const radioButton = getByRole('radio');
    fireEvent.focus(radioButton);
  });
});

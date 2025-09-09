import { TreeCheckbox } from './TreeCheckbox';
import renderer from 'react-test-renderer';

describe('TreeCheckbox', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <TreeCheckbox>Click Me</TreeCheckbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles options', () => {
    const tree = renderer.create(
      <TreeCheckbox bold size={2} variant='light'>Click Me</TreeCheckbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles disabled state', () => {
    const tree = renderer.create(
      <TreeCheckbox isDisabled>Click Me</TreeCheckbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles indeterimnate state', () => {
    const tree = renderer.create(
      <TreeCheckbox isIndeterminate>Click Me</TreeCheckbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('supports slot="selection"', () => {
    const tree = renderer.create(
      <TreeCheckbox slot="selection">Click Me</TreeCheckbox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
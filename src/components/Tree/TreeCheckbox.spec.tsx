import { render } from '@testing-library/react';
import { TreeCheckbox } from './TreeCheckbox';
import renderer from 'react-test-renderer';
import type { CSSPropertiesWithVariables } from '../../types';

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

  it('handles indeterminate state', () => {
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

  it('composes a render-callback className', () => {
    render(<TreeCheckbox className={() => 'caller-class'}>Click Me</TreeCheckbox>);

    const label = document.querySelector('.checkbox-label');
    expect(label?.className).toContain('checkbox-label');
    expect(label?.className).toContain('caller-class');
  });

  it('composes a render-callback className with the disabled modifier', () => {
    render(<TreeCheckbox isDisabled className={() => 'caller-class'}>Click Me</TreeCheckbox>);

    const label = document.querySelector('.checkbox-label');
    expect(label?.className).toContain('checkbox-label--disabled');
    expect(label?.className).toContain('caller-class');
  });

  it('keeps composing a string className', () => {
    render(<TreeCheckbox className='caller-class'>Click Me</TreeCheckbox>);

    const label = document.querySelector('.checkbox-label');
    expect(label?.className).toContain('checkbox-label');
    expect(label?.className).toContain('caller-class');
  });

  it('merges a render-callback style', () => {
    render(
      <TreeCheckbox style={() => ({ color: 'rgb(255, 0, 0)' })}>Click Me</TreeCheckbox>
    );

    const label = document.querySelector('.checkbox-label') as HTMLElement;
    expect(label.style.color).toBe('rgb(255, 0, 0)');
    expect(label.style.getPropertyValue('--checkbox-size')).toBe('1.6rem');
  });

  it('lets a render-callback style override the wrapper variables', () => {
    render(
      <TreeCheckbox
        style={() => ({ '--checkbox-size': '9rem' }) as CSSPropertiesWithVariables}
      >
        Click Me
      </TreeCheckbox>
    );

    const label = document.querySelector('.checkbox-label') as HTMLElement;
    expect(label.style.getPropertyValue('--checkbox-size')).toBe('9rem');
  });

  it('keeps merging an object style, caller last', () => {
    render(
      <TreeCheckbox
        style={{ color: 'rgb(0, 0, 255)', '--checkbox-size': '9rem' } as CSSPropertiesWithVariables}
      >
        Click Me
      </TreeCheckbox>
    );

    const label = document.querySelector('.checkbox-label') as HTMLElement;
    expect(label.style.color).toBe('rgb(0, 0, 255)');
    expect(label.style.getPropertyValue('--checkbox-size')).toBe('9rem');
    expect(label.style.getPropertyValue('--checkbox-font-weight')).toBe('400');
  });
});

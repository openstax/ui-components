import { fireEvent, render, screen } from '@testing-library/react';
import { TreeCheckbox } from './TreeCheckbox';
import { Tree, TreeItem, TreeItemContent } from './Tree';
import { checkboxVariants } from '../Checkbox/sharedCheckboxStyles';
import type { CSSPropertiesWithVariables } from '../../types';

describe('TreeCheckbox', () => {
  const input = () => screen.getByRole('checkbox') as HTMLInputElement;
  const label = () => input().closest('label') as HTMLElement;
  const labelVar = (name: string) => label().style.getPropertyValue(name);

  it('is an enabled, unchecked checkbox with the base label class by default', () => {
    render(<TreeCheckbox>Click Me</TreeCheckbox>);

    expect(screen.getByRole('checkbox', { name: 'Click Me' })).toBeTruthy();
    expect(input().checked).toBe(false);
    expect(input().disabled).toBe(false);
    expect(label().classList.contains('checkbox-label')).toBe(true);
    expect(label().classList.contains('checkbox-label--disabled')).toBe(false);
    expect(label().hasAttribute('data-indeterminate')).toBe(false);
  });

  it('draws the box in the selection slot', () => {
    render(<TreeCheckbox>Click Me</TreeCheckbox>);

    expect(label().querySelector('[data-slot="selection"]')).toBeTruthy();
  });

  it('is regular weight and 1.6rem by default', () => {
    render(<TreeCheckbox>Click Me</TreeCheckbox>);

    expect(labelVar('--checkbox-font-weight')).toBe('400');
    expect(labelVar('--checkbox-size')).toBe('1.6rem');
  });

  it('binds weight and size from its props', () => {
    render(<TreeCheckbox bold size={2}>Click Me</TreeCheckbox>);

    expect(labelVar('--checkbox-font-weight')).toBe('700');
    expect(labelVar('--checkbox-size')).toBe('2rem');
  });

  it.each(['primary', 'light', 'error'] as const)('takes its colours from the %s variant', (variant) => {
    render(<TreeCheckbox variant={variant}>Click Me</TreeCheckbox>);

    const expected = checkboxVariants[variant];
    expect(labelVar('--checkbox-color')).toBe(expected.color);
    expect(labelVar('--checkbox-bg')).toBe(expected.backgroundColor);
    expect(labelVar('--checkbox-border-unchecked')).toBe(expected.unCheckedBorder);
    expect(labelVar('--checkbox-border-checked')).toBe(expected.checkedBorder);
    expect(labelVar('--checkbox-checkmark')).toBe(`url('${expected.backgroundImage}')`);
  });

  it('is disabled, dimmed and draws no checkmark when disabled', () => {
    render(<TreeCheckbox isDisabled>Click Me</TreeCheckbox>);

    expect(input().disabled).toBe(true);
    expect(label().classList.contains('checkbox-label--disabled')).toBe(true);
    expect(labelVar('--checkbox-opacity')).toBe('0.4');
    expect(labelVar('--checkbox-checked-opacity')).toBe('0');
    expect(labelVar('--checkbox-checkmark')).toBe('none');
  });

  it('exposes the mixed state and an icon for it', () => {
    render(<TreeCheckbox isIndeterminate>Click Me</TreeCheckbox>);

    expect(label().getAttribute('data-indeterminate')).toBe('true');
    expect(labelVar('--checkbox-indeterminate-icon')).toContain('url(');
  });

  it('selects its row when it is the selection checkbox in a Tree', () => {
    render(
      <Tree aria-label="Items" selectionMode="multiple">
        <TreeItem id="one" textValue="First">
          <TreeItemContent>
            <TreeCheckbox slot="selection">First</TreeCheckbox>
          </TreeItemContent>
        </TreeItem>
      </Tree>
    );
    const row = screen.getByRole('row');
    expect(row.getAttribute('aria-selected')).toBe('false');

    fireEvent.click(input());

    expect(row.getAttribute('aria-selected')).toBe('true');
    expect(input().checked).toBe(true);
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

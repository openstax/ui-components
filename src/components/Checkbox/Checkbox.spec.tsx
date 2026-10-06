import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { checkboxVariants } from './sharedCheckboxStyles';

describe('Checkbox', () => {
  const input = () => screen.getByRole('checkbox') as HTMLInputElement;
  const label = () => input().closest('label') as HTMLElement;
  const inputVar = (name: string) => input().style.getPropertyValue(name);
  const labelVar = (name: string) => label().style.getPropertyValue(name);

  it('is an enabled, unchecked checkbox named by its children', () => {
    render(<Checkbox>Click Me</Checkbox>);

    expect(screen.getByRole('checkbox', { name: 'Click Me' })).toBeTruthy();
    expect(input().checked).toBe(false);
    expect(input().disabled).toBe(false);
    expect(label().classList.contains('checkbox-label')).toBe(true);
    expect(input().classList.contains('checkbox-input')).toBe(true);
  });

  it('is regular weight and 1.6rem by default', () => {
    render(<Checkbox>Click Me</Checkbox>);

    expect(labelVar('--checkbox-font-weight')).toBe('400');
    expect(inputVar('--checkbox-size')).toBe('1.6rem');
  });

  it('binds weight and size from its props', () => {
    render(<Checkbox bold size={2}>Click Me</Checkbox>);

    expect(labelVar('--checkbox-font-weight')).toBe('700');
    expect(inputVar('--checkbox-size')).toBe('2rem');
  });

  it.each(['primary', 'light', 'error'] as const)('takes its colours from the %s variant', (variant) => {
    render(<Checkbox variant={variant}>Click Me</Checkbox>);

    const expected = checkboxVariants[variant];
    expect(labelVar('--checkbox-color')).toBe(expected.color);
    expect(inputVar('--checkbox-bg')).toBe(expected.backgroundColor);
    expect(inputVar('--checkbox-border-unchecked')).toBe(expected.unCheckedBorder);
    expect(inputVar('--checkbox-border-checked')).toBe(expected.checkedBorder);
    expect(inputVar('--checkbox-checkmark')).toBe(`url('${expected.backgroundImage}')`);
  });

  it('is disabled, dimmed and draws no checkmark when disabled', () => {
    render(<Checkbox disabled>Click Me</Checkbox>);

    expect(input().disabled).toBe(true);
    expect(label().classList.contains('checkbox-label--disabled')).toBe(true);
    expect(input().classList.contains('checkbox-input--disabled')).toBe(true);
    expect(inputVar('--checkbox-opacity')).toBe('0.4');
    expect(inputVar('--checkbox-checkmark')).toBe('none');
  });

  it('passes labelProps to the label alongside its own classes', () => {
    render(<Checkbox labelProps={{ 'aria-label': 'custom label', className: 'caller-label' }}>Click Me</Checkbox>);

    expect(label().getAttribute('aria-label')).toBe('custom label');
    expect(label().classList.contains('checkbox-label')).toBe(true);
    expect(label().classList.contains('caller-label')).toBe(true);
  });
});

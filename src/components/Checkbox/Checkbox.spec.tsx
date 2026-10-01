import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  describe('indeterminate', () => {
    const input = () => screen.getByRole('checkbox') as HTMLInputElement;
    const icon = () => input().style.getPropertyValue('--checkbox-indeterminate-icon');

    it('is not indeterminate by default', () => {
      render(<Checkbox>Click Me</Checkbox>);

      expect(input().indeterminate).toBe(false);
      expect(icon()).toBe('');
    });

    it('sets the mixed state without changing checked', () => {
      render(<Checkbox indeterminate>Click Me</Checkbox>);

      expect(input().indeterminate).toBe(true);
      expect(input().checked).toBe(false);
    });

    it('follows the prop in both directions', () => {
      const { rerender } = render(<Checkbox indeterminate>Click Me</Checkbox>);
      rerender(<Checkbox indeterminate={false}>Click Me</Checkbox>);
      expect(input().indeterminate).toBe(false);

      rerender(<Checkbox indeterminate>Click Me</Checkbox>);
      expect(input().indeterminate).toBe(true);
    });

    it('stays mixed after a click that does not change the prop', () => {
      render(<Checkbox indeterminate onChange={jest.fn()}>Click Me</Checkbox>);

      fireEvent.click(input());

      expect(input().indeterminate).toBe(true);
    });

    it('calls the onClick it was given', () => {
      const onClick = jest.fn();
      render(<Checkbox indeterminate onClick={onClick} onChange={jest.fn()}>Click Me</Checkbox>);

      fireEvent.click(input());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('lets the parent clear it in response to the click', () => {
      const Parent = () => {
        const [mixed, setMixed] = React.useState(true);
        return <Checkbox indeterminate={mixed} checked={!mixed} onChange={() => setMixed(false)}>Click Me</Checkbox>;
      };
      render(<Parent />);

      fireEvent.click(input());

      expect(input().indeterminate).toBe(false);
      expect(input().checked).toBe(true);
    });

    it.each(['primary', 'light', 'error'] as const)('draws a dash for the %s variant', (variant) => {
      render(<Checkbox indeterminate variant={variant}>Click Me</Checkbox>);

      expect(icon()).toContain('url(');
      expect(input().style.getPropertyValue('--checkbox-indeterminate-bg')).not.toBe('');
    });

    it('draws no dash when disabled', () => {
      render(<Checkbox indeterminate disabled>Click Me</Checkbox>);

      expect(input().indeterminate).toBe(true);
      expect(icon()).toBe('none');
    });
  });
});

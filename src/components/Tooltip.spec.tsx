import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { TooltipTrigger } from 'react-aria-components';
import { StyledTooltip, StyledTrigger, TooltipGroup } from './Tooltip';
import { palette } from '../theme/palette';

describe('Tooltip', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  })
  it('matches snapshot', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={false} placement='right'>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses icon', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={false} placement='right' icon={'icon'}>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('className passthrough', () => {
    // openstax/assignments wraps TooltipGroup in styled(), which passes a generated
    // className down; styled-components used to merge it with the tooltip styles.
    it('merges a className passed through TooltipGroup', () => {
      render(<TooltipGroup isOpen={true} placement='right' className='generated-class'>content</TooltipGroup>);

      const tooltip = document.body.querySelector('[role="tooltip"]') as HTMLElement;
      expect(tooltip).toBeTruthy();
      expect(tooltip.classList.contains('tooltip')).toBe(true);
      expect(tooltip.classList.contains('generated-class')).toBe(true);
    });

    it('StyledTrigger keeps the trigger class alongside a caller className', () => {
      const { container } = render(<StyledTrigger className='generated-class'>label</StyledTrigger>);

      const button = container.querySelector('button') as HTMLElement;
      expect(button.classList.contains('tooltip-trigger')).toBe(true);
      expect(button.classList.contains('generated-class')).toBe(true);
    });

    it('StyledTooltip applies the tooltip class and css variables', () => {
      render(
        <TooltipTrigger isOpen={true}>
          <StyledTrigger>trigger</StyledTrigger>
          <StyledTooltip className='generated-class'>content</StyledTooltip>
        </TooltipTrigger>
      );

      const tooltip = document.body.querySelector('[role="tooltip"]') as HTMLElement;
      expect(tooltip).toBeTruthy();
      expect(tooltip.classList.contains('tooltip')).toBe(true);
      expect(tooltip.classList.contains('generated-class')).toBe(true);
      expect(tooltip.style.getPropertyValue('--tooltip-bg')).toBe(palette.white);
    });
  });
  describe('ref forwarding', () => {
    // The styled-components these replaced forwarded refs to the wrapped react-aria
    // component, so consumers holding a ref keep working.
    it('StyledTrigger forwards its ref to the button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<StyledTrigger ref={ref}>label</StyledTrigger>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current?.classList.contains('tooltip-trigger')).toBe(true);
    });

    it('StyledTooltip forwards its ref to the tooltip element', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <TooltipTrigger isOpen={true}>
          <StyledTrigger>trigger</StyledTrigger>
          <StyledTooltip ref={ref}>content</StyledTooltip>
        </TooltipTrigger>
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current?.getAttribute('role')).toBe('tooltip');
      expect(ref.current?.classList.contains('tooltip')).toBe(true);
    });
  });
});

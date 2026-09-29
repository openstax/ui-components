import React from 'react';
import renderer from 'react-test-renderer';
import { act, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  describe('css variable overrides', () => {
    // No cast: the exported prop type accepts custom properties directly.
    it('lets a caller override a documented css variable without a cast', () => {
      render(
        <TooltipTrigger isOpen={true}>
          <StyledTrigger>trigger</StyledTrigger>
          <StyledTooltip style={{ '--tooltip-bg': 'hotpink' }}>content</StyledTooltip>
        </TooltipTrigger>
      );

      const tooltip = document.body.querySelector('[role="tooltip"]') as HTMLElement;
      expect(tooltip.style.getPropertyValue('--tooltip-bg')).toBe('hotpink');
      // the variables the caller did not override are still bound
      expect(tooltip.style.getPropertyValue('--tooltip-color')).toBe(palette.neutralThin);
    });
  });
  describe('name, role and state', () => {
    // CORE-2871. An accessibility evaluation found the trigger exposed as role=button with
    // no action behind it: react-aria's useTooltipTrigger binds pointerdown and keydown to
    // close, so tabbing in opened the tooltip and Enter/Space then dismissed it, and on
    // touch (no hover) the tap closed it before anything was shown. TooltipGroup now owns
    // the trigger state and presses toggle it.
    const trigger = (container: HTMLElement) => container.querySelector('button') as HTMLElement;
    const tooltip = () => document.body.querySelector('[role="tooltip"]') as HTMLElement | null;

    it('describes the trigger with the open tooltip', async () => {
      const user = userEvent.setup();
      const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

      expect(trigger(container).getAttribute('aria-describedby')).toBe(null);

      await act(async () => { await user.tab(); });

      const tip = tooltip();
      expect(tip).toBeTruthy();
      expect(trigger(container).getAttribute('aria-describedby')).toBe(tip?.id);
    });

    // Regression: isOpen used to be spread into Tooltip, whose own isOpen prop makes
    // react-aria build a state detached from the trigger's. The tooltip rendered, but the
    // trigger's state stayed closed so aria-describedby was never emitted at all.
    it('describes the trigger when opened through the isOpen prop', () => {
      const { container } = render(<TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>);

      const tip = tooltip();
      expect(tip).toBeTruthy();
      expect(trigger(container).getAttribute('aria-describedby')).toBe(tip?.id);
    });

    it.each(['{Enter}', ' '])('toggles rather than only dismissing on %s', async (key) => {
      const user = userEvent.setup();
      const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

      await act(async () => { await user.tab(); });
      expect(tooltip()).toBeTruthy();

      await act(async () => { await user.keyboard(key); });
      expect(tooltip()).toBe(null);

      await act(async () => { await user.keyboard(key); });
      const reopened = tooltip();
      expect(reopened).toBeTruthy();
      expect(trigger(container).getAttribute('aria-describedby')).toBe(reopened?.id);
    });

    it('closes on escape', async () => {
      const user = userEvent.setup();
      render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

      await act(async () => { await user.tab(); });
      expect(tooltip()).toBeTruthy();

      await act(async () => { await user.keyboard('{Escape}'); });
      expect(tooltip()).toBe(null);
    });

    it('reports open state changes to a controlling caller', async () => {
      const onOpenChange = jest.fn();
      const user = userEvent.setup();
      render(<TooltipGroup placement='right' onOpenChange={onOpenChange}>Tooltip content</TooltipGroup>);

      await act(async () => { await user.tab(); });

      expect(onOpenChange).toHaveBeenCalledWith(true);
    });

    // react-aria closes the tooltip from its own pointerdown/keydown handler before our
    // onPress completes the toggle, so both halves would otherwise report the same close.
    it('reports each transition once when a press closes the tooltip', async () => {
      const onOpenChange = jest.fn();
      const user = userEvent.setup();
      render(<TooltipGroup placement='right' onOpenChange={onOpenChange}>Tooltip content</TooltipGroup>);

      await act(async () => { await user.tab(); });
      expect(onOpenChange.mock.calls).toEqual([[true]]);

      await act(async () => { await user.keyboard('{Enter}'); });
      expect(tooltip()).toBe(null);
      expect(onOpenChange.mock.calls).toEqual([[true], [false]]);

      await act(async () => { await user.keyboard('{Enter}'); });
      expect(onOpenChange.mock.calls).toEqual([[true], [false], [true]]);
    });

    // The trigger toggles persistent content, so the state it toggles has to be exposed;
    // aria-describedby only supplies the description once it is already open.
    it('exposes the toggle state as aria-expanded', async () => {
      const user = userEvent.setup();
      const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

      expect(trigger(container).getAttribute('aria-expanded')).toBe('false');

      await act(async () => { await user.tab(); });
      expect(trigger(container).getAttribute('aria-expanded')).toBe('true');

      await act(async () => { await user.keyboard('{Enter}'); });
      expect(trigger(container).getAttribute('aria-expanded')).toBe('false');
    });

    it('exposes aria-expanded for a caller controlling isOpen', () => {
      const { container } = render(<TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>);

      expect(trigger(container).getAttribute('aria-expanded')).toBe('true');
    });

    it('names the trigger More information by default', () => {
      const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

      expect(trigger(container).getAttribute('aria-label')).toBe('More information');
    });

    // The default name repeats across every instance on a screen, so callers are expected
    // to name the thing the tooltip is about.
    it('lets a caller name the trigger for its context', () => {
      const { container } = render(
        <TooltipGroup placement='right' ariaLabel='More information about Multiple attempts'>
          Tooltip content
        </TooltipGroup>
      );

      expect(trigger(container).getAttribute('aria-label')).toBe('More information about Multiple attempts');
    });

    // Touch is the case the old component failed hardest — useHover ignores touch, so
    // nothing opened the tooltip, and the tap closed it on pointerdown. Testing it needs a
    // PointerEvent polyfill: jsdom has none, and without it react-aria takes fallback
    // branches that cannot represent touch. useHover's fallback binds onMouseEnter with a
    // hardcoded 'mouse' pointerType (useHover.mjs), so a simulated tap opened the tooltip
    // by "hover" and passed for the wrong reason. With PointerEvent defined, both useHover
    // and usePress take the same branches a real browser does and triggerHoverStart bails
    // on pointerType 'touch', so these assertions are about the press and nothing else.
    describe('touch', () => {
      // Sizes must be non-zero: isVirtualPointerEvent treats a zero-sized pointer as a
      // screen reader, which would route through usePress's virtual-click path instead.
      class TouchPointerEvent extends MouseEvent {
        public pointerId: number;
        public pointerType: string;
        public width: number;
        public height: number;

        constructor(type: string, props: any = {}) {
          super(type, props);
          this.pointerId = props.pointerId ?? 1;
          this.pointerType = props.pointerType ?? 'mouse';
          this.width = props.width ?? 1;
          this.height = props.height ?? 1;
        }
      }

      beforeAll(() => { (window as any).PointerEvent = TouchPointerEvent; });
      afterAll(() => { delete (window as any).PointerEvent; });

      // The event sequence a browser sends for a tap, in order.
      const tap = (el: HTMLElement) => {
        const touch = { pointerType: 'touch', pointerId: 1, button: 0, isPrimary: true };
        act(() => {
          fireEvent.pointerEnter(el, touch);
          fireEvent.pointerDown(el, { ...touch, buttons: 1 });
        });
        act(() => {
          fireEvent.pointerUp(el, { ...touch, buttons: 0 });
          fireEvent.click(el, { detail: 1 });
        });
      };

      it('opens on a tap and toggles shut on the next one', () => {
        const onOpenChange = jest.fn();
        const { container } = render(
          <TooltipGroup placement='right' onOpenChange={onOpenChange}>Tooltip content</TooltipGroup>
        );

        tap(trigger(container));
        const tip = tooltip();
        expect(tip).toBeTruthy();
        expect(trigger(container).getAttribute('aria-describedby')).toBe(tip?.id);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('true');

        tap(trigger(container));
        expect(tooltip()).toBe(null);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('false');

        // once each way — the library's close-on-pointerdown and our onPress are one toggle
        expect(onOpenChange.mock.calls).toEqual([[true], [false]]);
      });

      // Guards the reason the above is meaningful: if hover were opening the tooltip the
      // test would pass without the press working at all.
      it('is not opened by hover, because touch does not hover', () => {
        const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

        act(() => {
          fireEvent.pointerEnter(trigger(container), { pointerType: 'touch', pointerId: 1, isPrimary: true });
        });

        expect(tooltip()).toBe(null);
      });
    });
  });
});

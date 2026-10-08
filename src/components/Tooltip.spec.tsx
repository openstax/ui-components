import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TooltipTrigger } from 'react-aria-components';
import { StyledTooltip, StyledTrigger, TooltipGroup } from './Tooltip';

describe('Tooltip', () => {
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
      // Defaults for the variables the caller did not override live in the stylesheet
      // as var(--x, var(--ox-color-*)), so they are deliberately absent from the inline
      // style. tokens.spec.ts is what keeps those defaults honest.
      expect(tooltip.style.getPropertyValue('--tooltip-color')).toBe('');
    });
  });
  describe('name, role and state', () => {
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

    // isOpen has to reach TooltipTrigger, not Tooltip, or the trigger never gets aria-describedby.
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

    // react-aria closes on pointerdown/keydown before onPress, and the close must be reported once.
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

    // `open` is still true in onPress when the caller has not applied the change yet.
    it('reports a close once when the caller controls isOpen and ignores it', async () => {
      const onOpenChange = jest.fn();
      const user = userEvent.setup();
      render(<TooltipGroup isOpen={true} placement='right' onOpenChange={onOpenChange}>Tooltip content</TooltipGroup>);

      await act(async () => { await user.tab(); });
      onOpenChange.mockClear();

      await act(async () => { await user.keyboard('{Enter}'); });

      expect(onOpenChange.mock.calls).toEqual([[false]]);
    });

    // A screen reader click has no pointerdown or keydown, so react-aria does not close it.
    it('closes on a virtual click and reports the close once', async () => {
      const onOpenChange = jest.fn();
      const user = userEvent.setup();
      const { container } = render(
        <TooltipGroup placement='right' onOpenChange={onOpenChange}>Tooltip content</TooltipGroup>
      );

      await act(async () => { await user.tab(); });
      onOpenChange.mockClear();

      await act(async () => { fireEvent.click(trigger(container), { detail: 0 }); });

      expect(tooltip()).toBe(null);
      expect(onOpenChange.mock.calls).toEqual([[false]]);
    });

    // aria-describedby only describes an open tooltip, so the toggle state needs aria-expanded.
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

    it('lets a caller name the trigger for its context', () => {
      const { container } = render(
        <TooltipGroup placement='right' ariaLabel='More information about Multiple attempts'>
          Tooltip content
        </TooltipGroup>
      );

      expect(trigger(container).getAttribute('aria-label')).toBe('More information about Multiple attempts');
    });

    // defaultOpen only seeds the state, and like isOpen it has to reach TooltipTrigger, not Tooltip.
    describe('structure', () => {
      it('has a button-type trigger with the default info icon hidden from assistive tech', () => {
        const { container } = render(<TooltipGroup placement='right'>Tooltip content</TooltipGroup>);

        const button = trigger(container);
        expect(button.getAttribute('type')).toBe('button');
        expect(button.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true');
        expect(button.querySelector('img')).toBe(null);
      });

      it('uses a caller icon in place of the default', () => {
        const { container } = render(<TooltipGroup placement='right' icon='icon.png'>Tooltip content</TooltipGroup>);

        const img = trigger(container).querySelector('img');
        expect(img?.getAttribute('src')).toBe('icon.png');
        expect(img?.getAttribute('alt')).toBe('');
        expect(img?.getAttribute('aria-hidden')).toBe('true');
        expect(trigger(container).querySelector('svg')).toBe(null);
      });

      it('shows the content and an arrow when open', () => {
        render(<TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>);

        expect(tooltip()?.textContent).toBe('Tooltip content');
        expect(tooltip()?.querySelector('.react-aria-OverlayArrow svg')).toBeTruthy();
      });

      it('renders no tooltip and does not describe the trigger when closed', () => {
        const { container } = render(<TooltipGroup isOpen={false} placement='right'>Tooltip content</TooltipGroup>);

        expect(tooltip()).toBe(null);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('false');
        expect(trigger(container).getAttribute('aria-describedby')).toBe(null);
      });
    });

    describe('defaultOpen', () => {
      it('starts open and describes the trigger', () => {
        const { container } = render(<TooltipGroup defaultOpen={true} placement='right'>Tooltip content</TooltipGroup>);

        const tip = tooltip();
        expect(tip).toBeTruthy();
        expect(trigger(container).getAttribute('aria-describedby')).toBe(tip?.id);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('true');
      });

      it('starts closed when false', () => {
        const { container } = render(<TooltipGroup defaultOpen={false} placement='right'>Tooltip content</TooltipGroup>);

        expect(tooltip()).toBe(null);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('false');
      });

      it('hands control to the user after the initial render', async () => {
        const onOpenChange = jest.fn();
        const user = userEvent.setup();
        const { container } = render(
          <TooltipGroup defaultOpen={true} placement='right' onOpenChange={onOpenChange}>
            Tooltip content
          </TooltipGroup>
        );

        await act(async () => { await user.keyboard('{Escape}'); });

        expect(tooltip()).toBe(null);
        expect(trigger(container).getAttribute('aria-expanded')).toBe('false');
        expect(onOpenChange.mock.calls).toEqual([[false]]);
      });

      it('isOpen pins the state instead, when the caller ignores the change', async () => {
        const user = userEvent.setup();
        const { container } = render(<TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>);

        await act(async () => { await user.keyboard('{Escape}'); });

        expect(tooltip()).toBeTruthy();
        expect(trigger(container).getAttribute('aria-expanded')).toBe('true');
      });
    });

    // jsdom has no PointerEvent, so react-aria falls back to branches that cannot represent
    // touch (useHover hardcodes 'mouse'). The polyfill puts useHover and usePress on a browser's branches.
    describe('touch', () => {
      // Non-zero sizes: a zero-sized pointer is treated as a screen reader (a virtual click).
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

        expect(onOpenChange.mock.calls).toEqual([[true], [false]]);
      });

      // Without this, hover could be opening the tooltip and the tap test would pass anyway.
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

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = (props: { disabled?: boolean; variant: 'light' | 'primary' | 'secondary'; width?: string }) => (
    <DropdownMenu
      disabled={props.disabled}
      id='test-menu'
      text='Test Menu'
      variant={props.variant}
      width={props.width}
    >
      <DropdownMenuItem onAction={jest.fn()}>Test Menu Item 1</DropdownMenuItem>
      <DropdownMenuItem onAction={jest.fn()}>Test Menu Item 2</DropdownMenuItem>
    </DropdownMenu>
  );

  it('matches snapshots', () => {
    expect(render(<TestMenu variant='primary'/>).asFragment()).toMatchSnapshot();
    expect(render(<TestMenu variant='light' width={'20rem'}/>).asFragment()).toMatchSnapshot();
  });

  describe('when open', () => {
    const renderOpenMenu = async () => {
      const user = userEvent.setup();
      render(
        <>
          <TestMenu variant='primary'/>
          <p>Page content</p>
        </>
      );

      const button = screen.getByRole('button', { name: 'Test Menu' });
      await user.click(button);
      const menu = await screen.findByRole('menu');

      return { user, button, menu };
    };

    it('does not wrap the menu in a dialog', async () => {
      const { button, menu } = await renderOpenMenu();

      expect(document.querySelector('[role="dialog"]')).toBeNull();
      expect(document.querySelector('[data-testid="underlay"]')).toBeNull();
      expect(menu.getAttribute('aria-labelledby')).toBe(button.id);
    });

    it('closes on Escape and returns focus to the trigger', async () => {
      const { user, button } = await renderOpenMenu();

      await user.keyboard('{Escape}');

      await waitFor(() => expect(screen.queryByRole('menu')).toBeNull());
      // FocusScope restores focus to the trigger on an animation frame.
      await waitFor(() => expect(document.activeElement).toBe(button));
    });

    it('closes on an outside press', async () => {
      await renderOpenMenu();

      // A press on non-focusable page content, with no focus change: what a real browser
      // does, and what useInteractOutside (not blur) has to catch.
      const outside = screen.getByText('Page content');
      fireEvent.mouseDown(outside);
      fireEvent.mouseUp(outside);

      await waitFor(() => expect(screen.queryByRole('menu')).toBeNull());
    });
  });
});

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem, HelpMenuProps, NewTabIcon } from '.';
import { NavBar } from '../NavBar';
import { ChatConfiguration } from './hooks';

describe('HelpMenu', () => {
  let root: HTMLElement;

  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
    jest.useFakeTimers();
    jest.setSystemTime(0);
  });

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  const defaultChildren = (
    <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
      Test Callback
    </HelpMenuItem>
  );

  // Pass `children: null` for cases that need the menu without the default custom item.
  const helpMenu = ({
    contactFormParams = [{key: 'userId', value: 'test'}],
    children = defaultChildren,
    ...props
  }: Partial<HelpMenuProps> = {}) => (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <NavBar logo>
        <HelpMenu contactFormParams={contactFormParams} {...props}>
          {children}
        </HelpMenu>
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );

  const renderHelpMenu = (props?: Partial<HelpMenuProps>) => render(helpMenu(props));

  const businessHoursNow = (): ChatConfiguration['businessHours'] => ({
    businessHoursInfo: {
      businessHours: [
        { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
      ]
    },
    timestamp: Date.now(),
  });

  it('wires the trigger to the menu for assistive tech', async () => {
    renderHelpMenu();

    const button = await screen.findByRole('button', { name: 'Help menu' });
    expect(button.getAttribute('aria-haspopup')).toBe('true');
    expect(button.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(button);
    const menu = await screen.findByRole('menu');

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-controls')).toBe(menu.id);
    expect(menu.getAttribute('aria-labelledby')).toBe(button.id);
  });

  it('moves focus into the menu when it opens', async () => {
    renderHelpMenu();

    const button = await screen.findByRole('button', { name: 'Help menu' });
    fireEvent.click(button);
    const menu = await screen.findByRole('menu');

    // react-aria defers the trigger -> menu focus move to an animation frame when the
    // click looks like a virtual (screen reader) one, which fireEvent.click does. Wait
    // for it to land rather than asserting on the intermediate frame where the trigger
    // still holds focus; waitFor drives the suite's fake timers for us.
    await waitFor(() => expect(document.activeElement).toBe(menu));
    expect(button.hasAttribute('data-focused')).toBe(false);
  });

  it('renders items in order with a roving tabindex', async () => {
    renderHelpMenu();

    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menu');

    const items = screen.getAllByRole('menuitem');
    expect(items.map((item) => item.textContent)).toEqual(['Report an issue', 'Test Callback']);
    expect(items.map((item) => item.getAttribute('tabindex'))).toEqual(['0', '-1']);
  });

  it('positions the popover below the trigger', async () => {
    renderHelpMenu();

    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menu');

    expect(screen.getByRole('dialog').getAttribute('data-placement')).toBe('bottom');
  });

  it('errors if the service is unavailable', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {
      // SILENCE
    });
    const errorResponse: ChatConfiguration['err'] = {
      type: 'test',
      detail: 'test'
    };
    const chatEmbedPath = 'https://example.com/';
    const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, err: errorResponse};

    renderHelpMenu({
      chatConfig: chatEmbedParams,
      contactFormParams: [{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}],
    });
    fireEvent.click(await screen.findByText('Help'));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('replaces button within hours', async () => {
    const chatEmbedPath = 'https://example.com/';
    const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, businessHours: businessHoursNow()};

    renderHelpMenu({
      chatConfig: chatEmbedParams,
      contactFormParams: [{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}],
    });
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /chat with us/i });
  });

  it('calls openChat when Chat With Us is clicked', async () => {
    const chatEmbedPath = 'https://example.com/chat';
    const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, businessHours: businessHoursNow()};

    // Mock window.open to verify it's called by openChat
    const mockWindowOpen = jest.spyOn(window, 'open').mockReturnValue({
      closed: false,
      postMessage: jest.fn(),
    } as any);

    renderHelpMenu({chatConfig: chatEmbedParams, children: null});

    // Open menu
    fireEvent.click(await screen.findByText('Help'));

    // Click Chat With Us
    const chatButton = await screen.findByRole('menuitem', { name: /chat with us/i });
    fireEvent.click(chatButton);

    // Verify window.open was called with chat embed path
    expect(mockWindowOpen).toHaveBeenCalledWith(
      chatEmbedPath,
      '_blank',
      expect.stringContaining('popup=true')
    );

    mockWindowOpen.mockRestore();
  });

  it('shows and hides iframe when Report an issue is clicked', async () => {
    renderHelpMenu({
      contactFormParams: [{key: 'userId', value: 'test123'}, {key: 'email', value: 'user@example.com'}],
    });

    // Open the menu
    fireEvent.click(await screen.findByText('Help'));

    // Click "Report an issue"
    const reportButton = await screen.findByRole('menuitem', { name: /report an issue/i });
    fireEvent.click(reportButton);

    // Verify iframe is shown with correct URL encoding
    const iframe = await screen.findByTitle('Contact form');
    expect(iframe.getAttribute('src')).toContain('https://openstax.org/embedded/contact');
    expect(iframe.getAttribute('src')).toContain('body=userId%3Dtest123');
    expect(iframe.getAttribute('src')).toContain('body=email%3Duser%40example.com');

    // Verify PutAway button exists and click it to close iframe
    const putAwayButton = screen.getByLabelText('close form');
    expect(putAwayButton).toBeTruthy();

    // Click PutAway to close iframe
    fireEvent.click(putAwayButton);

    // Verify iframe is removed
    expect(screen.queryByTitle('Contact form')).toBeNull();
  });

  it('registers message event listener for CONTACT_FORM_SUBMITTED', async () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const {unmount} = renderHelpMenu();

    // Verify the message event listener was registered
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'message',
      expect.any(Function),
      false
    );

    // Unmount and verify cleanup
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'message',
      expect.any(Function),
      false
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('correctly encodes special characters in contactFormUrl', async () => {
    const paramsWithSpecialChars = [
      {key: 'name', value: 'Test & User'},
      {key: 'message', value: 'Hello=World?'},
      {key: 'special', value: 'a+b c/d'},
    ];

    renderHelpMenu({contactFormParams: paramsWithSpecialChars});

    // Open the menu and click Report an issue
    fireEvent.click(await screen.findByText('Help'));
    const reportButton = await screen.findByRole('menuitem', { name: /report an issue/i });
    fireEvent.click(reportButton);

    // Verify iframe URL encodes special characters
    const iframe = await screen.findByTitle('Contact form');
    const src = iframe.getAttribute('src');
    expect(src).toContain('body=name%3DTest%20%26%20User');
    expect(src).toContain('body=message%3DHello%3DWorld%3F');
    expect(src).toContain('body=special%3Da%2Bb%20c%2Fd');
  });

  it('exports NewTabIcon component', () => {
    // The NewTabIcon is exported for use in other components
    expect(NewTabIcon).toBeDefined();
    expect(typeof NewTabIcon).toBe('function');
  });

  it('renders NewTabIcon with correct SVG attributes', () => {
    const { container } = render(<NewTabIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute('role')).toBe('img');
    expect(svg?.getAttribute('width')).toBe('12');
    expect(svg?.getAttribute('height')).toBe('11');

    const title = container.querySelector('title');
    expect(title?.textContent).toBe('new tab');

    const path = container.querySelector('path');
    expect(path).toBeTruthy();
  });

  it('closes iframe when CONTACT_FORM_SUBMITTED message is received', async () => {
    renderHelpMenu();

    // Open the menu and show iframe
    fireEvent.click(await screen.findByText('Help'));
    const reportButton = await screen.findByRole('menuitem', { name: /report an issue/i });
    fireEvent.click(reportButton);

    // Verify iframe is shown
    expect(screen.getByTitle('Contact form')).toBeTruthy();

    // Simulate the CONTACT_FORM_SUBMITTED message event
    const messageEvent = new MessageEvent('message', {
      data: 'CONTACT_FORM_SUBMITTED'
    });
    window.dispatchEvent(messageEvent);

    // Verify iframe is closed
    expect(screen.queryByTitle('Contact form')).toBeNull();
  });

  it('renders custom children in the help menu', async () => {
    const customAction = jest.fn();

    renderHelpMenu({
      children: <HelpMenuItem onAction={customAction}>Custom Action Item</HelpMenuItem>,
    });

    // Open the menu
    fireEvent.click(await screen.findByText('Help'));

    // Verify custom child is rendered
    const customItem = await screen.findByRole('menuitem', { name: /custom action item/i });
    expect(customItem).toBeTruthy();

    // Click it and verify callback is invoked
    fireEvent.click(customItem);
    expect(customAction).toHaveBeenCalledTimes(1);
  });

  it('memoizes chatConfig correctly', async () => {
    const chatEmbedPath = 'https://example.com/';
    const chatConfig: HelpMenuProps['chatConfig'] = { chatEmbedPath, businessHours: businessHoursNow() };

    const { rerender } = renderHelpMenu({chatConfig, children: null});

    // Open menu and verify chat option appears
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /chat with us/i });

    // Rerender with same chatConfig object (should use memoized value)
    rerender(helpMenu({chatConfig, children: null}));

    // Verify chat option still appears
    await screen.findByRole('menuitem', { name: /chat with us/i });
  });

  it('handles undefined chatConfig gracefully', async () => {
    renderHelpMenu({chatConfig: undefined, children: null});

    // Open menu and verify fallback to Report an issue
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /report an issue/i });
  });
});

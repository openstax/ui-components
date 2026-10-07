import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuButton, HelpMenuItem, HelpMenuProps, NewTabIcon } from '.';
import { NavBar } from '../NavBar';
import { ChatConfiguration } from './hooks';
import type { CSSPropertiesWithVariables } from '../../types';

type HelpMenuButtonProps = React.ComponentProps<typeof HelpMenuButton>;

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

  it('names the trigger from its visible label', async () => {
    renderHelpMenu();

    const button = await screen.findByRole('button', { name: 'Help' });

    // The visible label is the whole name; an aria-label would only repeat it.
    expect(button.hasAttribute('aria-label')).toBe(false);
    expect(button.textContent).toBe('Help');
  });

  it('reports its state as a disclosure, not a menu', async () => {
    renderHelpMenu();

    const button = await screen.findByRole('button', { name: 'Help' });
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.hasAttribute('aria-haspopup')).toBe(false);

    fireEvent.click(button);
    const list = await screen.findByRole('list');

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-controls')).toBe(list.id);
    expect(screen.queryByRole('menu')).toBeNull();
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('keeps focus on the button when it opens, so Tab reaches the first item', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    renderHelpMenu();

    const button = await screen.findByRole('button', { name: 'Help' });
    await user.click(button);
    expect(document.activeElement).toBe(button);

    await user.tab();

    expect(document.activeElement).toBe(within(screen.getByRole('list')).getAllByRole('button')[0]);
  });

  it('renders actions as buttons, in order', async () => {
    renderHelpMenu();

    fireEvent.click(await screen.findByText('Help'));

    const items = within(await screen.findByRole('list')).getAllByRole('button');
    expect(items.map((item) => item.textContent)).toEqual(['Report an issue', 'Test Callback']);
    expect(items.every((item) => item.getAttribute('type') === 'button')).toBe(true);
  });

  it('renders links as links that open in a new tab', async () => {
    renderHelpMenu({
      children: <HelpMenuItem href='/faq' target='_blank'>Course Access FAQ</HelpMenuItem>,
    });

    fireEvent.click(await screen.findByText('Help'));

    const link = await screen.findByRole('link', { name: 'Course Access FAQ' });
    expect(link.getAttribute('href')).toBe('/faq');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noreferrer');
  });

  it('lines the list up with the end edge of the button', async () => {
    renderHelpMenu();

    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('list');

    expect(document.querySelector('.navbar-disclosure')?.classList.contains('navbar-disclosure-end')).toBe(true);
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
    await screen.findByRole('button', { name: /chat with us/i });
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
    const chatButton = await screen.findByRole('button', { name: /chat with us/i });
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
    const reportButton = await screen.findByRole('button', { name: /report an issue/i });
    fireEvent.click(reportButton);
    expect(screen.queryByRole('list')).toBeNull();

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
    const reportButton = await screen.findByRole('button', { name: /report an issue/i });
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
    const reportButton = await screen.findByRole('button', { name: /report an issue/i });
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
    const customItem = await screen.findByRole('button', { name: /custom action item/i });
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
    await screen.findByRole('button', { name: /chat with us/i });

    // Rerender with same chatConfig object (should use memoized value)
    rerender(helpMenu({chatConfig, children: null}));

    // Verify chat option still appears
    await screen.findByRole('button', { name: /chat with us/i });
  });

  it('handles undefined chatConfig gracefully', async () => {
    renderHelpMenu({chatConfig: undefined, children: null});

    // Open menu and verify fallback to Report an issue
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('button', { name: /report an issue/i });
  });
});

describe('HelpMenu style passthrough', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  // The components no longer set --help-menu-* inline; those are defaults in HelpMenu.css,
  // guarded by src/theme/tokens.spec.ts. See the note in ProfileMenu's spec.
  const renderButton = (style: HelpMenuButtonProps['style']) => {
    render(<HelpMenuButton label='Help' style={style} />);
    return document.querySelector('.help-menu-button') as HTMLElement;
  };

  describe('HelpMenuButton', () => {
    it('passes a render-callback style through', () => {
      const button = renderButton(() => ({ color: 'rgb(255, 0, 0)' }));

      expect(button.style.color).toBe('rgb(255, 0, 0)');
    });

    it('passes an object style through', () => {
      const button = renderButton({ color: 'rgb(0, 0, 255)' });

      expect(button.style.color).toBe('rgb(0, 0, 255)');
    });

    it('lets the caller override the CSS variables', () => {
      const button = renderButton({
        '--help-menu-button-color': 'rebeccapurple'
      } as CSSPropertiesWithVariables);

      expect(button.style.getPropertyValue('--help-menu-button-color')).toBe('rebeccapurple');
    });
  });
});

describe('HelpMenu className composition', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  it('composes a render-callback className on the button', () => {
    render(<HelpMenuButton label='Help' className={() => 'caller-button'} />);

    const button = document.querySelector('.help-menu-button');
    expect(button?.className).toContain('navbar-button');
    expect(button?.className).toContain('caller-button');
  });

  it('keeps composing a string className on the button', () => {
    render(<HelpMenuButton label='Help' className='caller-button' />);

    expect(document.querySelector('.help-menu-button')?.className).toContain('caller-button');
  });

  it('adds its own class to an item alongside the caller\'s', () => {
    render(
      <HelpMenuButton label='Help' defaultOpen>
        <HelpMenuItem className='caller-item' onAction={jest.fn()}>Report an issue</HelpMenuItem>
      </HelpMenuButton>
    );

    const item = document.querySelector('.help-menu-item');
    expect(item?.className).toContain('navbar-disclosure-item');
    expect(item?.className).toContain('caller-item');
  });
});

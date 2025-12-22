import { fireEvent, render, screen } from '@testing-library/react';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem, HelpMenuProps } from '.';
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

  it('matches snapshot', async () => {
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

    // Reveal the default button in the help menu
    fireEvent.click(await screen.findByText('Help'));
    screen.getByText(/Report an issue/i);

    expect(document.body).toMatchSnapshot();
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

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu chatConfig={chatEmbedParams} contactFormParams={[{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );
    fireEvent.click(await screen.findByText('Help'));
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('replaces button within hours', async () => {
    const happyHoursResponse: ChatConfiguration['businessHours'] = {
      businessHoursInfo: {
        businessHours: [
          { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
        ]
      },
      timestamp: Date.now(),
    };
    const chatEmbedPath = 'https://example.com/';
    const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, businessHours: happyHoursResponse};

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu chatConfig={chatEmbedParams} contactFormParams={[{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /chat with us/i });
  });

  it('calls openChat when Chat With Us is clicked', async () => {
    const happyHoursResponse: ChatConfiguration['businessHours'] = {
      businessHoursInfo: {
        businessHours: [
          { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
        ]
      },
      timestamp: Date.now(),
    };
    const chatEmbedPath = 'https://example.com/chat';
    const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, businessHours: happyHoursResponse};

    // Mock window.open to verify it's called by openChat
    const mockWindowOpen = jest.spyOn(window, 'open').mockReturnValue({
      closed: false,
      postMessage: jest.fn(),
    } as any);

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu chatConfig={chatEmbedParams} contactFormParams={[{key: 'userId', value: 'test'}]} />
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test123'}, {key: 'email', value: 'user@example.com'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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

    const {unmount} = render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={paramsWithSpecialChars}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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
    const { NewTabIcon } = require('./index');
    expect(NewTabIcon).toBeDefined();
    expect(typeof NewTabIcon).toBe('function');
  });

  it('renders NewTabIcon with correct SVG attributes', () => {
    const { NewTabIcon } = require('./index');
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
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
            <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
              Test Callback
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
            <HelpMenuItem onAction={customAction}>
              Custom Action Item
            </HelpMenuItem>
          </HelpMenu>
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

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
    const businessHours: ChatConfiguration['businessHours'] = {
      businessHoursInfo: {
        businessHours: [
          { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
        ]
      },
      timestamp: Date.now(),
    };
    const chatConfig: HelpMenuProps['chatConfig'] = { chatEmbedPath, businessHours };

    const { rerender } = render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu
            chatConfig={chatConfig}
            contactFormParams={[{key: 'userId', value: 'test'}]}
          />
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

    // Open menu and verify chat option appears
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /chat with us/i });

    // Rerender with same chatConfig object (should use memoized value)
    rerender(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu
            chatConfig={chatConfig}
            contactFormParams={[{key: 'userId', value: 'test'}]}
          />
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

    // Verify chat option still appears
    await screen.findByRole('menuitem', { name: /chat with us/i });
  });

  it('handles undefined chatConfig gracefully', async () => {
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu
            chatConfig={undefined}
            contactFormParams={[{key: 'userId', value: 'test'}]}
          />
        </NavBar>
      </BodyPortalSlotsContext.Provider>
    );

    // Open menu and verify fallback to Report an issue
    fireEvent.click(await screen.findByText('Help'));
    await screen.findByRole('menuitem', { name: /report an issue/i });
  });
});

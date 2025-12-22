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
});

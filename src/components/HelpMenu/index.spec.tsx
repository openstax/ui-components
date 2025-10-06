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
    const errorResponse: ChatConfiguration['businessHours'] = {
      err: { type: 'test', detail: 'test' }
    };
    const chatEmbedPath = 'https://example.com/';
    const chatEmbedParams: HelpMenuProps['chatEmbedParams'] = {chatEmbedPath, businessHours: errorResponse};

    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu chatEmbedParams={chatEmbedParams} contactFormParams={[{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}]}>
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
      hours: {
        businessHoursInfo: {
          businessHours: [
            { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
          ]
        },
        timestamp: Date.now(),
      }
    };
    const chatEmbedPath = 'https://example.com/';
    const chatEmbedParams: HelpMenuProps['chatEmbedParams'] = {chatEmbedPath, businessHours: happyHoursResponse};
  
    render(
      <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo>
          <HelpMenu chatEmbedParams={chatEmbedParams} contactFormParams={[{key: 'userId', value: 'test'}, {key: 'other', value: 'param'}]}>
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
});

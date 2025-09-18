import { render, screen, fireEvent } from '@testing-library/react';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem } from '.';
import { NavBar } from '../NavBar';

describe('HelpMenu', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
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

    expect(document.body).toMatchSnapshot();
  });

  it('shows loading icon while SDK is loading', () => {
    render(<HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]} />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('replaces button when SDK is ready', async () => {
    // mock the global embeddedservice_bootstrap object
    const mockSvc = {
      init: jest.fn(),
      utilAPI: { launchChat: jest.fn() },
    };
    (window as any).embeddedservice_bootstrap = mockSvc;
    const addEventListenerCalls: Parameters<typeof window.addEventListener>[] = [];
    window.addEventListener = jest.fn().mockImplementation((...args: Parameters<typeof window.addEventListener>) => {
      addEventListenerCalls.push(args);
    });
  
    render(<HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]} />);
    const btn = await screen.findByRole('button', { name: /chat with us/i });
    expect(btn).not.toBeDisabled();
  
    fireEvent.click(btn);
    expect(mockSvc.utilAPI.launchChat).toHaveBeenCalled();
  });
});


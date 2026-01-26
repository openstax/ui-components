import { fireEvent, render, screen } from '@testing-library/react';
import { ProfileMenu, ProfileMenuItem, UserIcon } from '.';

describe('ProfileMenu', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  it('matches snapshot with user initials', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('JD');

    fireEvent.click(button);
    await screen.findByRole('menu');

    expect(document.body).toMatchSnapshot();
  });

  it('renders with user initials', () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('JD');
  });


  it('renders with first name only', () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('J');
  });

  it('renders UserIcon fallback when no user data', () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByTestId('profile-menu');
    const svg = button.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('opens menu on click', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const menu = await screen.findByRole('menu');
    expect(menu).toBeTruthy();

    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Log out' })).toBeTruthy();
  });

  it('fires profile action callback', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const profileItem = await screen.findByRole('menuitem', { name: 'Profile' });
    fireEvent.click(profileItem);

    expect(onAction).toHaveBeenCalledWith('profile');
  });

  it('fires logout action callback', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const logoutItem = await screen.findByRole('menuitem', { name: 'Log out' });
    fireEvent.click(logoutItem);

    expect(onAction).toHaveBeenCalledWith('logout');
  });

  it('renders custom menu labels', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        profileLabel="My Account"
        logoutLabel="Sign Out"
        data-testid="profile-menu"
      />
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    expect(await screen.findByRole('menuitem', { name: 'My Account' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Sign Out' })).toBeTruthy();
  });

  it('renders custom children menu items', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="settings">Settings</ProfileMenuItem>
        <ProfileMenuItem id="help">Help</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    await screen.findByRole('menu');

    expect(screen.getByRole('menuitem', { name: 'Settings' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Help' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Log out' })).toBeTruthy();
  });

  it('fires callback for custom menu items', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="settings">Settings</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const settingsItem = await screen.findByRole('menuitem', { name: 'Settings' });
    fireEvent.click(settingsItem);

    expect(onAction).toHaveBeenCalledWith('settings');
  });

  it('has correct aria-label', () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        ariaLabel="User menu"
        data-testid="profile-menu"
      />
    );

    const button = screen.getByLabelText('User menu');
    expect(button).toBeTruthy();
  });

  it('uses default aria-label', () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByLabelText('Account actions');
    expect(button).toBeTruthy();
  });

  it('supports keyboard navigation', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      />
    );

    const button = screen.getByTestId('profile-menu');

    fireEvent.keyDown(button, { key: 'Enter' });

    const menu = await screen.findByRole('menu');
    expect(menu).toBeTruthy();
  });
});

describe('UserIcon', () => {
  it('renders SVG with correct attributes', () => {
    const { container } = render(<UserIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute('aria-hidden')).toBe('true');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 448 512');
    expect(svg?.getAttribute('fill')).toBe('currentColor');

    const path = container.querySelector('path');
    expect(path).toBeTruthy();
  });

  it('accepts custom className', () => {
    const { container } = render(<UserIcon className="custom-class" />);

    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('custom-class')).toBe(true);
  });
});

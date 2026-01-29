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
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem id="logout">Log out</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('JD');

    fireEvent.click(button);
    await screen.findByRole('menu');

    expect(document.body).toMatchSnapshot();
  });

  it('renders with user initials', () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('JD');
  });


  it('renders with first name only', () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByTestId('profile-menu');
    expect(button.textContent).toBe('J');
  });

  it('renders UserIcon fallback when no user data', () => {
    render(
      <ProfileMenu data-testid="profile-menu">
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByTestId('profile-menu');
    const svg = button.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('opens menu on click', async () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem id="logout">Log out</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const menu = await screen.findByRole('menu');
    expect(menu).toBeTruthy();

    expect(screen.getByRole('menuitem', { name: 'Profile' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Log out' })).toBeTruthy();
  });

  it('fires onAction callback with menu item id', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem id="logout">Log out</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const profileItem = await screen.findByRole('menuitem', { name: 'Profile' });
    fireEvent.click(profileItem);

    expect(onAction).toHaveBeenCalledWith('profile');
  });

  it('fires individual item onAction callback', async () => {
    const onItemAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem onAction={onItemAction}>Log out</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const logoutItem = await screen.findByRole('menuitem', { name: 'Log out' });
    fireEvent.click(logoutItem);

    expect(onItemAction).toHaveBeenCalled();
  });

  it('renders menu items with custom labels', async () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">My Account</ProfileMenuItem>
        <ProfileMenuItem id="logout">Sign Out</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    expect(await screen.findByRole('menuitem', { name: 'My Account' })).toBeTruthy();
    expect(screen.getByRole('menuitem', { name: 'Sign Out' })).toBeTruthy();
  });

  it('renders multiple custom menu items', async () => {
    const onAction = jest.fn();

    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        onAction={onAction}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="settings">Settings</ProfileMenuItem>
        <ProfileMenuItem id="help">Help</ProfileMenuItem>
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem id="logout">Log out</ProfileMenuItem>
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
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        ariaLabel="User menu"
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByLabelText('User menu');
    expect(button).toBeTruthy();
  });

  it('uses default aria-label', () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByLabelText('Account actions');
    expect(button).toBeTruthy();
  });

  it('supports keyboard navigation', async () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
        <ProfileMenuItem id="logout">Log out</ProfileMenuItem>
      </ProfileMenu>
    );

    const button = screen.getByTestId('profile-menu');

    fireEvent.keyDown(button, { key: 'Enter' });

    const menu = await screen.findByRole('menu');
    expect(menu).toBeTruthy();
  });

  it('supports href on menu items', async () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem href="/profile">Profile</ProfileMenuItem>
        <ProfileMenuItem href="/settings">Settings</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));

    const profileLink = await screen.findByRole('menuitem', { name: 'Profile' });
    expect(profileLink.getAttribute('href')).toBe('/profile');

    const settingsLink = screen.getByRole('menuitem', { name: 'Settings' });
    expect(settingsLink.getAttribute('href')).toBe('/settings');
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

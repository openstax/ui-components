import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Menu, MenuTrigger } from 'react-aria-components';
import { ProfileMenu, ProfileMenuButton, ProfileMenuItem, ProfileMenuPopover, UserIcon } from '.';
import type { CSSPropertiesWithVariables } from '../../types';

type ProfileMenuButtonProps = React.ComponentProps<typeof ProfileMenuButton>;
type ProfileMenuItemProps = React.ComponentProps<typeof ProfileMenuItem>;

describe('ProfileMenu', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  it('wires the trigger to the menu for assistive tech', async () => {
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
    expect(button.getAttribute('aria-haspopup')).toBe('true');
    expect(button.getAttribute('aria-expanded')).toBe('false');

    fireEvent.click(button);
    const menu = await screen.findByRole('menu');

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(button.getAttribute('aria-controls')).toBe(menu.id);
    expect(menu.getAttribute('aria-labelledby')).toBe(button.id);
  });

  it('moves focus into the menu when it opens', async () => {
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

    // react-aria defers the trigger -> menu focus move to an animation frame when
    // the click is a virtual one (fireEvent.click looks like a screen reader click),
    // so wait for it to land rather than asserting on the frame we happen to be in.
    await waitFor(() => expect(document.activeElement).toBe(menu));
  });

  it('renders items in order with a roving tabindex', async () => {
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
    await screen.findByRole('menu');

    const items = screen.getAllByRole('menuitem');
    expect(items.map((item) => item.textContent)).toEqual(['Profile', 'Log out']);
    expect(items.map((item) => item.getAttribute('data-key'))).toEqual(['profile', 'logout']);
    expect(items.map((item) => item.getAttribute('tabindex'))).toEqual(['0', '-1']);
  });

  it('positions the popover below the trigger', async () => {
    render(
      <ProfileMenu
        user={{ firstName: 'John', lastName: 'Doe' }}
        data-testid="profile-menu"
      >
        <ProfileMenuItem id="profile">Profile</ProfileMenuItem>
      </ProfileMenu>
    );

    fireEvent.click(screen.getByTestId('profile-menu'));
    await screen.findByRole('menu');

    const popover = screen.getByRole('dialog');
    expect(popover.getAttribute('data-placement')).toBe('bottom');
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

describe('ProfileMenu style composition', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  const renderButton = (style: ProfileMenuButtonProps['style']) => {
    render(<ProfileMenuButton style={style}>JD</ProfileMenuButton>);
    return document.querySelector('.profile-menu-button') as HTMLElement;
  };

  const renderMenuItem = (style: ProfileMenuItemProps['style']) => {
    render(
      <Menu aria-label='Test menu'>
        <ProfileMenuItem style={style}>Profile</ProfileMenuItem>
      </Menu>
    );
    return document.querySelector('.profile-menu-item') as HTMLElement;
  };

  describe('ProfileMenuButton', () => {
    it('merges a render-callback style', () => {
      const button = renderButton(() => ({ color: 'rgb(255, 0, 0)' }));

      expect(button.style.color).toBe('rgb(255, 0, 0)');
      expect(button.style.getPropertyValue('--profile-menu-button-bg')).toBeTruthy();
    });

    it('lets a render-callback style override the wrapper variables', () => {
      const button = renderButton(() => ({
        '--profile-menu-button-bg': 'rebeccapurple'
      }) as CSSPropertiesWithVariables);

      expect(button.style.getPropertyValue('--profile-menu-button-bg')).toBe('rebeccapurple');
    });

    it('keeps merging an object style, caller last', () => {
      const button = renderButton({
        color: 'rgb(0, 0, 255)',
        '--profile-menu-button-bg': 'rebeccapurple'
      } as CSSPropertiesWithVariables);

      expect(button.style.color).toBe('rgb(0, 0, 255)');
      expect(button.style.getPropertyValue('--profile-menu-button-bg')).toBe('rebeccapurple');
      expect(button.style.getPropertyValue('--profile-menu-button-color')).toBeTruthy();
    });
  });

  // No render-callback cases here: ProfileMenuItem passes style to NavBarMenuItem, which
  // spreads it, so the callback form cannot reach the DOM until CORE-2710 (#137) is on main.
  describe('ProfileMenuItem', () => {
    it('merges an object style, caller last', () => {
      const item = renderMenuItem({
        color: 'rgb(0, 0, 255)',
        '--profile-menu-item-color': 'rebeccapurple'
      } as CSSPropertiesWithVariables);

      expect(item.style.color).toBe('rgb(0, 0, 255)');
      expect(item.style.getPropertyValue('--profile-menu-item-color')).toBe('rebeccapurple');
      expect(item.style.getPropertyValue('--navbar-menu-item-hover-bg')).toBeTruthy();
    });
  });
});

describe('ProfileMenu className composition', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: jest.fn(),
    } as any;
  });

  const renderOpenMenu = (
    popoverClassName: React.ComponentProps<typeof ProfileMenuPopover>['className']
  ) => {
    render(
      <MenuTrigger defaultOpen>
        <ProfileMenuButton className={() => 'caller-button'}>JD</ProfileMenuButton>
        <ProfileMenuPopover className={popoverClassName}>
          <Menu aria-label='Test menu'>
            <ProfileMenuItem className={() => 'caller-item'}>Profile</ProfileMenuItem>
          </Menu>
        </ProfileMenuPopover>
      </MenuTrigger>
    );
  };

  it('composes a render-callback className on each wrapper', () => {
    renderOpenMenu(() => 'caller-popover');

    const button = document.querySelector('.profile-menu-button');
    expect(button?.className).toContain('profile-menu-button');
    expect(button?.className).toContain('caller-button');

    const popover = document.querySelector('.profile-menu-popover');
    expect(popover?.className).toContain('navbar-popover');
    expect(popover?.className).toContain('caller-popover');

    const item = document.querySelector('.profile-menu-item');
    expect(item?.className).toContain('navbar-menu-item');
    expect(item?.className).toContain('caller-item');
  });

  it('keeps composing a string className', () => {
    render(
      <MenuTrigger defaultOpen>
        <ProfileMenuButton className='caller-button'>JD</ProfileMenuButton>
        <ProfileMenuPopover className='caller-popover'>
          <Menu aria-label='Test menu'>
            <ProfileMenuItem className='caller-item'>Profile</ProfileMenuItem>
          </Menu>
        </ProfileMenuPopover>
      </MenuTrigger>
    );

    expect(document.querySelector('.profile-menu-button')?.className).toContain('caller-button');
    expect(document.querySelector('.profile-menu-popover')?.className).toContain('caller-popover');
    expect(document.querySelector('.profile-menu-item')?.className).toContain('caller-item');
  });
});

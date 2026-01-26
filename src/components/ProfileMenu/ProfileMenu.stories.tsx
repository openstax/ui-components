import { Key } from 'react-aria-components';
import { createGlobalStyle } from 'styled-components';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { ProfileMenu, ProfileMenuItem } from '.';
import { NavBar } from '../NavBar';

const BodyPortalGlobalStyle = createGlobalStyle`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

const handleAction = (key: Key) => {
  if (key === 'profile') {
    window.alert('Navigating to profile...');
  } else if (key === 'logout') {
    window.alert('Logging out...');
  } else {
    window.alert(`Action: ${key}`);
  }
};

export const WithInitials = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <ProfileMenu
          user={{ firstName: 'John', lastName: 'Doe' }}
          onAction={handleAction}
        />
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

export const WithUserIconFallback = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <ProfileMenu
          onAction={handleAction}
        />
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

export const WithCustomLabels = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <ProfileMenu
          user={{ firstName: 'Jane', lastName: 'Smith' }}
          onAction={handleAction}
          profileLabel="My Account"
          logoutLabel="Sign Out"
        />
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

export const WithCustomMenuItems = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <ProfileMenu
          user={{ firstName: 'Jane', lastName: 'Smith' }}
          onAction={handleAction}
        >
          <ProfileMenuItem id="settings">Settings</ProfileMenuItem>
          <ProfileMenuItem id="preferences">Preferences</ProfileMenuItem>
        </ProfileMenu>
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

export const Standalone = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <ProfileMenu
        user={{ firstName: 'Test', lastName: 'User' }}
        onAction={handleAction}
      />
    </div>
  );
};

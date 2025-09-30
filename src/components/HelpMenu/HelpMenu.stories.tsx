import { createGlobalStyle } from 'styled-components';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem } from '.';
import { NavBar } from '../NavBar';

const BodyPortalGlobalStyle = createGlobalStyle`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

const contactParams = [
  { key: 'userId', value: 'test' },
  { key: 'userFirstName', value: 'test' },
  { key: 'organizationName', value: 'org' },
];

export const Default = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <HelpMenu contactFormParams={contactParams}>
          <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
            Test Callback
          </HelpMenuItem>
        </HelpMenu>
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

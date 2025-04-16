import { createGlobalStyle } from 'styled-components';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem } from './HelpMenu';
import { NavBar } from './NavBar';

const BodyPortalGlobalStyle = createGlobalStyle`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

export const Default = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]}>
          <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
            Test Callback
          </HelpMenuItem>
        </HelpMenu>
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

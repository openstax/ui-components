import { createGlobalStyle } from 'styled-components';
import { BodyPortalSlotsContext } from '../BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem, HelpMenuProps } from '.';
import { NavBar } from '../NavBar';
import { ChatConfiguration } from './hooks';

const BodyPortalGlobalStyle = createGlobalStyle`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;

const happyHoursResponse: ChatConfiguration['businessHours'] = {
  businessHoursInfo: {
    businessHours: [
      { startTime: Date.now() - 60_000, endTime: Date.now() + 1_440_000 }
    ]
  },
  timestamp: Date.now(),
};

const contactParams: HelpMenuProps['contactFormParams'] = [
  { key: 'userId', value: 'test' },
  { key: 'userFirstName', value: 'test' },
  { key: 'organizationName', value: 'org' },
];

const chatEmbedPath = 'https://localhost/assignable-chat';
const chatEmbedParams: HelpMenuProps['chatConfig'] = {chatEmbedPath, businessHours: happyHoursResponse};

export const Default = () => {
  return (
    <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
      <BodyPortalGlobalStyle />
      <NavBar logo>
        <HelpMenu contactFormParams={contactParams} chatConfig={chatEmbedParams}>
          <HelpMenuItem onAction={() => window.alert('Ran HelpMenu callback function')}>
            Test Callback
          </HelpMenuItem>
        </HelpMenu>
      </NavBar>
    </BodyPortalSlotsContext.Provider>
  );
};

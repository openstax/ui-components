import { createGlobalStyle } from 'styled-components';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';
import { useHelpMenu } from './HelpMenu';
import { NavBar } from './NavBar';

const BodyPortalGlobalStyle = createGlobalStyle`
  #ladle-root {
    position: absolute;
    right: 0;
  }
`;

export const Default = () => {
  const [HelpMenu, ContactFormIframe] = useHelpMenu(
    [{ label: 'Test Callback', callback: () => window.alert('Ran HelpMenu callback function') }]
  );

  return <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
    <BodyPortalGlobalStyle />
    <NavBar logo><HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]} /></NavBar>
    <ContactFormIframe />
  </BodyPortalSlotsContext.Provider>;
};

import { render } from '@testing-library/react';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';
import { useHelpMenu } from './HelpMenu';
import { NavBar } from './NavBar';

describe('useHelpMenu', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    const NavBarWithHelpMenu = () => {
      const [HelpMenu, ContactFormIframe] = useHelpMenu(
        [{ label: 'Test Callback', callback: () => window.alert('Ran HelpMenu callback function') }]
      );

      return <BodyPortalSlotsContext.Provider value={['nav', 'root']}>
        <NavBar logo><HelpMenu contactFormParams={[{key: 'userId', value: 'test'}]} /></NavBar>
        <ContactFormIframe />
      </BodyPortalSlotsContext.Provider>;
    };

    render(<NavBarWithHelpMenu />);

    expect(document.body).toMatchSnapshot();
  });
});

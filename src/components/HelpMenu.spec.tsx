import { render } from '@testing-library/react';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';
import { HelpMenu, HelpMenuItem } from './HelpMenu';
import { NavBar } from './NavBar';

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
});

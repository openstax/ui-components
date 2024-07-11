import { render } from '@testing-library/react';
import { BodyPortal } from './BodyPortal';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';

describe('BodyPortal', () => {
  it('renders the tag into document.body using a React portal', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<><BodyPortal tagName='footer'>Footer stuff</BodyPortal><h1>Title</h1></>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
  <footer>
    Footer stuff
  </footer>
</body>
`);
  });

  it('re-renders correctly when props are updated', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<><BodyPortal className='test'><ol><li>link text</li></ol></BodyPortal>
             <h1>Title</h1></>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
  <div
    class="test"
  >
    <ol>
      <li>
        link text
      </li>
    </ol>
  </div>
</body>
`);
    render(<><BodyPortal tagName='footer' className='test-footer'><ol><li>link text</li></ol></BodyPortal>
             <h1>Title</h1></>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
  <footer
    class="test-footer"
  >
    <ol>
      <li>
        link text
      </li>
    </ol>
  </footer>
</body>
`);
  });

  it('respects the order set by the BodyPortalContext', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<BodyPortalSlotsContext.Provider value={[
      'thefirst',
      'thesecond',
      'root',
      'thesecondtolast',
      'thelast',
    ]}>
      <BodyPortal slot='thefirst' tagName='header'>Header stuff</BodyPortal>
      <BodyPortal slot='thesecond' tagName='nav'><ol><li>link text</li></ol></BodyPortal>
      <BodyPortal slot='thesecondtolast' tagName='div'>Footer stuff</BodyPortal>
      <BodyPortal slot='thelast' tagName='footer'>Second footer?</BodyPortal>
      <h1>Title</h1>
    </BodyPortalSlotsContext.Provider>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <header
    data-portal-slot="thefirst"
  >
    Header stuff
  </header>
  <nav
    data-portal-slot="thesecond"
  >
    <ol>
      <li>
        link text
      </li>
    </ol>
  </nav>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
  <div
    data-portal-slot="thesecondtolast"
  >
    Footer stuff
  </div>
  <footer
    data-portal-slot="thelast"
  >
    Second footer?
  </footer>
</body>
`);
  });

  it('also respects the order when defined in reverse order', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<BodyPortalSlotsContext.Provider value={[
      'thefirst',
      'thesecond',
      'root',
      'thesecondtolast',
      'thelast',
    ]}>
      <BodyPortal slot='thelast' tagName='footer'>Second footer?</BodyPortal>
      <BodyPortal slot='thesecondtolast' tagName='div'>Footer stuff</BodyPortal>
      <BodyPortal slot='thesecond' tagName='nav'><ol><li>link text</li></ol></BodyPortal>
      <BodyPortal slot='thefirst' tagName='header'>Header stuff</BodyPortal>
      <h1>Title</h1>
    </BodyPortalSlotsContext.Provider>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <header
    data-portal-slot="thefirst"
  >
    Header stuff
  </header>
  <nav
    data-portal-slot="thesecond"
  >
    <ol>
      <li>
        link text
      </li>
    </ol>
  </nav>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
  <div
    data-portal-slot="thesecondtolast"
  >
    Footer stuff
  </div>
  <footer
    data-portal-slot="thelast"
  >
    Second footer?
  </footer>
</body>
`);
  });
});

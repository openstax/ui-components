import { render } from '@testing-library/react';
import { BodyPortal } from './BodyPortal';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';

describe('BodyPortal', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('renders the tag into document.body using a React portal', () => {
    render(<><BodyPortal slot='footer' tagName='footer'>Footer stuff</BodyPortal>
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
    data-portal-slot="footer"
  >
    Footer stuff
  </footer>
</body>
`);
  });

  it('re-renders correctly when props are updated', () => {
    render(<><BodyPortal className='test footer' slot='footer' tagName='footer'>Footer stuff</BodyPortal>
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
    class="test footer"
    data-portal-slot="footer"
  >
    Footer stuff
  </footer>
</body>
`);
    render(<><BodyPortal className='test modal' slot='modal' tagName='div'>Modal stuff</BodyPortal>
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
    class="test modal"
    data-portal-slot="modal"
  >
    Modal stuff
  </div>
</body>
`);
  });

  it('respects the order set by the BodyPortalContext', () => {
    render(<BodyPortalSlotsContext.Provider value={[
      'thefirst',
      'thesecond',
      'root',
      'thesecondtolast',
      'thelast',
    ]}>
      <BodyPortal slot='thefirst' tagName='header'>Header stuff</BodyPortal>
      <BodyPortal slot='thesecond' tagName='nav' role='toolbar'><ol><li>link text</li></ol></BodyPortal>
      <BodyPortal slot='thesecondtolast' tagName='footer'>Footer stuff</BodyPortal>
      <BodyPortal slot='thelast' className='modal'>Modal</BodyPortal>
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
    role="toolbar"
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
  <footer
    data-portal-slot="thesecondtolast"
  >
    Footer stuff
  </footer>
  <div
    class="modal"
    data-portal-slot="thelast"
  >
    Modal
  </div>
</body>
`);
  });

  it('also respects the order when rendered in reverse order', () => {
    render(<BodyPortalSlotsContext.Provider value={[
      'thefirst',
      'thesecond',
      'root',
      'thesecondtolast',
      'thelast',
    ]}>
      <h1>Title</h1>
      <BodyPortal slot='thelast' className='modal'>Modal</BodyPortal>
      <BodyPortal slot='thesecondtolast' tagName='footer'>Footer stuff</BodyPortal>
      <BodyPortal slot='thesecond' tagName='nav' role='toolbar'><ol><li>link text</li></ol></BodyPortal>
      <BodyPortal slot='thefirst' tagName='header'>Header stuff</BodyPortal>
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
    role="toolbar"
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
  <footer
    data-portal-slot="thesecondtolast"
  >
    Footer stuff
  </footer>
  <div
    class="modal"
    data-portal-slot="thelast"
  >
    Modal
  </div>
</body>
`);
  });
});

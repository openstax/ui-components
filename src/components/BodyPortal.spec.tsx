import { render } from '@testing-library/react';
import { BodyPortal } from './BodyPortal';

describe('BodyPortal', () => {
  it('renders the tag into document.body using a React portal', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<><BodyPortal tagName='nav'><ol><li>link text</li></ol></BodyPortal><h1>Title</h1></>, { container: root });
    expect(document.body).toMatchInlineSnapshot(`
<body>
  <nav>
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
</body>
`);
  });

  it('can instead append the tag used by the portal to the body', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    render(<><BodyPortal tagName='footer' append>Footer stuff</BodyPortal><h1>Title</h1></>, { container: root });
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
  <div
    class="test"
  >
    <ol>
      <li>
        link text
      </li>
    </ol>
  </div>
  <main
    id="root"
  >
    <h1>
      Title
    </h1>
  </main>
</body>
`);
    render(<><BodyPortal tagName='footer' className='test-footer' append><ol><li>link text</li></ol></BodyPortal>
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
});

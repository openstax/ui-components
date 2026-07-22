import React from 'react';
import type { CSSPropertiesWithVariables } from '../types';
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

  it('accepts an optional ref parameter that will be set', () => {
    const TestPortal = ({ children }: React.PropsWithChildren<unknown>) => {
      const ref = React.useRef<HTMLElement | null>(null);
      expect(ref.current).toBeNull();

      React.useEffect(() => {
        expect(ref.current).toBeInstanceOf(HTMLElement);
      }, []);

      return <BodyPortal ref={ref} slot='footer' tagName='footer'>{children}</BodyPortal>;
    };
    render(<><TestPortal>Footer stuff</TestPortal><h1>Title</h1></>, { container: root });
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

  it('accepts a ref callback', () => {
    const setRef = jest.fn().mockImplementation((element) => {
      expect(element).toBeInstanceOf(HTMLElement);
    });
    render(<><BodyPortal ref={setRef} slot='footer' tagName='footer'>Footer stuff</BodyPortal>
            <h1>Title</h1></>, { container: root });
    expect(setRef).toHaveBeenCalled();
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

  it('takes an id, testid and ariaLabel', () => {
    render(
      <BodyPortalSlotsContext.Provider value={['header', 'root']}>
        <BodyPortal slot='header' tagName='header' id='orange' data-testid='blue' ariaLabel='orange'>
          Now you're thinking with portals
        </BodyPortal>
      </BodyPortalSlotsContext.Provider>,
      { container: root }
    );

    expect(document.body).toMatchInlineSnapshot(`
<body>
  <header
    aria-label="orange"
    data-portal-slot="header"
    data-testid="blue"
    id="orange"
  >
    Now you're thinking with portals
  </header>
  <main
    id="root"
  />
</body>
`);
  });

  it('applies CSS variables from style prop', () => {
    render(
      <BodyPortal
        slot='modal'
        style={{ '--my-variable': 'red', '--another-var': '10px' } as CSSPropertiesWithVariables}
      >
        Modal content
      </BodyPortal>,
      { container: root }
    );

    const portal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(portal).toBeTruthy();
    expect(portal.style.getPropertyValue('--my-variable')).toBe('red');
    expect(portal.style.getPropertyValue('--another-var')).toBe('10px');
  });

  it('applies regular CSS properties from style prop', () => {
    render(
      <BodyPortal
        slot='modal'
        style={{ backgroundColor: 'blue', fontSize: '16px' }}
      >
        Modal content
      </BodyPortal>,
      { container: root }
    );

    const portal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(portal).toBeTruthy();
    expect(portal.style.backgroundColor).toBe('blue');
    expect(portal.style.fontSize).toBe('16px');
  });

  it('updates styles when style prop changes without removing portal element', () => {
    const TestComponent = ({ color }: { color: string }) => (
      <BodyPortal
        slot='modal'
        style={{ '--color': color } as CSSPropertiesWithVariables}
      >
        Modal content
      </BodyPortal>
    );

    const { rerender } = render(<TestComponent color='red' />, { container: root });

    const portal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(portal).toBeTruthy();
    expect(portal.style.getPropertyValue('--color')).toBe('red');

    // Store reference to verify it's the same element after update
    const portalRef = portal;

    rerender(<TestComponent color='blue' />);

    const updatedPortal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(updatedPortal).toBe(portalRef); // Should be the same element
    expect(updatedPortal.style.getPropertyValue('--color')).toBe('blue');
  });

  it('removes styles on unmount', () => {
    const { unmount } = render(
      <BodyPortal
        slot='modal'
        style={{ '--my-variable': 'red', backgroundColor: 'blue' } as CSSPropertiesWithVariables}
      >
        Modal content
      </BodyPortal>,
      { container: root }
    );

    const portal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(portal).toBeTruthy();
    expect(portal.style.getPropertyValue('--my-variable')).toBe('red');
    expect(portal.style.backgroundColor).toBe('blue');

    unmount();

    // Portal element should be removed from DOM
    expect(document.body.querySelector('[data-portal-slot="modal"]')).toBeNull();
  });

  it('handles undefined style values gracefully', () => {
    render(
      <BodyPortal
        slot='modal'
        style={{ '--defined': 'red', '--undefined': undefined } as CSSPropertiesWithVariables}
      >
        Modal content
      </BodyPortal>,
      { container: root }
    );

    const portal = document.body.querySelector('[data-portal-slot="modal"]') as HTMLElement;
    expect(portal).toBeTruthy();
    expect(portal.style.getPropertyValue('--defined')).toBe('red');
    // null and undefined values should not be set
    expect(portal.style.getPropertyValue('--undefined')).toBe('');
  });
});

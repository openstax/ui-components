import { Html } from "./Html";
import { render } from '@testing-library/react';

describe('Html', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot (Block)', () => {
    render(
      <Html block className="custom-class">
        This is a block of HTML
      </Html>
    );

    expect(document.body).toMatchSnapshot();
  });

  it('matches snapshot (Inline)', () => {
    render(
      <Html className="custom-class">
        This is an inline HTML.
      </Html>
    );

    expect(document.body).toMatchSnapshot();
  });

  it('matches snapshot (Empty)', () => {
    render(<Html />);

    expect(document.body).toMatchSnapshot();
  });
});



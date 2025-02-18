import { render } from '@testing-library/react';
import { NavBar } from './NavBar';

describe('NavBar', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(<NavBar>NavBar content</NavBar>, { container: root });
    expect(document.body).toMatchSnapshot();
  });

  it('sets the maxWidth', () => {
    render(<NavBar maxWidth={128}>NavBar content</NavBar>, { container: root });
    expect(document.body).toMatchSnapshot();
  });

  it('sets the ariaLabel', () => {
    render(<NavBar ariaLabel='test' maxWidth={128}>NavBar content</NavBar>, { container: root });
    expect(document.body).toMatchSnapshot();
  });

  describe('with a logo', () => {
    it('matches snapshot', () => {
      render(<NavBar logo={true}>NavBar content</NavBar>, { container: root });
      expect(document.body).toMatchSnapshot();
    });

    it('links the logo', () => {
      render(<NavBar logo={{alt: 'Logo', href:'/'}}>NavBar content</NavBar>, { container: root });
      expect(document.body).toMatchSnapshot();
    });

    it('customizes the alt text', () => {
      render(<NavBar logo={{alt: 'Custom alt text'}}>NavBar content</NavBar>, { container: root });
      expect(document.body).toMatchSnapshot();
    });
  });
});

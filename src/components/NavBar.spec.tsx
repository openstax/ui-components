import { render, screen } from '@testing-library/react';
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

  it('renders a navigation landmark by default', () => {
    render(<NavBar>NavBar content</NavBar>, { container: root });
    expect(screen.getByRole('navigation')).toBeTruthy();
  });

  it('renders the given tagName instead of a nav', () => {
    render(<NavBar tagName='header'>NavBar content</NavBar>, { container: root });
    const bar = document.body.querySelector('[data-portal-slot="nav"]');
    expect(bar?.tagName).toBe('HEADER');
    expect(screen.queryByRole('navigation')).toBeNull();
    expect(screen.getByRole('banner')).toBe(bar);
  });

  it('exposes no landmark when rendered as a div', () => {
    render(<NavBar tagName='div'>NavBar content</NavBar>, { container: root });
    const bar = document.body.querySelector('[data-portal-slot="nav"]');
    expect(bar?.tagName).toBe('DIV');
    expect(screen.queryByRole('navigation')).toBeNull();
    expect(screen.queryByRole('banner')).toBeNull();
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

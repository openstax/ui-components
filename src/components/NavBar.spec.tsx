import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import * as Constants from '../constants';

describe('NavBar', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  const wrapper = () => document.body.querySelector('[data-portal-slot="nav"]') as HTMLElement;
  const bar = () => document.body.querySelector('.navbar-bar') as HTMLElement;
  const barVar = (name: string) => bar().style.getPropertyValue(name);

  it('renders its children in a bar inside a wrapper outside the root', () => {
    render(<NavBar>NavBar content</NavBar>, { container: root });

    expect(wrapper().classList.contains('navbar-wrapper')).toBe(true);
    expect(root.contains(wrapper())).toBe(false);
    expect(wrapper().contains(bar())).toBe(true);
    expect(bar().textContent).toBe('NavBar content');
  });

  it('uses the default heights and no max width', () => {
    render(<NavBar>NavBar content</NavBar>, { container: root });

    expect(barVar('--navbar-height-mobile')).toBe(`${Constants.navMobileHeight}rem`);
    expect(barVar('--navbar-height-desktop')).toBe(`${Constants.navDesktopHeight}rem`);
    expect(barVar('--navbar-max-width')).toBe('');
  });

  it('sets the maxWidth', () => {
    render(<NavBar maxWidth={128}>NavBar content</NavBar>, { container: root });

    expect(barVar('--navbar-max-width')).toBe('128rem');
  });

  it('sets the heights from its props', () => {
    render(<NavBar navMobileHeight={5} navDesktopHeight={7}>NavBar content</NavBar>, { container: root });

    expect(barVar('--navbar-height-mobile')).toBe('5rem');
    expect(barVar('--navbar-height-desktop')).toBe('7rem');
  });

  it('sets the ariaLabel', () => {
    render(<NavBar ariaLabel='test'>NavBar content</NavBar>, { container: root });

    expect(screen.getByRole('navigation', { name: 'test' })).toBe(wrapper());
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
    it('shows no logo by default', () => {
      render(<NavBar>NavBar content</NavBar>, { container: root });

      expect(screen.queryByRole('img')).toBeNull();
    });

    it('shows the default logo, unlinked', () => {
      render(<NavBar logo={true}>NavBar content</NavBar>, { container: root });

      const logo = screen.getByRole('img', { name: 'OpenStax Logo' });
      expect(bar().contains(logo)).toBe(true);
      expect(logo.closest('a')).toBeNull();
    });

    it('links the logo', () => {
      render(<NavBar logo={{alt: 'Logo', href:'/'}}>NavBar content</NavBar>, { container: root });

      const link = screen.getByRole('img', { name: 'Logo' }).closest('a');
      expect(link?.getAttribute('href')).toBe('/');
    });

    it('customizes the alt text', () => {
      render(<NavBar logo={{alt: 'Custom alt text'}}>NavBar content</NavBar>, { container: root });

      const logo = screen.getByRole('img', { name: 'Custom alt text' });
      expect(logo.closest('a')).toBeNull();
    });
  });
});

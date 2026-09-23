import { createRef } from 'react';
import fs from 'fs';
import path from 'path';
import { render, screen } from '@testing-library/react';
import { Banner, CloseButton, Severity, StyledBanner } from "./Banner";
import { ButtonLink } from '../Button';
import { declarations } from '../../theme/cssColors';
import renderer from 'react-test-renderer';

describe('Banner', () => {
  it('matches snapshot (single message, no dismiss)', () => {
    const tree = renderer.create(
      <Banner messages={['This is a note']} severity='note' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot (multiple messages, with dismiss)', () => {
    const tree = renderer.create(
      <Banner 
        messages={['This is warning one', 'This is warning two']} 
        severity='warning' 
        onDismiss={() => () => alert('dismiss checkout')} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot (error, with dismiss)', () => {
    const tree = renderer.create(
      <Banner 
        messages={['This is an error']} 
        severity='error' 
        onDismiss={() => () => alert('dismiss checkout')} 
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.each([
    ['note', 'banner-note'],
    ['warning', 'banner-warning'],
    ['error', 'banner-error'],
  ] as const)('puts the %s tone class on the banner', (severity, expected) => {
    render(<Banner messages={['a message']} severity={severity} />);

    expect(document.querySelector('.banner')?.className).toContain(expected);
  });

  it('puts the tone class on the close button too, so it works outside a banner', () => {
    render(<CloseButton severity='error' aria-label='dismiss' />);

    const button = document.querySelector('.banner-close-button');
    expect(button?.className).toContain('banner-error');
  });

  it('does not leak the severity prop to the DOM', () => {
    // styled(Button) forwarded unknown props through to the underlying element, so the
    // rendered button used to carry severity="warning".
    render(<Banner messages={['a message']} severity='warning' onDismiss={() => null} />);

    expect(document.querySelector('.banner-close-button')?.hasAttribute('severity')).toBe(false);
  });

  it('composes a caller className rather than replacing it', () => {
    render(<StyledBanner severity='note' className='caller-banner' />);

    const banner = document.querySelector('.banner');
    expect(banner?.className).toContain('banner-note');
    expect(banner?.className).toContain('caller-banner');
  });

  // The styled components these replaced forwarded refs, and this package is on React 17,
  // where a plain function component silently drops one.
  it('forwards a ref from StyledBanner to the banner element', () => {
    const ref = createRef<HTMLDivElement>();

    render(<StyledBanner severity='note' ref={ref} />);

    expect(ref.current?.className).toContain('banner-note');
  });

  it('forwards a ref from Severity to the span', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Severity ref={ref} />);

    expect(ref.current?.tagName).toEqual('SPAN');
  });

  it('forwards a ref from CloseButton to the button', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<CloseButton severity='note' aria-label='dismiss' ref={ref} />);

    expect(ref.current?.tagName).toEqual('BUTTON');
  });

  describe('close button styles', () => {
    // jest maps stylesheets away, so the class is checked as source. These declarations
    // came from .button-base, which the styled-components original wrapped rather than
    // replaced; the self-contained class has to carry them or the control silently loses
    // its box, its disabled state and its keyboard focus indicator.
    const css = fs.readFileSync(path.join(__dirname, 'Banner.css'), 'utf8');
    const rule = (selector: string) =>
      css.match(new RegExp(`\\${selector}\\s*\\{([^}]*)\\}`))?.[1] ?? '';

    it.each([
      'display: inline-flex',
      'align-items: center',
      'justify-content: center',
      'height: 4rem',
    ])('keeps `%s` from .button-base', (declaration) => {
      expect(rule('.banner-close-button')).toContain(declaration);
    });

    it('keeps the disabled fade', () => {
      expect(rule('.banner-close-button:disabled')).toContain('opacity: 0.4');
    });

    it('keeps a visible keyboard focus indicator', () => {
      const focus = rule('.banner-close-button:focus');

      expect(focus).toContain('outline: solid');
      expect(focus).toContain('box-shadow: inset');
    });
  });
});

/**
 * CORE-2734: on the warning tone the link colour and the banner's body text sit at 1.17:1,
 * so colour alone cannot mark a link here (WCAG 1.4.1, Use of Color).
 *
 * Asserted against the stylesheet rather than through getComputedStyle, because Jest maps
 * `.css` to identity-obj-proxy and nothing rendered here carries these rules. Injecting the
 * sheet by hand would not fix it: jsdom resolves the cascade by document order alone and
 * ignores specificity, so `.banner .button-link` vs `.button-link` would come out however
 * the two sheets happened to be appended, which is not what a browser does.
 */
describe('banner link decoration', () => {
  const textDecoration = declarations(fs.readFileSync(path.join(__dirname, 'Banner.css'), 'utf-8'))
    .filter(({ property }) => property === 'text-decoration');

  const selectorsSetting = (value: string) => textDecoration
    .filter((rule) => rule.value === value)
    .flatMap((rule) => rule.context.split(',').map((selector) => selector.trim()));

  it.each([
    '.banner a',
    '.banner .button-link',
  ])('underlines %s at rest', (selector) => {
    expect(selectorsSetting('underline')).toContain(selector);
  });

  it.each([
    '.banner a:hover',
    '.banner a:focus',
    '.banner .button-link:hover',
    '.banner .button-link:focus',
  ])('keeps the underline on %s', (selector) => {
    expect(selectorsSetting('underline')).toContain(selector);
  });

  // Scoped to rules that can reach a link. `.banner-close-button` also sets
  // `text-decoration: none`, carried from `.button-base` when CORE-2008 made the dismiss
  // control self-contained; it is a button, never a link, and no link selector reaches it.
  it('never removes the underline from anything that can be a link', () => {
    const linkRules = textDecoration.filter(
      ({ context }) => /(^|,)\s*\.banner (a|\.button-link)\b/.test(context)
    );

    expect(linkRules).not.toEqual([]);
    expect(linkRules.filter((rule) => rule.value !== 'underline')).toEqual([]);
  });

  // Those rules are only worth anything if they match what a banner renders.
  it('matches an anchor written into a message', () => {
    render(<Banner messages={['read more <a href="https://example.com">here</a>']} severity='warning' />);

    expect(screen.getByRole('link').matches('.banner a')).toBe(true);
  });

  it('matches a link-styled button composed into a banner', () => {
    render(<StyledBanner severity='warning'><ButtonLink>here</ButtonLink></StyledBanner>);

    expect(screen.getByRole('button').matches('.banner .button-link')).toBe(true);
  });
});

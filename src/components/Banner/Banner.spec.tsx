import { createRef } from 'react';
import fs from 'fs';
import path from 'path';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
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

  describe('several messages', () => {
    const messages = ['This is warning one', 'This is warning two', 'See <a href="https://example.com">the guide</a>'];

    it('are a list with one item per message', () => {
      render(<Banner messages={messages} severity='warning' />);

      const items = within(screen.getByRole('list')).getAllByRole('listitem');

      expect(items).toHaveLength(3);
      expect(items[0]).toHaveTextContent('This is warning one');
      expect(items[1]).toHaveTextContent('This is warning two');
      expect(within(items[2]).getByRole('link', { name: 'the guide' })).toBeTruthy();
    });

    it('keep the visible "[1 of 3]:" numbering but hide it, since the list announces count and position', () => {
      render(<Banner messages={messages} severity='warning' />);

      const items = screen.getAllByRole('listitem');

      expect(items.map((item) => item.querySelector('[aria-hidden="true"]')?.textContent)).toEqual([
        '[1 of 3]: ', '[2 of 3]: ', '[3 of 3]: ',
      ]);
      expect(items[0].textContent).toBe('[1 of 3]: This is warning one');
    });

    it('state the roles, because removing the markers drops list semantics in Safari', () => {
      render(<Banner messages={messages} severity='warning' />);

      expect(screen.getByRole('list').getAttribute('role')).toBe('list');
      screen.getAllByRole('listitem').forEach((item) => expect(item.getAttribute('role')).toBe('listitem'));
    });

    it('draw no markers of their own, since the visible prefix is the marker', () => {
      render(<Banner messages={messages} severity='warning' />);

      // jest maps stylesheets away, so the rule is checked as source
      const css = fs.readFileSync(path.join(__dirname, 'Banner.css'), 'utf8');

      expect(screen.getByRole('list')).toHaveClass('banner-messages');
      expect(css).toMatch(/\.banner-messages\s*\{[^}]*list-style:\s*none/);
    });

    it('keep the severity prefix in front of the list', () => {
      const { container } = render(<Banner messages={messages} severity='warning' />);

      const list = screen.getByRole('list');

      expect(list.previousElementSibling).toBe(container.querySelector('.banner-severity'));
      expect(list.previousElementSibling).toHaveTextContent('Warning:');
    });

    it('are a list for an error too, which has no severity prefix', () => {
      render(<Banner messages={messages.slice(0, 2)} severity='error' />);

      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });
  });

  it('is not a list for one message', () => {
    render(<Banner messages={['This is a note']} severity='note' />);

    expect(screen.queryByRole('list')).toBeNull();
    expect(screen.queryByRole('listitem')).toBeNull();
    expect(screen.getByText('This is a note')).toBeTruthy();
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

    // matches a whole declaration, so `height: 4rem` does not match inside `min-height: 4rem`
    const declares = (block: string, property: string, value: string) =>
      new RegExp(`(^|[\\s;])${property}:\\s*${value}\\s*(;|$)`).test(block);

    it.each([
      ['display', 'inline-flex'],
      ['align-items', 'center'],
      ['justify-content', 'center'],
      ['min-height', '4rem'],
      ['overflow-wrap', 'anywhere'],
    ])('keeps `%s: %s` from .button-base', (property, value) => {
      expect(declares(rule('.banner-close-button'), property, value)).toBe(true);
    });

    it('does not pin the height or stop the text wrapping', () => {
      const block = rule('.banner-close-button');

      expect(declares(block, 'height', '[^;]+')).toBe(false);
      expect(declares(block, 'white-space', 'nowrap')).toBe(false);
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

// Checked against the stylesheet: Jest maps `.css` to identity-obj-proxy, and jsdom ignores
// specificity, so computed styles cannot show whether these rules win.
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

  // `.banner-close-button` also sets `text-decoration: none`; it is a button, and no link
  // selector reaches it.
  it('never removes the underline from anything that can be a link', () => {
    const linkRules = textDecoration.filter(
      ({ context }) => /(^|,)\s*\.banner (a|\.button-link)\b/.test(context)
    );

    expect(linkRules).not.toEqual([]);
    expect(linkRules.filter((rule) => rule.value !== 'underline')).toEqual([]);
  });

  // The selectors have to match what a banner renders.
  it('matches an anchor written into a message', () => {
    render(<Banner messages={['read more <a href="https://example.com">here</a>']} severity='warning' />);

    expect(screen.getByRole('link').matches('.banner a')).toBe(true);
  });

  it('matches a link-styled button composed into a banner', () => {
    render(<StyledBanner severity='warning'><ButtonLink>here</ButtonLink></StyledBanner>);

    expect(screen.getByRole('button').matches('.banner .button-link')).toBe(true);
  });
});

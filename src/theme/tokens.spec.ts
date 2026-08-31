import fs from 'fs';
import path from 'path';
import { palette } from './palette';
import { colors, padding, zIndex } from '../theme';

const srcDir = path.join(__dirname, '..');
const themeCssPath = path.join(__dirname, 'theme.css');

const kebab = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Colours that appear in component CSS but are deliberately not theme values. Anything
 * here is a value we inherited from the styled-components originals and chose not to snap
 * to the nearest palette entry, because doing so would be a visual change rather than a
 * refactor. Adding to this list should be a deliberate act — prefer adding the colour to
 * palette.ts if it is really part of the design.
 */
const KNOWN_OFF_PALETTE = new Map([
  ['#cccccc', 'Tooltip border and the uncontrolled-form h3 rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
  ['#dddddd', 'Modal header bottom rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
  ['#00000033', 'NavBar popover shadow: black at 20% alpha. No token form without color-mix().'],
]);

/** CSS-wide keywords and system colours, which are not theme values. */
const COLOR_KEYWORDS_ALLOWED = new Set([
  'inherit', 'initial', 'unset', 'revert', 'none', 'transparent', 'currentcolor',
  'highlight', 'highlighttext', 'buttontext', 'canvas', 'canvastext', 'linktext',
]);

/** Named colours that do have a token, so writing the keyword is duplication. */
const TOKENISED_KEYWORDS = new Map([
  ['white', '--ox-color-white'],
  ['black', '--ox-color-black'],
]);

const normaliseHex = (hex: string) => {
  const body = hex.slice(1).toLowerCase();
  // #abc -> #aabbcc, #abcd -> #aabbccdd
  const expanded = body.length <= 4
    ? body.split('').map((c) => c + c).join('')
    : body;
  return `#${expanded}`;
};

const walk = (dir: string, out: string[] = []): string[] => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.name.endsWith('.css')) {
      out.push(full);
    }
  }
  return out;
};

/** Declarations in the :root block of theme.css, in source order. */
const readRootTokens = () => {
  const css = fs.readFileSync(themeCssPath, 'utf8');
  const rootBlock = /:root\s*\{([\s\S]*?)\}/.exec(css);
  if (!rootBlock) {
    throw new Error('theme.css has no :root block');
  }
  const tokens = new Map<string, string>();
  for (const line of rootBlock[1].split('\n')) {
    const declaration = /^\s*(--[\w-]+)\s*:\s*([^;]+);/.exec(line);
    if (declaration) {
      tokens.set(declaration[1], declaration[2].trim());
    }
  }
  return tokens;
};

/**
 * The tokens the JS theme says should exist. This is the expectation the whole suite is
 * built on: theme.css is a projection of the JS theme, never an independent source.
 */
const expectedTokens = () => {
  const expected = new Map<string, string>();
  for (const [key, value] of Object.entries(palette)) {
    expected.set(`--ox-color-${kebab(key)}`, value);
  }
  expected.set('--ox-color-link', colors.link.color);
  expected.set('--ox-color-link-hover', colors.link.hover);
  for (const [key, value] of Object.entries(zIndex)) {
    expected.set(`--ox-z-index-${kebab(key)}`, String(value));
  }
  expected.set('--ox-padding-navbar-mobile', `${padding.navbar.mobile}rem`);
  expected.set('--ox-padding-navbar-desktop', `${padding.navbar.desktop}rem`);
  return expected;
};

describe('theme.css tokens', () => {
  const actual = readRootTokens();
  const expected = expectedTokens();

  it('defines a token for every value in the JS theme', () => {
    const missing = [...expected.keys()].filter((name) => !actual.has(name));
    expect(missing).toEqual([]);
  });

  it('defines no tokens the JS theme does not have', () => {
    const orphans = [...actual.keys()].filter((name) => !expected.has(name));
    expect(orphans).toEqual([]);
  });

  it('agrees with the JS theme on every value', () => {
    const mismatched: string[] = [];
    for (const [name, want] of expected) {
      const got = actual.get(name);
      if (got === undefined) { continue; } // reported by the "missing" case
      const equal = want.startsWith('#')
        ? normaliseHex(got) === normaliseHex(want)
        : got === want;
      if (!equal) {
        mismatched.push(`${name}: theme.css has ${got}, JS theme has ${want}`);
      }
    }
    expect(mismatched).toEqual([]);
  });
});

describe('component CSS', () => {
  const cssFiles = walk(srcDir).filter((file) => file !== themeCssPath);
  const paletteByValue = new Map(
    Object.entries(palette).map(([key, value]) => [normaliseHex(value), `--ox-color-${kebab(key)}`])
  );
  const themeValues = new Map([
    ...paletteByValue,
    [normaliseHex(colors.link.hover), '--ox-color-link-hover'],
  ]);

  it('has files to check', () => {
    // Guards against the walk silently finding nothing and the suite passing vacuously.
    expect(cssFiles.length).toBeGreaterThan(0);
  });

  it.each(cssFiles.map((file) => [path.relative(srcDir, file), file]))(
    '%s uses tokens rather than repeating theme values',
    (_name, file) => {
      const css = fs.readFileSync(file, 'utf8');
      const problems: string[] = [];

      for (const match of css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
        const hex = normaliseHex(match[0]);
        const token = themeValues.get(hex);
        if (token) {
          problems.push(`${match[0]} duplicates the theme — use var(${token})`);
        } else if (!KNOWN_OFF_PALETTE.has(hex)) {
          problems.push(
            `${match[0]} is not a theme value — add it to palette.ts, or to KNOWN_OFF_PALETTE in ${path.basename(__filename)} with a reason`
          );
        }
      }

      // Bare colour keywords used as a whole property value, e.g. `background: white;`.
      const colorProperty = /(?:^|[;{\s])(color|background|background-color|border-color|fill|stroke|outline-color)\s*:\s*([a-zA-Z]+)\s*;/g;
      for (const match of css.matchAll(colorProperty)) {
        const keyword = match[2].toLowerCase();
        const token = TOKENISED_KEYWORDS.get(keyword);
        if (token) {
          problems.push(`"${match[1]}: ${match[2]}" duplicates the theme — use var(${token})`);
        } else if (!COLOR_KEYWORDS_ALLOWED.has(keyword)) {
          problems.push(`"${match[1]}: ${match[2]}" is a named colour with no token — prefer a palette value`);
        }
      }

      expect(problems).toEqual([]);
    }
  );
});

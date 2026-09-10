import fs from 'fs';
import path from 'path';
import {
  colorKey, describeColor, FoundColor, opaqueKey, stripNoise, stylesheetColors,
} from './cssColors';
import { renderThemeCss, themeTokens } from './themeCss';

const srcDir = path.join(__dirname, '..');
const themeCssPath = path.join(__dirname, 'theme.css');

/**
 * Colours that appear in component CSS but are deliberately not theme values. Anything
 * here is a value we inherited from the styled-components originals and chose not to snap
 * to the nearest palette entry, because doing so would be a visual change rather than a
 * refactor. Adding to this list should be a deliberate act — prefer adding the colour to
 * palette.ts if it is really part of the design.
 *
 * Keyed by the form the checker computes: `colorKey` for a colour it can resolve, or the
 * whitespace-collapsed literal for one it cannot. See `allowlistKey` below.
 *
 * Translucent colours do not need an entry when their opaque channels are a theme value —
 * `rgba(0, 0, 0, 0.2)` is black at 20% and passes on its own. That rule is what lets
 * shadows and overlays stay readable without allowlisting every alpha we happen to use,
 * while still refusing a new hue smuggled in through rgba().
 */
const KNOWN_OFF_PALETTE = new Map([
  ['#cccccc', 'Tooltip border and the uncontrolled-form h3 rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
  ['#dddddd', 'Modal header bottom rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
]);

/**
 * How a colour is looked up in KNOWN_OFF_PALETTE.
 *
 * A resolvable colour is keyed by its channels, so the entry covers every spelling of it
 * at once. One we cannot resolve has no channels to key by, so it falls back to the
 * literal as written — meaning `hsl()` and friends have to be allowlisted per spelling,
 * which is the right amount of friction for a value the checker cannot reason about.
 */
const allowlistKey = ({ literal, rgba }: FoundColor) =>
  rgba === null ? literal.replace(/\s+/g, ' ').trim().toLowerCase() : colorKey(rgba);

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

const here = path.basename(__filename);

/**
 * Every colour the theme defines, as token name -> the value written in the JS theme.
 *
 * Read off the projection in themeCss.ts rather than re-derived from palette.ts and
 * theme.ts, so the set the checks below run over is by construction the set theme.css is
 * generated from. Restating the list here is what let `--ox-color-link` go missing: the
 * generator had it, this file did not, and nothing tied the two together.
 */
const themeColors: ReadonlyArray<readonly [string, string]> = [...themeTokens()].filter(
  ([name]) => name.startsWith('--ox-color-')
);

/**
 * Theme colours describeColor cannot reduce to channels. Asserted empty below rather than
 * cast away: such an entry would drop out of themeValues, and the colour would then read
 * as off-palette everywhere it is used — a confusing failure a long way from its cause.
 *
 * Taken as a function of the entries so that the guard itself can be tested against a
 * malformed value, rather than only ever being run over a theme that happens to be sound.
 */
const unresolvableColors = (entries: ReadonlyArray<readonly [string, string]>) => entries
  .filter(([, value]) => describeColor(value) === null)
  .map(([token, value]) => `${token}: ${value}`);

const unresolvableThemeColors = unresolvableColors(themeColors);

/**
 * Every theme colour, by opaque channels, so a literal can be traced back to its token.
 *
 * A value can carry more than one token — `--ox-color-link` and `--ox-color-medium-blue`
 * are both #026AA1 — so every token holding a value is kept. Reporting all of them lets
 * the author pick the one that says what they mean, rather than being sent to whichever
 * entry happened to be written last.
 */
const themeValues = themeColors.reduce((byValue, [token, value]) => {
  const rgba = describeColor(value);
  if (rgba !== null) {
    const key = opaqueKey(rgba);
    byValue.set(key, [...(byValue.get(key) ?? []), token]);
  }
  return byValue;
}, new Map<string, string[]>());

/** Everything wrong with the colours in one stylesheet. Empty means the file is clean. */
const colorProblems = (css: string): string[] => {
  const problems: string[] = [];

  for (const found of stylesheetColors(css)) {
    const { literal, rgba } = found;
    const key = allowlistKey(found);

    if (KNOWN_OFF_PALETTE.has(key)) { continue; }

    if (rgba === null) {
      problems.push(
        `"${literal}" is a colour this check cannot resolve — build it from a theme token, or add "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
      );
      continue;
    }

    const hex = opaqueKey(rgba);
    const tokens = themeValues.get(hex);

    if (rgba.a < 1) {
      // An alpha variant of a theme colour is fine — there is no token form for it.
      if (!tokens) {
        problems.push(
          `"${literal}" is translucent and its channels (${hex}) are not a theme value — add ${hex} to palette.ts, or "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
        );
      }
    } else if (tokens) {
      problems.push(
        `${literal} duplicates the theme — use ${tokens.map((name) => `var(${name})`).join(' or ')}`
      );
    } else {
      problems.push(
        `${literal} is not a theme value — add it to palette.ts, or to KNOWN_OFF_PALETTE in ${here} with a reason`
      );
    }
  }

  return problems;
};

/** --ox-* tokens a stylesheet reads but theme.css does not define. */
const unknownTokenReferences = (css: string, defined: Map<string, string>) => [
  ...new Set(
    [...stripNoise(css).matchAll(/var\(\s*(--ox-[\w-]+)/g)]
      .map((match) => match[1])
      .filter((name) => !defined.has(name))
  ),
];

describe('theme.css', () => {
  it('is what the generator produces from the JS theme', () => {
    // theme.css is generated, not written: `npm run generate:theme-css`. If this fails,
    // the JS theme moved and the committed CSS did not — regenerate rather than editing
    // theme.css by hand.
    expect(fs.readFileSync(themeCssPath, 'utf8')).toEqual(renderThemeCss());
  });
});

/**
 * The checker below is only worth anything if it fails on the things it claims to fail on.
 * These cases are the contract: every colour syntax reaches the palette check, and the
 * ways of writing a colour that are legitimately fine stay quiet.
 *
 * The parsing underneath is covered in cssColors.spec.ts. What is tested here is the layer
 * this file adds: which colours the ui-components palette recognises, and what an author
 * is told about the ones it does not.
 */
describe('the colour check itself', () => {
  const rule = (declaration: string) => colorProblems(`.x { ${declaration} }`);

  it.each([
    ['hex', 'color: #d5d5d5;', '--ox-color-pale'],
    ['short hex', 'color: #FFF;', '--ox-color-white'],
    ['named colour', 'color: white;', '--ox-color-white'],
    ['named colour in a shorthand', 'border: 1px solid whitesmoke;', '--ox-color-neutral-bright'],
    ['functional rgb', 'color: rgb(213, 213, 213);', '--ox-color-pale'],
    ['space-separated rgb', 'color: rgb(213 213 213 / 100%);', '--ox-color-pale'],
    ['percentage rgb', 'color: rgb(100%, 100%, 100%);', '--ox-color-white'],
    ['hex in a var() fallback', 'color: var(--thing, #d5d5d5);', '--ox-color-pale'],
    ['colour in a gradient stop', 'background: linear-gradient(to right, #d5d5d5, transparent);', '--ox-color-pale'],
    ['named colour in a custom property', '--tabs-border-color: whitesmoke;', '--ox-color-neutral-bright'],
    ['named colour in box-shadow', 'box-shadow: 0 0 0.2rem white;', '--ox-color-white'],
    ['named colour in a vendor-prefixed property', '-webkit-text-fill-color: white;', '--ox-color-white'],
    ['hex outside a colour property', 'animation-name: #d5d5d5;', '--ox-color-pale'],
  ])('flags a %s that duplicates a token', (_case, declaration, token) => {
    expect(rule(declaration)).toEqual([expect.stringContaining(`use var(${token})`)]);
  });

  it.each([
    ['hex', 'color: #123456;'],
    ['named colour', 'color: tan;'],
    ['named colour in a longhand', 'color: red;'],
    ['named colour in a shorthand', 'border: 1px solid red;'],
    ['named colour in a gradient', 'background: linear-gradient(to right, tan, transparent);'],
    ['rgb', 'color: rgb(1, 2, 3);'],
    ['hsl', 'color: hsl(200 50% 50%);'],
    ['oklch', 'color: oklch(70% 0.1 200);'],
    ['color()', 'color: color(display-p3 1 0 0);'],
    ['translucent off-palette colour', 'background: rgba(1, 2, 3, 0.5);'],
    // rgb() may legally hold var() channels, but then we cannot tell what colour it is;
    // flagging beats skipping, which would let an off-palette value through unchecked.
    ['rgb() with var() channels', 'background: rgba(var(--channels), 0.2);'],
  ])('flags an untokenised %s', (_case, declaration) => {
    expect(rule(declaration)).toHaveLength(1);
  });

  it.each([
    ['a token reference', 'color: var(--ox-color-pale);'],
    ['a nested token fallback', 'color: var(--tabs-border-color, var(--ox-color-pale));'],
    ['color-mix over tokens', 'background: color-mix(in srgb, var(--ox-color-black) 20%, transparent);'],
    ['transparent', 'background: transparent;'],
    ['currentcolor', 'border-color: currentcolor;'],
    ['a system colour', 'outline: 0.2rem auto Highlight;'],
    ['an allowlisted colour', 'border-color: #ccc;'],
    ['alpha over a theme colour', 'box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);'],
    ['a keyword that merely contains a colour name', 'animation-name: moveblue;'],
    ['an animation named after a colour', 'animation-name: red;'],
    ['a font named after a colour', 'font-family: white;'],
    ['a grid area named after a colour', 'grid-area: gold;'],
    ['a non-colour value', 'filter: grayscale(1);'],
  ])('stays quiet for %s', (_case, declaration) => {
    expect(rule(declaration)).toEqual([]);
  });

  it('ignores colour-shaped text outside declaration values', () => {
    expect(colorProblems('.red { }')).toEqual([]);
    expect(colorProblems('.x { content: "tan"; }')).toEqual([]);
    expect(colorProblems('.x { /* #d5d5d5 */ color: var(--ox-color-pale); }')).toEqual([]);
  });

  it('checks declarations nested in at-rules', () => {
    const css = '@media screen and (min-width: 75em) { .x { color: #d5d5d5; } }';
    expect(colorProblems(css)).toEqual([expect.stringContaining('use var(--ox-color-pale)')]);
  });

  it('can reduce every theme colour to channels', () => {
    // Guards the themeValues map: see unresolvableThemeColors above for why a silent drop
    // would be worse than a failure here.
    expect(unresolvableThemeColors).toEqual([]);
  });

  it('would fail if a theme colour were malformed', () => {
    // The guard above only means something if it can fail. `#ggg` is the case that used to
    // slip through it: expanded to six characters it looked like a colour, so it entered
    // themeValues under a key nothing could ever match.
    expect(unresolvableColors([['--ox-color-bad', '#ggg']])).toEqual(['--ox-color-bad: #ggg']);
  });

  it('checks every colour token the theme projects, semantic ones included', () => {
    // themeColors is derived from the projection, so this cannot drift the way the
    // hand-written list did — --ox-color-link was absent from it, leaving the link colour
    // outside both the resolvability guard and the duplicate check.
    expect(themeColors.map(([name]) => name)).toEqual(
      [...themeTokens().keys()].filter((name) => name.startsWith('--ox-color-'))
    );
    expect(themeColors.map(([name]) => name)).toEqual(
      expect.arrayContaining(['--ox-color-link', '--ox-color-link-hover'])
    );
  });

  it('names every token that carries a colour when more than one does', () => {
    // #026AA1 is both palette.mediumBlue and colors.link.color. Naming only one would send
    // half the authors who hit this to a token that does not say what they mean.
    expect(rule('color: #026AA1;')).toEqual([
      '#026AA1 duplicates the theme — use var(--ox-color-medium-blue) or var(--ox-color-link)',
    ]);
  });

  it('flags a reference to a token that does not exist', () => {
    const defined = themeTokens();
    expect(unknownTokenReferences('.x { color: var(--ox-color-pale); }', defined)).toEqual([]);
    expect(unknownTokenReferences('.x { color: var(--ox-color-palee); }', defined))
      .toEqual(['--ox-color-palee']);
  });
});

describe('component CSS', () => {
  const cssFiles = walk(srcDir).filter((file) => file !== themeCssPath);
  const tokens = themeTokens();

  it('has files to check', () => {
    // Guards against the walk silently finding nothing and the suite passing vacuously.
    expect(cssFiles.length).toBeGreaterThan(0);
  });

  it.each(cssFiles.map((file) => [path.relative(srcDir, file), file]))(
    '%s uses tokens rather than repeating theme values',
    (_name, file) => {
      expect(colorProblems(fs.readFileSync(file, 'utf8'))).toEqual([]);
    }
  );

  it.each(cssFiles.map((file) => [path.relative(srcDir, file), file]))(
    '%s only references tokens that exist',
    (_name, file) => {
      expect(unknownTokenReferences(fs.readFileSync(file, 'utf8'), tokens)).toEqual([]);
    }
  );
});

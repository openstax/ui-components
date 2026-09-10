import fs from 'fs';
import path from 'path';
import {
  colorKey, describeColor, FoundColor, opaqueKey, stripNoise, stylesheetColors,
} from './cssColors';
import { renderThemeCss, themeTokens } from './themeCss';

const srcDir = path.join(__dirname, '..');
const themeCssPath = path.join(__dirname, 'theme.css');

/**
 * Colors that appear in component CSS but are deliberately not theme values. Anything
 * here is a value we inherited from the styled-components originals and chose not to snap
 * to the nearest palette entry, because doing so would be a visual change rather than a
 * refactor. Adding to this list should be a deliberate act — prefer adding the color to
 * palette.ts if it is really part of the design.
 *
 * Keyed by the form the checker computes: `colorKey` for a color it can resolve, or the
 * whitespace-collapsed literal for one it cannot. See `allowlistKey` below.
 *
 * Translucent colors do not need an entry when their opaque channels are a theme value —
 * `rgba(0, 0, 0, 0.2)` is black at 20% and passes on its own. That rule is what lets
 * shadows and overlays stay readable without allowlisting every alpha we happen to use,
 * while still refusing a new hue smuggled in through rgba().
 */
const KNOWN_OFF_PALETTE = new Map([
  ['#cccccc', 'Tooltip border and the uncontrolled-form h3 rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
  ['#dddddd', 'Modal header bottom rule. Predates the palette; nearest entry is pale (#d5d5d5).'],
]);

/**
 * How a color is looked up in KNOWN_OFF_PALETTE.
 *
 * A resolvable color is keyed by its channels, so the entry covers every spelling of it
 * at once. One we cannot resolve has no channels to key by, so it falls back to the
 * literal as written — meaning `hsl()` and friends have to be allowlisted per spelling,
 * which is the right amount of friction for a value the checker cannot reason about.
 */
const allowlistKey = ({ literal, rgba }: FoundColor) =>
  rgba === null ? literal.replace(/\s+/g, ' ').trim().toLowerCase() : colorKey(rgba);

const walk = (
  dir: string, matches: (fileName: string) => boolean, out: string[] = []
): string[] => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, matches, out);
    } else if (matches(entry.name)) {
      out.push(full);
    }
  }
  return out;
};

const isStylesheet = (fileName: string) => fileName.endsWith('.css');

/** Source modules, specs excluded: a spec's CSS import is mapped away by jest anyway. */
const isModule = (fileName: string) =>
  /\.tsx?$/.test(fileName) && !/\.spec\.tsx?$/.test(fileName);

const here = path.basename(__filename);

/**
 * Every color the theme defines, as token name -> the value written in the JS theme.
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
 * Theme colors describeColor cannot reduce to channels. Asserted empty below rather than
 * cast away: such an entry would drop out of themeValues, and the color would then read
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
 * Every theme color, by opaque channels, so a literal can be traced back to its token.
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

/**
 * Everything wrong with the colors in one stylesheet, split by what it would take to fix.
 *
 * `duplicates` are literals the theme already holds a token for: a mechanical swap that
 * changes nothing on screen, and the only kind of finding PENDING_SWEEP defers.
 *
 * `offPalette` are colors the theme does not have at all, including the ones the checker
 * cannot resolve. Introducing one is a design decision rather than a missed swap, so it is
 * refused in every stylesheet — a file awaiting the sweep is no more entitled to a new
 * color than a clean one. Keeping the two apart is what stops a pending file from
 * smuggling one in under cover of the literals it is already known to carry.
 *
 * Both empty means the file is clean.
 */
interface ColorProblems { duplicates: string[]; offPalette: string[] }

const colorProblems = (css: string): ColorProblems => {
  const duplicates: string[] = [];
  const offPalette: string[] = [];

  for (const found of stylesheetColors(css)) {
    const { literal, rgba } = found;
    const key = allowlistKey(found);

    if (KNOWN_OFF_PALETTE.has(key)) { continue; }

    if (rgba === null) {
      offPalette.push(
        `"${literal}" is a color this check cannot resolve — build it from a theme token, or add "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
      );
      continue;
    }

    const hex = opaqueKey(rgba);
    const tokens = themeValues.get(hex);

    if (rgba.a < 1) {
      // An alpha variant of a theme color is fine — there is no token form for it.
      if (!tokens) {
        offPalette.push(
          `"${literal}" is translucent and its channels (${hex}) are not a theme value — add ${hex} to palette.ts, or "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
        );
      }
    } else if (tokens) {
      duplicates.push(
        `${literal} duplicates the theme — use ${tokens.map((name) => `var(${name})`).join(' or ')}`
      );
    } else {
      offPalette.push(
        `${literal} is not a theme value — add it to palette.ts, or to KNOWN_OFF_PALETTE in ${here} with a reason`
      );
    }
  }

  return { duplicates, offPalette };
};

/** Both kinds of finding together, for the cases where the distinction does not matter. */
const allColorProblems = (css: string): string[] => {
  const { duplicates, offPalette } = colorProblems(css);
  return [...duplicates, ...offPalette];
};

/**
 * --ox-* tokens a stylesheet reads but theme.css does not define.
 *
 * The match is case-insensitive because CSS function names are: `VAR(--ox-color-pale)` is
 * the same reference as `var(--ox-color-pale)`, and a check that only knew the lowercase
 * spelling would let a typo through in the other one. The lookup stays case-sensitive,
 * because custom property *names* are — `var(--OX-color-pale)` really is a reference to
 * something nothing defines, and silently falling through to its fallback is the failure
 * this check exists to catch.
 */
const unknownTokenReferences = (css: string, defined: Map<string, string>) => [
  ...new Set(
    [...stripNoise(css).matchAll(/var\(\s*(--ox-[\w-]+)/gi)]
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
 * These cases are the contract: every color syntax reaches the palette check, and the
 * ways of writing a color that are legitimately fine stay quiet.
 *
 * The parsing underneath is covered in cssColors.spec.ts. What is tested here is the layer
 * this file adds: which colors the ui-components palette recognizes, and what an author
 * is told about the ones it does not.
 */
describe('the color check itself', () => {
  const rule = (declaration: string) => allColorProblems(`.x { ${declaration} }`);

  it.each([
    ['hex', 'color: #d5d5d5;', '--ox-color-pale'],
    ['short hex', 'color: #FFF;', '--ox-color-white'],
    ['named color', 'color: white;', '--ox-color-white'],
    ['named color in a shorthand', 'border: 1px solid whitesmoke;', '--ox-color-neutral-bright'],
    ['functional rgb', 'color: rgb(213, 213, 213);', '--ox-color-pale'],
    ['space-separated rgb', 'color: rgb(213 213 213 / 100%);', '--ox-color-pale'],
    ['percentage rgb', 'color: rgb(100%, 100%, 100%);', '--ox-color-white'],
    ['hex in a var() fallback', 'color: var(--thing, #d5d5d5);', '--ox-color-pale'],
    ['hex in an uppercase var() fallback', 'color: VAR(--thing, #d5d5d5);', '--ox-color-pale'],
    ['color in a gradient stop', 'background: linear-gradient(to right, #d5d5d5, transparent);', '--ox-color-pale'],
    ['named color in a custom property', '--tabs-border-color: whitesmoke;', '--ox-color-neutral-bright'],
    ['named color in box-shadow', 'box-shadow: 0 0 0.2rem white;', '--ox-color-white'],
    ['named color in a vendor-prefixed property', '-webkit-text-fill-color: white;', '--ox-color-white'],
    ['hex outside a color property', 'animation-name: #d5d5d5;', '--ox-color-pale'],
  ])('flags a %s that duplicates a token', (_case, declaration, token) => {
    expect(rule(declaration)).toEqual([expect.stringContaining(`use var(${token})`)]);
  });

  it.each([
    ['hex', 'color: #123456;'],
    ['named color', 'color: tan;'],
    ['named color in a longhand', 'color: red;'],
    ['named color in a shorthand', 'border: 1px solid red;'],
    ['named color in a gradient', 'background: linear-gradient(to right, tan, transparent);'],
    ['rgb', 'color: rgb(1, 2, 3);'],
    ['hsl', 'color: hsl(200 50% 50%);'],
    ['oklch', 'color: oklch(70% 0.1 200);'],
    ['color()', 'color: color(display-p3 1 0 0);'],
    ['translucent off-palette color', 'background: rgba(1, 2, 3, 0.5);'],
    // rgb() may legally hold var() channels, but then we cannot tell what color it is;
    // flagging beats skipping, which would let an off-palette value through unchecked.
    ['rgb() with var() channels', 'background: rgba(var(--channels), 0.2);'],
  ])('flags an untokenized %s', (_case, declaration) => {
    expect(rule(declaration)).toHaveLength(1);
  });

  it.each([
    ['a token reference', 'color: var(--ox-color-pale);'],
    ['a nested token fallback', 'color: var(--tabs-border-color, var(--ox-color-pale));'],
    ['an uppercase token reference', 'color: VAR(--ox-color-pale);'],
    ['color-mix over tokens', 'background: color-mix(in srgb, var(--ox-color-black) 20%, transparent);'],
    ['transparent', 'background: transparent;'],
    ['currentcolor', 'border-color: currentcolor;'],
    ['a system color', 'outline: 0.2rem auto Highlight;'],
    ['an allowlisted color', 'border-color: #ccc;'],
    ['alpha over a theme color', 'box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);'],
    ['a keyword that merely contains a color name', 'animation-name: moveblue;'],
    ['an animation named after a color', 'animation-name: red;'],
    ['a font named after a color', 'font-family: white;'],
    ['a grid area named after a color', 'grid-area: gold;'],
    ['a non-color value', 'filter: grayscale(1);'],
  ])('stays quiet for %s', (_case, declaration) => {
    expect(rule(declaration)).toEqual([]);
  });

  it('ignores color-shaped text outside declaration values', () => {
    expect(allColorProblems('.red { }')).toEqual([]);
    expect(allColorProblems('.x { content: "tan"; }')).toEqual([]);
    expect(allColorProblems('.x { /* #d5d5d5 */ color: var(--ox-color-pale); }')).toEqual([]);
  });

  it('checks declarations nested in at-rules', () => {
    const css = '@media screen and (min-width: 75em) { .x { color: #d5d5d5; } }';
    expect(allColorProblems(css)).toEqual([expect.stringContaining('use var(--ox-color-pale)')]);
  });

  it('sorts a finding by whether the theme already has the color', () => {
    // The split is what PENDING_SWEEP keys off, so it is worth stating directly: a file
    // may be excused the literals it copied from the theme, never a color the theme
    // does not have. Both kinds in one stylesheet, to show neither absorbs the other.
    const css = '.x { color: #d5d5d5; border-color: #123456; background: hsl(200 50% 50%); }';
    expect(colorProblems(css)).toEqual({
      duplicates: [expect.stringContaining('use var(--ox-color-pale)')],
      offPalette: [
        expect.stringContaining('#123456 is not a theme value'),
        expect.stringContaining('cannot resolve'),
      ],
    });
  });

  it('can reduce every theme color to channels', () => {
    // Guards the themeValues map: see unresolvableThemeColors above for why a silent drop
    // would be worse than a failure here.
    expect(unresolvableThemeColors).toEqual([]);
  });

  it('would fail if a theme color were malformed', () => {
    // The guard above only means something if it can fail. `#ggg` is the case that used to
    // slip through it: expanded to six characters it looked like a color, so it entered
    // themeValues under a key nothing could ever match.
    expect(unresolvableColors([['--ox-color-bad', '#ggg']])).toEqual(['--ox-color-bad: #ggg']);
  });

  it('checks every color token the theme projects, semantic ones included', () => {
    // themeColors is derived from the projection, so this cannot drift the way the
    // hand-written list did — --ox-color-link was absent from it, leaving the link color
    // outside both the resolvability guard and the duplicate check.
    expect(themeColors.map(([name]) => name)).toEqual(
      [...themeTokens().keys()].filter((name) => name.startsWith('--ox-color-'))
    );
    expect(themeColors.map(([name]) => name)).toEqual(
      expect.arrayContaining(['--ox-color-link', '--ox-color-link-hover'])
    );
  });

  it('names every token that carries a color when more than one does', () => {
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

  it('reads a reference however the var() is spelled', () => {
    // CSS function names are ASCII case-insensitive. Knowing only the lowercase spelling
    // would mean an uppercase typo fell through to its fallback unreported — the one
    // thing this check is for.
    const defined = themeTokens();
    expect(unknownTokenReferences('.x { color: VAR(--ox-color-pale); }', defined)).toEqual([]);
    expect(unknownTokenReferences('.x { color: VAR(--ox-color-palee); }', defined))
      .toEqual(['--ox-color-palee']);
    expect(unknownTokenReferences('.x { color: Var( --ox-color-palee ); }', defined))
      .toEqual(['--ox-color-palee']);
  });

  it('flags a token name whose case does not match', () => {
    // Property names, unlike function names, are case-sensitive: --OX-color-pale is not
    // the token, so the declaration resolves to its fallback or nothing at all.
    expect(unknownTokenReferences('.x { color: var(--OX-color-pale); }', themeTokens()))
      .toEqual(['--OX-color-pale']);
  });
});

/**
 * Stylesheets migrated before the tokens existed, still carrying hand-copied literals.
 * Each is removed by the PR that sweeps it; the list is expected to reach empty, at which
 * point it and the assertion below go away with it.
 *
 * The exemption is narrow: only the duplicate-literal check. The off-palette check below
 * runs over these files too, so being on this list defers a swap that is already owed and
 * grants nothing else — a new color in one of them fails exactly as it would anywhere.
 *
 * The point of listing them rather than skipping the check is that the list is asserted to
 * be *exactly* the set with duplicates left, so it cannot rot in either direction: dropping
 * a name without sweeping the file fails, and sweeping a file without dropping its name
 * fails too.
 */
const PENDING_SWEEP = new Set([
  'components/Button.css',
  'components/ButtonBar.css',
  'components/Checkbox/Checkbox.css',
  'components/CloseModalButton.css',
  'components/DropdownMenu.css',
  'components/Modal.css',
  'components/NavBar.css',
  'components/NavBar.stories.css',
  'components/NavBarMenuButtons.css',
  'components/Overlay.css',
  'components/Radio.css',
  'components/Tabs.css',
  'components/Text.css',
  'components/Toast.css',
  'components/Tooltip.css',
  'components/forms/uncontrolled/inputTypes.css',
]);

describe('component CSS', () => {
  const cssFiles = walk(srcDir, isStylesheet).filter((file) => file !== themeCssPath);
  const tokens = themeTokens();
  const name = (file: string) => path.relative(srcDir, file);

  it('has files to check', () => {
    // Guards against the walk silently finding nothing and the suite passing vacuously.
    expect(cssFiles.length).toBeGreaterThan(0);
  });

  it('lists exactly the stylesheets whose literals still duplicate the theme', () => {
    const failing = cssFiles
      .filter((file) => colorProblems(fs.readFileSync(file, 'utf8')).duplicates.length > 0)
      .map(name);
    expect(failing.sort()).toEqual([...PENDING_SWEEP].sort());
  });

  it.each(cssFiles.map((file) => [name(file), file]))(
    '%s introduces no color the theme does not have',
    (_name, file) => {
      // Every stylesheet, PENDING_SWEEP included: the exemption is for literals that
      // duplicate a token, not a licence to add a color while the file waits its turn.
      expect(colorProblems(fs.readFileSync(file, 'utf8')).offPalette).toEqual([]);
    }
  );

  it.each(
    cssFiles.filter((file) => !PENDING_SWEEP.has(name(file))).map((file) => [name(file), file])
  )(
    '%s uses tokens rather than repeating theme values',
    (_name, file) => {
      expect(colorProblems(fs.readFileSync(file, 'utf8')).duplicates).toEqual([]);
    }
  );

  it.each(cssFiles.map((file) => [name(file), file]))(
    '%s only references tokens that exist',
    (_name, file) => {
      expect(unknownTokenReferences(fs.readFileSync(file, 'utf8'), tokens)).toEqual([]);
    }
  );
});

/**
 * Stylesheets a module imports, as absolute paths.
 *
 * Only relative imports, because that is how a component reaches its own CSS and the token
 * file. A package-relative spelling would not resolve inside src/ anyway.
 */
const importedStylesheets = (moduleFile: string, source: string): string[] =>
  [...source.matchAll(/import\s+['"](\.[^'"]*\.css)['"]/g)]
    .map((match) => path.resolve(path.dirname(moduleFile), match[1]));

/**
 * Stylesheets this module pulls in that read a token, when the module does not also pull in
 * the file that defines them. Empty means the module is sound.
 *
 * There is no bundler here: build.bash rsyncs CSS 1:1, so nothing resolves an `@import` for
 * us and a stylesheet does not drag theme.css in by itself. The component that imports the
 * stylesheet has to import the token file too, or every `var(--ox-*)` in it silently takes
 * its fallback — which is exactly the failure that is invisible in review, because a
 * fallback is usually the literal the token replaced and so looks right on screen.
 */
const missingThemeImport = (
  moduleFile: string, source: string, readsTokens: ReadonlySet<string>
): string[] => {
  const imported = importedStylesheets(moduleFile, source);
  const needy = imported.filter((file) => readsTokens.has(file));

  return imported.includes(themeCssPath) ? [] : needy;
};

/** Whether a stylesheet reads a theme token at all. */
const readsThemeToken = (css: string) => /var\(\s*--ox-/i.test(stripNoise(css));

describe('the token import rule', () => {
  const moduleFile = path.join(srcDir, 'components/Thing.tsx');
  const ownStyles = path.join(srcDir, 'components/Thing.css');
  const readsTokens = new Set([ownStyles]);

  it('flags a component that imports a token-reading stylesheet and not the tokens', () => {
    expect(missingThemeImport(moduleFile, "import './Thing.css';", readsTokens))
      .toEqual([ownStyles]);
  });

  it('stays quiet when the component imports the token file too', () => {
    const source = "import './Thing.css';\nimport '../theme/theme.css';";
    expect(missingThemeImport(moduleFile, source, readsTokens)).toEqual([]);
  });

  it('stays quiet when the stylesheet reads no token', () => {
    expect(missingThemeImport(moduleFile, "import './Thing.css';", new Set())).toEqual([]);
  });

  it('resolves an import from a subdirectory', () => {
    const nested = path.join(srcDir, 'components/Thing/Thing.tsx');
    const nestedStyles = path.join(srcDir, 'components/Thing/Thing.css');
    expect(missingThemeImport(nested, "import './Thing.css';", new Set([nestedStyles])))
      .toEqual([nestedStyles]);
  });

  it('reads a token reference through comments and however var() is spelled', () => {
    expect(readsThemeToken('.x { color: VAR(--ox-color-pale); }')).toBe(true);
    expect(readsThemeToken('.x { /* var(--ox-color-pale) */ color: red; }')).toBe(false);
    expect(readsThemeToken('.x { color: var(--tabs-border-color); }')).toBe(false);
  });

  it.each(walk(srcDir, isModule).map((file) => [path.relative(srcDir, file), file]))(
    '%s imports theme.css if its stylesheet needs it',
    (_name, file) => {
      // Vacuous on this branch by construction — no stylesheet reads a token until the
      // sweep in #143 converts one, and the rule exists so that sweep cannot forget the
      // import. The helper above is tested on its own, so the rule itself is pinned now.
      const readsTokens = new Set(
        walk(srcDir, isStylesheet).filter((css) => readsThemeToken(fs.readFileSync(css, 'utf8')))
      );
      expect(missingThemeImport(file, fs.readFileSync(file, 'utf8'), readsTokens)).toEqual([]);
    }
  );
});

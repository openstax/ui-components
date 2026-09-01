import fs from 'fs';
import path from 'path';
import { palette } from './palette';
import { colors } from '../theme';
import { renderThemeCss, themeTokens } from './themeCss';

const srcDir = path.join(__dirname, '..');
const themeCssPath = path.join(__dirname, 'theme.css');

const kebab = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

/**
 * Colours that appear in component CSS but are deliberately not theme values. Anything
 * here is a value we inherited from the styled-components originals and chose not to snap
 * to the nearest palette entry, because doing so would be a visual change rather than a
 * refactor. Adding to this list should be a deliberate act — prefer adding the colour to
 * palette.ts if it is really part of the design.
 *
 * Keyed by the canonical form the checker computes: `#rrggbb` for an opaque colour, or the
 * whitespace-collapsed literal for anything translucent or otherwise unresolvable.
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
 * The CSS named colours, so that `border: 1px solid tan` is caught the same way `#d2b48c`
 * is. Deliberately excludes `transparent`, `currentcolor`, the CSS-wide keywords and the
 * system colours: none of those hardcode a value, so none of them are a problem.
 */
const NAMED_COLORS = new Map(
  (
    'aliceblue:f0f8ff antiquewhite:faebd7 aqua:00ffff aquamarine:7fffd4 azure:f0ffff ' +
    'beige:f5f5dc bisque:ffe4c4 black:000000 blanchedalmond:ffebcd blue:0000ff ' +
    'blueviolet:8a2be2 brown:a52a2a burlywood:deb887 cadetblue:5f9ea0 chartreuse:7fff00 ' +
    'chocolate:d2691e coral:ff7f50 cornflowerblue:6495ed cornsilk:fff8dc crimson:dc143c ' +
    'cyan:00ffff darkblue:00008b darkcyan:008b8b darkgoldenrod:b8860b darkgray:a9a9a9 ' +
    'darkgreen:006400 darkgrey:a9a9a9 darkkhaki:bdb76b darkmagenta:8b008b ' +
    'darkolivegreen:556b2f darkorange:ff8c00 darkorchid:9932cc darkred:8b0000 ' +
    'darksalmon:e9967a darkseagreen:8fbc8f darkslateblue:483d8b darkslategray:2f4f4f ' +
    'darkslategrey:2f4f4f darkturquoise:00ced1 darkviolet:9400d3 deeppink:ff1493 ' +
    'deepskyblue:00bfff dimgray:696969 dimgrey:696969 dodgerblue:1e90ff firebrick:b22222 ' +
    'floralwhite:fffaf0 forestgreen:228b22 fuchsia:ff00ff gainsboro:dcdcdc ' +
    'ghostwhite:f8f8ff gold:ffd700 goldenrod:daa520 gray:808080 green:008000 ' +
    'greenyellow:adff2f grey:808080 honeydew:f0fff0 hotpink:ff69b4 indianred:cd5c5c ' +
    'indigo:4b0082 ivory:fffff0 khaki:f0e68c lavender:e6e6fa lavenderblush:fff0f5 ' +
    'lawngreen:7cfc00 lemonchiffon:fffacd lightblue:add8e6 lightcoral:f08080 ' +
    'lightcyan:e0ffff lightgoldenrodyellow:fafad2 lightgray:d3d3d3 lightgreen:90ee90 ' +
    'lightgrey:d3d3d3 lightpink:ffb6c1 lightsalmon:ffa07a lightseagreen:20b2aa ' +
    'lightskyblue:87cefa lightslategray:778899 lightslategrey:778899 ' +
    'lightsteelblue:b0c4de lightyellow:ffffe0 lime:00ff00 limegreen:32cd32 linen:faf0e6 ' +
    'magenta:ff00ff maroon:800000 mediumaquamarine:66cdaa mediumblue:0000cd ' +
    'mediumorchid:ba55d3 mediumpurple:9370db mediumseagreen:3cb371 ' +
    'mediumslateblue:7b68ee mediumspringgreen:00fa9a mediumturquoise:48d1cc ' +
    'mediumvioletred:c71585 midnightblue:191970 mintcream:f5fffa mistyrose:ffe4e1 ' +
    'moccasin:ffe4b5 navajowhite:ffdead navy:000080 oldlace:fdf5e6 olive:808000 ' +
    'olivedrab:6b8e23 orange:ffa500 orangered:ff4500 orchid:da70d6 palegoldenrod:eee8aa ' +
    'palegreen:98fb98 paleturquoise:afeeee palevioletred:db7093 papayawhip:ffefd5 ' +
    'peachpuff:ffdab9 peru:cd853f pink:ffc0cb plum:dda0dd powderblue:b0e0e6 ' +
    'purple:800080 rebeccapurple:663399 red:ff0000 rosybrown:bc8f8f royalblue:4169e1 ' +
    'saddlebrown:8b4513 salmon:fa8072 sandybrown:f4a460 seagreen:2e8b57 seashell:fff5ee ' +
    'sienna:a0522d silver:c0c0c0 skyblue:87ceeb slateblue:6a5acd slategray:708090 ' +
    'slategrey:708090 snow:fffafa springgreen:00ff7f steelblue:4682b4 tan:d2b48c ' +
    'teal:008080 thistle:d8bfd8 tomato:ff6347 turquoise:40e0d0 violet:ee82ee ' +
    'wheat:f5deb3 white:ffffff whitesmoke:f5f5f5 yellow:ffff00 yellowgreen:9acd32'
  )
    .split(' ')
    .map((entry) => entry.split(':') as [string, string])
);

/** Functions whose arguments *are* the colour, rather than containing one. */
const COLOR_FUNCTIONS = new Set([
  'rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch', 'color', 'device-cmyk',
]);

interface Color {
  /** Opaque channels as `#rrggbb`, or null when the syntax is one we cannot resolve. */
  hex: string | null;
  /** 0–1; 1 for an opaque colour. */
  alpha: number;
  /** Canonical key for the allowlist. */
  key: string;
}

const expandHex = (body: string) =>
  body.length <= 4 ? body.split('').map((c) => c + c).join('') : body;

/**
 * The four legal hex-colour lengths, digits included. Checking the *expanded* length is not
 * enough: `#ggg` expands to six characters and would sail through as a colour, which would
 * defeat unresolvableThemeColors — the one guard that stops a malformed palette value from
 * entering themeValues under a key nothing can match.
 */
const HEX_COLOR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/;

const parseHex = (literal: string): Color | null => {
  const lowered = literal.toLowerCase();
  if (!HEX_COLOR.test(lowered)) { return null; }
  const body = expandHex(lowered.slice(1));
  const hex = `#${body.slice(0, 6)}`;
  const alpha = body.length === 8 ? parseInt(body.slice(6, 8), 16) / 255 : 1;
  return { hex, alpha, key: alpha === 1 ? hex : `#${body}` };
};

const channel = (raw: string) => {
  const value = raw.endsWith('%') ? (parseFloat(raw) / 100) * 255 : parseFloat(raw);
  return Number.isFinite(value) ? Math.round(Math.min(255, Math.max(0, value))) : null;
};

const parseRgb = (args: string[], key: string): Color => {
  const channels = args.slice(0, 3).map(channel);
  const rawAlpha = args[3];
  const alpha = rawAlpha === undefined
    ? 1
    : (rawAlpha.endsWith('%') ? parseFloat(rawAlpha) / 100 : parseFloat(rawAlpha));
  if (channels.length !== 3 || channels.some((c) => c === null) || !Number.isFinite(alpha)) {
    return { hex: null, alpha: 1, key };
  }
  const hex = `#${channels.map((c) => (c as number).toString(16).padStart(2, '0')).join('')}`;
  return { hex, alpha, key: alpha === 1 ? hex : key };
};

/** Reduce a colour literal to channels + alpha, or `hex: null` when we cannot. */
const describeColor = (literal: string): Color => {
  const key = literal.replace(/\s+/g, ' ').trim().toLowerCase();

  if (literal.startsWith('#')) {
    return parseHex(literal) ?? { hex: null, alpha: 1, key };
  }

  const call = /^([a-zA-Z-]+)\((.*)\)$/s.exec(literal);
  if (call) {
    const name = call[1].toLowerCase();
    const args = call[2].split(/[\s,/]+/).filter(Boolean);
    // rgb()/rgba() can legally contain var() arguments; treat unresolvable ones as errors
    // rather than skipping the check entirely (which would allow off-palette colours through).
    if (name === 'rgb' || name === 'rgba') { return parseRgb(args, key); }
    return { hex: null, alpha: 1, key };
  }

  const named = NAMED_COLORS.get(literal.toLowerCase());
  return named ? { hex: `#${named}`, alpha: 1, key: `#${named}` } : { hex: null, alpha: 1, key };
};

/**
 * Strip the parts of a stylesheet that can hold colour-shaped text without meaning a
 * colour: comments, string literals and url() payloads (which may contain a data: URI
 * complete with `;` and `#`, and would otherwise wreck the declaration split).
 */
const stripNoise = (css: string) => css
  .replace(/\/\*[\s\S]*?\*\//g, ' ')
  .replace(/url\(\s*(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^)]*)\)/gi, 'url()')
  .replace(/"(?:[^"\\]|\\.)*"/g, '""')
  .replace(/'(?:[^'\\]|\\.)*'/g, "''");

interface Declaration {
  /** Lower-cased property name. */
  property: string;
  value: string;
}

/**
 * Declarations at any nesting depth (so inside @media too). Only text that ends up on the
 * right of a `:` inside a block counts, which keeps selectors, at-rule preludes and
 * @keyframes percentages out of the colour scan. The property comes back too, because
 * whether a bare identifier means a colour depends on where it sits.
 */
const declarations = (css: string): Declaration[] => {
  const found: Declaration[] = [];
  let depth = 0;
  let buffer = '';

  const flush = () => {
    const separator = buffer.indexOf(':');
    if (depth > 0 && separator > -1) {
      found.push({
        property: buffer.slice(0, separator).trim().toLowerCase(),
        value: buffer.slice(separator + 1).trim(),
      });
    }
    buffer = '';
  };

  for (const char of stripNoise(css)) {
    if (char === '{') { buffer = ''; depth += 1; }
    else if (char === '}') { flush(); depth = Math.max(0, depth - 1); }
    else if (char === ';') { flush(); }
    else { buffer += char; }
  }

  return found;
};

/**
 * Shorthands that can hold a colour without saying so in their name. Anything containing
 * "color", the border family and custom properties are handled separately.
 */
const COLOR_SHORTHANDS = new Set([
  'background', 'background-image', 'outline', 'box-shadow', 'text-shadow', 'text-decoration',
  'text-emphasis', 'column-rule', 'list-style', 'fill', 'stroke', 'caret', 'mask', 'filter',
  'backdrop-filter', 'scrollbar',
]);

/**
 * Whether a bare identifier in this property's value could be a colour. Without this,
 * `animation-name: red` reads as an off-palette colour and `font-family: white` as a
 * duplicate of --ox-color-white, with a suggested fix that would break the declaration.
 *
 * Only bare identifiers need the gate. Hex and the colour functions are only ever colours,
 * so they stay in scope for every property.
 */
const acceptsColor = (property: string) => {
  const name = property.replace(/^-(?:webkit|moz|ms|o)-/, '');
  return name.startsWith('--')
    || name.includes('color')
    || name.startsWith('border')
    || COLOR_SHORTHANDS.has(name);
};

const closingParen = (text: string, open: number) => {
  let depth = 0;
  for (let i = open; i < text.length; i += 1) {
    if (text[i] === '(') { depth += 1; }
    if (text[i] === ')') {
      depth -= 1;
      if (depth === 0) { return i; }
    }
  }
  return text.length - 1;
};

/**
 * Every colour literal in a declaration value, in any syntax: hex, the functional
 * notations, and — when the property can hold one — bare named colours wherever they
 * appear, including inside shorthands and gradient stops. Functions that merely *contain* colours (var, color-mix, the
 * gradients) are descended into rather than treated as literals themselves, so
 * `color-mix(in srgb, var(--ox-color-black) 20%, transparent)` is clean.
 */
const colorLiterals = (value: string, namedColorsInScope: boolean): string[] => {
  const found: string[] = [];
  let i = 0;

  while (i < value.length) {
    const rest = value.slice(i);

    const hex = /^#[0-9a-fA-F]{3,8}\b/.exec(rest);
    if (hex) {
      found.push(hex[0]);
      i += hex[0].length;
      continue;
    }

    const ident = /^(?:-{1,2})?[a-zA-Z_][\w-]*/.exec(rest);
    if (ident) {
      const name = ident[0].toLowerCase();
      const after = i + ident[0].length;

      if (value[after] === '(') {
        const end = closingParen(value, after);
        if (COLOR_FUNCTIONS.has(name)) {
          found.push(value.slice(i, end + 1));
          i = end + 1;
        } else {
          i = after + 1; // descend into the arguments
        }
        continue;
      }

      if (namedColorsInScope && NAMED_COLORS.has(name)) { found.push(ident[0]); }
      i = after;
      continue;
    }

    i += 1;
  }

  return found;
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

const here = path.basename(__filename);

/** Every colour the theme defines, as token name -> the value written in the JS theme. */
const themeColors: ReadonlyArray<readonly [string, string]> = [
  ...Object.entries(palette).map(([key, value]) => [`--ox-color-${kebab(key)}`, value] as const),
  ['--ox-color-link-hover', colors.link.hover] as const,
];

/**
 * Theme colours describeColor cannot reduce to channels. Asserted empty below rather than
 * cast away: such an entry would drop out of themeValues, and the colour would then read as
 * off-palette everywhere it is used — a confusing failure a long way from its cause.
 */
const unresolvableThemeColors = themeColors
  .filter(([, value]) => describeColor(value).hex === null)
  .map(([token, value]) => `${token}: ${value}`);

/** Every theme colour, by opaque channels, so a literal can be traced back to its token. */
const themeValues = new Map(
  themeColors
    .map(([token, value]) => [describeColor(value).hex, token] as const)
    .filter((entry): entry is readonly [string, string] => entry[0] !== null)
);

/** Everything wrong with the colours in one stylesheet. Empty means the file is clean. */
const colorProblems = (css: string): string[] => {
  const problems: string[] = [];

  for (const { property, value } of declarations(css)) {
    for (const literal of colorLiterals(value, acceptsColor(property))) {
      const { hex, alpha, key } = describeColor(literal);

      if (KNOWN_OFF_PALETTE.has(key)) { continue; }

      if (hex === null) {
        problems.push(
          `"${literal}" is a colour this check cannot resolve — build it from a theme token, or add "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
        );
        continue;
      }

      const token = themeValues.get(hex);

      if (alpha < 1) {
        // An alpha variant of a theme colour is fine — there is no token form for it.
        if (!token) {
          problems.push(
            `"${literal}" is translucent and its channels (${hex}) are not a theme value — add ${hex} to palette.ts, or "${key}" to KNOWN_OFF_PALETTE in ${here} with a reason`
          );
        }
      } else if (token) {
        problems.push(`${literal} duplicates the theme — use var(${token})`);
      } else {
        problems.push(
          `${literal} is not a theme value — add it to palette.ts, or to KNOWN_OFF_PALETTE in ${here} with a reason`
        );
      }
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

  it.each([
    ['non-hex digits', '#ggg'],
    ['five digits', '#12345'],
    ['seven digits', '#1234567'],
    ['nine digits', '#123456789'],
  ])('treats a malformed hex (%s) as unresolvable', (_case, literal) => {
    // Length alone is not enough: expandHex('#ggg') is six characters long and would
    // otherwise sail through as a colour, defeating unresolvableThemeColors.
    expect(describeColor(literal).hex).toBeNull();
  });

  it('can reduce every theme colour to channels', () => {
    // Guards the themeValues map: see unresolvableThemeColors above for why a silent drop
    // would be worse than a failure here.
    expect(unresolvableThemeColors).toEqual([]);
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

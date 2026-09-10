/**
 * Colour auditing for plain-CSS stylesheets: text in, structured colours out.
 *
 * This parses declarations rather than grepping for `#hex`, because a grep misses
 * `rgba()`, `hsl()`, named colours in shorthands and colours in gradient stops — all of
 * which can silently duplicate or diverge from a theme value.
 *
 * Two rules keep it publishable:
 *
 * - **No `fs`, no `path`, no node built-ins.** It resolves to the `browser` export
 *   condition via the wildcard subpath, in a library that is otherwise browser-only, so
 *   a node import here is something a consumer's bundler could try to follow. The file
 *   walk belongs to whoever owns the file tree anyway.
 * - **No policy.** What counts as a theme value, which off-palette colours are
 *   tolerated and how a violation is worded all differ between consumers and all stay
 *   with them. This file only answers "what colours does this CSS contain, and what are
 *   they" — see src/theme/tokens.spec.ts for the ui-components layer on top.
 */

export interface Rgba {
  r: number;
  g: number;
  b: number;
  /** 0–1; 1 for an opaque colour. */
  a: number;
}

export interface FoundColor {
  /** The literal exactly as written, e.g. `rgba(0, 0, 0, 0.2)`. */
  literal: string;
  /** Resolved channels, or null when this syntax cannot be resolved statically. */
  rgba: Rgba | null;
}

/** A declaration, with enough of its surroundings to identify it again. */
export interface Declaration {
  /**
   * The selectors and at-rule preludes the declaration sits inside, outermost first,
   * with runs of whitespace collapsed outside strings:
   * `@media (max-width: 75em) .book-banner .title`.
   *
   * Carried because a consumer may need to tell two occurrences of the same literal in
   * one file apart — REX's baseline ratchet identifies an occurrence by the declaration
   * it was written in. Consumers that only need to know a colour is wrong can ignore it.
   */
  context: string;
  /**
   * The property name, e.g. `background-color`. Lower-cased, because CSS matches
   * property names case-insensitively — except for a custom property such as
   * `--tabs-border-color`, whose name is case-sensitive and is kept as written.
   */
  property: string;
  /** Everything to the right of the `:`. */
  value: string;
}

/** A colour literal together with the declaration it was written in. */
export interface StylesheetColor extends FoundColor {
  context: string;
  property: string;
}

/** https://www.w3.org/TR/css-color-4/#named-colors */
const NAMED_COLORS: Record<string, string> = {
  aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4',
  azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000',
  blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a',
  burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e',
  coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c',
  cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9', darkgreen: '#006400', darkgrey: '#a9a9a9', darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00',
  darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493',
  deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1e90ff',
  firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520',
  gray: '#808080', green: '#008000', greenyellow: '#adff2f', grey: '#808080',
  honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082',
  ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6',
  lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3', lightgreen: '#90ee90', lightgrey: '#d3d3d3', lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa',
  lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6',
  magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db',
  mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970',
  mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead',
  navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23',
  orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa',
  palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093',
  papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb',
  plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', rebeccapurple: '#663399',
  red: '#ff0000', rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513',
  salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee',
  sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd',
  slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f',
  steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8',
  tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3',
  white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32',
};

/**
 * Functions whose arguments *are* the colour, rather than containing one. These are
 * terminal: we try to resolve them and report them either way. Anything else that
 * happens to contain a colour (`var`, `color-mix`, the gradients) is descended into —
 * see `COLOR_CONTAINERS` for which of those are colour-bearing by definition.
 */
const COLOR_FUNCTIONS = [
  'rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch', 'color',
  'device-cmyk',
];

/**
 * Functions that contain colours rather than being one, and whose arguments are known
 * to be colour-valued whatever property they sit in. `list-style-image` takes an image,
 * but `linear-gradient(red, blue)` is still a gradient between two colours, so the
 * property gate must not reach inside one.
 *
 * `var()` is deliberately absent: a fallback is whatever the property makes of it, so
 * it keeps the gate of the property it was written in.
 */
const COLOR_CONTAINERS = [
  'linear-gradient', 'radial-gradient', 'conic-gradient', 'repeating-linear-gradient',
  'repeating-radial-gradient', 'repeating-conic-gradient', 'color-mix', 'light-dark',
  'cross-fade',
];

/**
 * Keywords that are colour-valued but carry no fixed channels, so there is nothing to
 * compare against a theme. They are never reported.
 */
const COLOR_KEYWORDS = [
  'transparent', 'currentcolor', 'inherit', 'initial', 'unset', 'revert', 'none',
];

/**
 * Blanks the parts of a stylesheet that can hold colour-shaped text without meaning a
 * colour: comments, string contents and `url()` payloads (which may carry a data: URI
 * complete with `;` and `#`, and would otherwise wreck the declaration split).
 *
 * Blanked to spaces rather than deleted, so the result is the same length as the input
 * and every character keeps its original index. `declarations` relies on that: it finds
 * structure in the blanked text and then slices the corresponding span out of a second,
 * differently-blanked copy.
 *
 * `keepStrings` is what that second copy is for. A string is noise inside a declaration
 * value — `content: "#fff"` is not a colour — but it is *meaning* inside a selector:
 * `[data-loading="true"]` and `[data-loading="false"]` are different rules, and blanking
 * both to `[data-loading=""]` would merge them into one context.
 */
const blankNoise = (css: string, keepStrings: boolean): string => {
  const pad = (length: number) => ' '.repeat(Math.max(0, length));
  let out = '';
  let index = 0;

  while (index < css.length) {
    const rest = css.slice(index);

    // A CSS escape makes the character after it ordinary source text, so it has to be
    // taken before anything that looks for a delimiter: `.foo\"bar` is a valid class
    // name whose quote opens no string, and treating it as one blanks the rest of the
    // stylesheet. Both characters are copied through rather than blanked — an escape in
    // a value is part of an identifier, and `\red` really is the colour `red`.
    if (css[index] === '\\') {
      out += css.slice(index, index + 2);
      index += 2;
      continue;
    }

    if (rest.startsWith('/*')) {
      const end = css.indexOf('*/', index + 2);
      const stop = end === -1 ? css.length : end + 2;
      out += pad(stop - index);
      index = stop;
      continue;
    }

    const quote = css[index];
    if (quote === '"' || quote === '\'') {
      let cursor = index + 1;
      while (cursor < css.length && css[cursor] !== quote) {
        cursor += css[cursor] === '\\' ? 2 : 1;
      }
      const stop = Math.min(cursor + 1, css.length);
      // blanked whole, quotes included: nothing downstream needs the quotes, and
      // keeping them would have to handle an unterminated string running off the end.
      out += keepStrings ? css.slice(index, stop) : pad(stop - index);
      index = stop;
      continue;
    }

    const url = /^url\(/i.exec(rest);
    if (url) {
      const open = index + url[0].length;
      let depth = 1;
      let cursor = open;
      // only a structural `)` ends the url: `url("icon).svg")` closes at the last
      // paren, not at the one in the filename. Stopping early would leave the trailing
      // quote behind, and blanking that "unterminated string" would swallow every
      // declaration after it.
      while (cursor < css.length && depth > 0) {
        const character = css[cursor];

        if (character === '\\') { cursor += 2; continue; }

        if (character === '"' || character === '\'') {
          cursor++;
          while (cursor < css.length && css[cursor] !== character) {
            cursor += css[cursor] === '\\' ? 2 : 1;
          }
          cursor++;
          continue;
        }

        if (character === '(') { depth++; }
        if (character === ')') { depth--; }
        cursor++;
      }
      // an escape or a quote at the very end can carry the cursor past the end, and the
      // blanked copy has to stay the same length as the input.
      cursor = Math.min(cursor, css.length);
      // the parens themselves are structure — `declarations` balances them — so only
      // the payload between them is blanked.
      const closed = depth === 0;
      const payloadEnd = closed ? cursor - 1 : cursor;
      out += css.slice(index, open) + pad(payloadEnd - open) + (closed ? ')' : '');
      index = cursor;
      continue;
    }

    out += css[index];
    index++;
  }

  return out;
};

/** Noise blanked for reading declaration values: strings go too. */
export const stripNoise = (css: string): string => blankNoise(css, false);

/**
 * Collapses runs of whitespace in a selector, but only where the whitespace is
 * separator rather than content. `[data-label="a  b"]` and `[data-label="a b"]` match
 * different values, so a context that collapsed both to the latter would stop telling
 * two rules apart — which is the one job the context has.
 */
const collapseSeparators = (selector: string): string => {
  let out = '';
  let index = 0;

  while (index < selector.length) {
    const character = selector[index];

    if (character === '\\') {
      // an escaped space is part of an identifier, e.g. the class `.a\\ b`
      out += selector.slice(index, index + 2);
      index += 2;
      continue;
    }

    if (character === '"' || character === '\'') {
      let cursor = index + 1;
      while (cursor < selector.length && selector[cursor] !== character) {
        cursor += selector[cursor] === '\\' ? 2 : 1;
      }
      const stop = Math.min(cursor + 1, selector.length);
      out += selector.slice(index, stop);
      index = stop;
      continue;
    }

    if (/\s/.test(character)) {
      while (index < selector.length && /\s/.test(selector[index])) { index++; }
      out += ' ';
      continue;
    }

    out += character;
    index++;
  }

  return out.trim();
};

/**
 * Pulls declarations out of a stylesheet at any nesting depth, so `@media` blocks are
 * covered. Selectors and at-rule preludes end at a `{` and become the declaration's
 * `context` rather than being read as declarations themselves, which is what keeps
 * `a:hover` and `@keyframes` percentages out of the colour scan.
 *
 * The property name is kept as well as the value, because whether a bare identifier
 * means a colour depends on the property it sits in — see `takesColor`.
 *
 * Two blanked copies of the source are walked in step. Structure is read from `values`,
 * where strings are gone, so a `;` or `{` inside one cannot split a declaration. The
 * `context` is sliced out of `selectors`, where string contents survive, so that
 * `[data-loading="true"]` and `[data-loading="false"]` stay distinguishable. Both are
 * the same length as the input, which is what lets one index address both.
 */
export const declarations = (css: string): Declaration[] => {
  const found: Declaration[] = [];
  const values = stripNoise(css);
  const selectors = blankNoise(css, true);
  const stack: string[] = [];
  let start = 0;
  let parens = 0;

  const flush = (end: number) => {
    const segment = values.slice(start, end);
    const separator = segment.indexOf(':');

    if (stack.length > 0 && separator !== -1) {
      const value = segment.slice(separator + 1).trim();
      const name = segment.slice(0, separator).trim();
      // ordinary property names are case-insensitive, but a custom property's is not:
      // `--Brand` and `--brand` are two different properties and must stay two.
      const property = name.startsWith('--') ? name : name.toLowerCase();
      if (value) { found.push({ context: stack.join(' '), property, value }); }
    }

    start = end + 1;
  };

  for (let index = 0; index < values.length; index++) {
    const character = values[index];

    // same rule as in `blankNoise`, and needed again because this scanner reads the
    // blanked copy, where escapes survive: `.foo\{bar` is one class name, so its brace
    // must not open a block and its semicolon must not end a declaration.
    if (character === '\\') { index++; continue; }

    if (character === '(') { parens++; }
    if (character === ')') { parens = Math.max(0, parens - 1); }
    if (parens !== 0) { continue; }

    if (character === '{') {
      stack.push(collapseSeparators(selectors.slice(start, index)));
      start = index + 1;
    } else if (character === '}') {
      flush(index);
      stack.pop();
    } else if (character === ';') {
      flush(index);
    }
  }

  return found;
};

/**
 * Properties whose value can hold a `<color>`, directly or inside a shorthand.
 *
 * Hex and the colour functions are only ever colours, so they are read wherever they
 * appear. A bare identifier is not: `animation-name: red` names a keyframe animation and
 * `font-family: white` names a font, and reporting either as a palette violation would be
 * wrong — with a suggested fix that would break the declaration. Named colours are
 * therefore only read in these properties.
 *
 * Spelled out rather than matched by prefix, so that `border-radius`, `border-width` and
 * the rest of the border family that cannot take a colour do not let one through.
 *
 * `list-style` is deliberately absent, though it is image-bearing: its bare identifier
 * is a `<counter-style>` name, and after `@counter-style red { ... }` the declaration
 * `list-style: red` is valid and means that counter. A gradient written there is still
 * found, because a gradient opens the gate for its own stops — see `COLOR_CONTAINERS`.
 */
const COLOR_SHORTHANDS = [
  'background', 'background-image', 'border', 'border-block', 'border-block-end',
  'border-block-start', 'border-bottom', 'border-image', 'border-image-source',
  'border-inline', 'border-inline-end', 'border-inline-start', 'border-left',
  'border-right', 'border-top', 'box-shadow', 'caret', 'column-rule', 'fill', 'filter',
  'backdrop-filter', 'mask', 'mask-image', 'outline', 'scrollbar', 'stroke',
  'text-decoration', 'text-emphasis', 'text-shadow', 'text-stroke',
];

/**
 * Properties the `color` substring claims but that hold no `<color>`.
 *
 * `color-scheme` is the one that actually produces a false finding: its value is an
 * author-defined `<custom-ident>`, so `color-scheme: red` names a scheme and reporting
 * it as red would be wrong — with a suggested fix that breaks the declaration. The rest
 * take fixed keywords, none of which is a colour name, so excluding them changes no
 * result today; they are listed because the substring has no business claiming them and
 * a future keyword could collide.
 */
const NOT_COLOR_PROPERTIES = [
  'color-scheme', 'color-adjust', 'print-color-adjust', 'forced-color-adjust',
  'color-interpolation', 'color-interpolation-filters', 'color-rendering',
];

const unprefixed = (name: string) => name.replace(/^-(?:webkit|moz|ms|o)-/, '');

/** Whether a bare identifier in this property's value could be a colour. */
export const takesColor = (property: string): boolean => {
  // custom properties have no grammar to go on, so anything in one counts
  if (property.startsWith('--')) { return true; }

  const name = unprefixed(property.toLowerCase());

  if (NOT_COLOR_PROPERTIES.includes(name)) { return false; }

  return name.includes('color') || COLOR_SHORTHANDS.includes(name);
};

/** Whether this function's arguments are colours regardless of the enclosing property. */
const holdsColor = (fn: string): boolean => COLOR_CONTAINERS.includes(unprefixed(fn));

const clamp = (value: number, max: number) => Math.min(max, Math.max(0, value));

/**
 * The CSS `<number>` grammar, shared by the channels and the alpha rather than
 * approximated as "digits and dots". `[\d.]+` also matches `.` and `1..2`, which
 * `parseFloat` turns into `NaN` and a truncated `1`; both would then be handed back as
 * resolved channels, so a malformed declaration would read as a real colour and get a
 * comparison key built out of `NaN`.
 */
const NUMBER = '[+-]?(?:\\d+|\\d*\\.\\d+)(?:e[+-]?\\d+)?';
const IS_NUMBER = new RegExp(`^${NUMBER}$`, 'i');
const IS_PERCENTAGE = new RegExp(`^(${NUMBER})%$`, 'i');

const channel = (raw: string): number | null => {
  const text = raw.trim();
  const percent = IS_PERCENTAGE.exec(text);
  // scale by 255/100 rather than by the decimal 2.55, which is not representable in
  // binary: 50 * 2.55 is 127.49999999999999 and rounds to 127, where 50% of 255 is
  // 127.5 and rounds to 128. The two spellings of the same colour must agree, or they
  // get different keys and the audit misclassifies one of them.
  if (percent) { return Math.round((clamp(parseFloat(percent[1]), 100) / 100) * 255); }
  return IS_NUMBER.test(text) ? Math.round(clamp(parseFloat(text), 255)) : null;
};

const alphaChannel = (raw?: string): number | null => {
  if (raw === undefined) { return 1; }
  const text = raw.trim();
  const percent = IS_PERCENTAGE.exec(text);
  if (percent) { return clamp(parseFloat(percent[1]), 100) / 100; }
  return IS_NUMBER.test(text) ? clamp(parseFloat(text), 1) : null;
};

/**
 * Only the four lengths CSS defines, and only hex digits. Checking the grammar rather
 * than just the expanded length matters: `#ggg` would otherwise expand to six characters,
 * `parseInt` them to NaN, and hand back an Rgba of NaNs that reads as a resolved colour.
 * A malformed *theme* value would then pass the "every colour token resolves" guard while
 * generating invalid CSS — the one check meant to stop a palette value from silently
 * becoming unmatchable.
 */
const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/;

const fromHex = (literal: string): Rgba | null => {
  if (!HEX.test(literal.toLowerCase())) { return null; }

  const digits = literal.slice(1);
  const expand = (text: string) => text.split('').map((c) => c + c).join('');
  const full = digits.length === 3 || digits.length === 4 ? expand(digits) : digits;

  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
    a: full.length === 8 ? parseInt(full.slice(6, 8), 16) / 255 : 1,
  };
};

/**
 * Resolves a colour literal to channels, or null when it cannot be resolved statically.
 * Returning null is deliberate: `hsl()`, `oklch()` and `color()` are reported by the
 * consumer rather than passing silently, so the escape hatch stays explicit.
 */
export const describeColor = (literal: string): Rgba | null => {
  const text = literal.trim();

  if (text.startsWith('#')) { return fromHex(text.toLowerCase()); }

  const named = NAMED_COLORS[text.toLowerCase()];
  if (named) { return fromHex(named); }

  const fn = /^(rgba?)\((.*)\)$/is.exec(text);
  if (!fn) { return null; }

  const args = fn[2].includes(',')
    ? fn[2].split(',')
    : fn[2].replace(/\//g, ' ').trim().split(/\s+/);

  if (args.length < 3 || args.length > 4) { return null; }

  const [r, g, b] = args.slice(0, 3).map(channel);
  const a = alphaChannel(args[3]);

  return r === null || g === null || b === null || a === null ? null : { r, g, b, a };
};

/**
 * Finds every colour literal in a declaration value, at any depth. Functions that merely
 * contain colours are descended into; colour functions are terminal.
 *
 * `named` says whether a bare identifier may be read as a colour. That depends on the
 * property the value belongs to — see `takesColor` — and on whether the walk has since
 * descended into a function whose arguments are colours whatever the property is, see
 * `COLOR_CONTAINERS`. Hex and the colour functions are unambiguous and are found either
 * way. It has no default: defaulting it to `true` would quietly restore the over-eager
 * behaviour for any caller that forgot it.
 */
export const findColors = (value: string, named: boolean): FoundColor[] => {
  const found: FoundColor[] = [];
  let index = 0;

  while (index < value.length) {
    const rest = value.slice(index);

    // the leading `-` matters: without it `-webkit-linear-gradient(...)` is not read as
    // a call at all, and its stops are walked as if they were loose identifiers.
    const call = /^(-?[a-z][\w-]*)\(/i.exec(rest);
    if (call) {
      let depth = 1;
      let cursor = index + call[0].length;
      while (cursor < value.length && depth > 0) {
        if (value[cursor] === '(') { depth++; }
        if (value[cursor] === ')') { depth--; }
        cursor++;
      }
      const literal = value.slice(index, cursor);
      const args = literal.slice(call[0].length, literal.endsWith(')') ? -1 : undefined);
      const fn = call[1].toLowerCase();

      if (COLOR_FUNCTIONS.includes(fn)) {
        found.push({ literal, rgba: describeColor(literal) });
      } else {
        // a colour-bearing container opens the gate for its arguments; anything else
        // just passes the enclosing property's gate down unchanged.
        found.push(...findColors(args, named || holdsColor(fn)));
      }

      index = cursor;
      continue;
    }

    const hex = /^#[0-9a-fA-F]{3,8}\b/.exec(rest);
    if (hex) {
      found.push({ literal: hex[0], rgba: describeColor(hex[0]) });
      index += hex[0].length;
      continue;
    }

    const word = /^-?[a-zA-Z][\w-]*/.exec(rest);
    if (word) {
      const name = word[0].toLowerCase();
      if (named && NAMED_COLORS[name] && !COLOR_KEYWORDS.includes(name)) {
        found.push({ literal: word[0], rgba: describeColor(word[0]) });
      }
      index += word[0].length;
      continue;
    }

    index++;
  }

  return found;
};

/**
 * Every colour literal written in a stylesheet, in source order.
 *
 * Accumulated with `push` rather than by spreading into a new array per declaration:
 * this runs over every stylesheet in a tree, so the quadratic version was copying every
 * colour found so far once per subsequent declaration.
 */
export const stylesheetColors = (css: string): StylesheetColor[] => {
  const found: StylesheetColor[] = [];

  for (const { context, property, value } of declarations(css)) {
    for (const color of findColors(value, takesColor(property))) {
      found.push({ ...color, context, property });
    }
  }

  return found;
};

const hex = (rgba: Rgba) =>
  `#${[rgba.r, rgba.g, rgba.b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;

/**
 * Canonical key for comparing two colours, and the form a consumer's allowlist is keyed
 * by. `#rrggbb` for an opaque colour, with the alpha appended when there is one.
 *
 * Hex rather than the raw channels because this is the form that ends up in an allowlist
 * and in a failure message, where a reader has to recognise it. Alpha stays decimal
 * rather than becoming a fourth hex pair, which would round two distinct alphas onto one
 * key.
 */
export const colorKey = (rgba: Rgba): string =>
  rgba.a === 1 ? hex(rgba) : `${hex(rgba)}/${rgba.a}`;

/** Key ignoring alpha, so `rgba(0, 0, 0, 0.2)` can be recognised as the theme's black. */
export const opaqueKey = (rgba: Rgba): string => hex(rgba);

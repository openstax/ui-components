import {
  Rgba,
  colorKey,
  declarations,
  describeColor,
  findColors,
  opaqueKey,
  stripNoise,
  stylesheetColors,
  takesColor,
} from './cssColors';

const literals = (css: string) => stylesheetColors(css).map((found) => found.literal);
const values = (css: string) => declarations(css).map((declaration) => declaration.value);

describe('stripNoise', () => {
  it('removes block comments', () => {
    expect(stripNoise('a { /* #ff0000 */ color: red; }')).not.toContain('#ff0000');
  });

  it('removes string contents so content: "tan" is not a colour', () => {
    expect(stripNoise('a { content: "tan"; }')).not.toContain('tan');
  });

  it('removes url() payloads', () => {
    const blanked = stripNoise('a { background: url(data:image/svg+xml;base64,Zm9v) no-repeat; }');
    expect(blanked).not.toContain('base64');
    expect(blanked).toContain('no-repeat');
  });

  it('only blanks url(), not a function whose name merely ends in url', () => {
    // `myurl(...)` is an unknown container to be descended into, not noise
    expect(stripNoise('a { --x: myurl(#fff); }')).toContain('#fff');
  });

  it('keeps the url() parentheses, which are structure rather than noise', () => {
    // declarations balances parens to know a `;` inside url() is not a separator
    expect(stripNoise('a { background: url(x;y); }')).toContain('url(');
    expect(stripNoise('a { background: url(x;y); }')).toContain(')');
  });

  it('does not end a url() at a parenthesis inside its quoted payload', () => {
    // `url("icon).svg")` closes at the last paren. Stopping at the first one leaves the
    // trailing quote behind, and that "unterminated string" blanks the rest of the rule.
    const blanked = stripNoise('a { background: url("icon).svg"); color: red; }');
    expect(blanked).not.toContain('icon');
    expect(blanked).toContain('color: red;');
  });

  it('does not end a url() at an escaped parenthesis', () => {
    expect(stripNoise('a { background: url(icon\\).svg); color: red; }'))
      .toContain('color: red;');
  });

  it('treats an escaped quote in a selector as ordinary text', () => {
    // `.foo\"bar` is a valid class name. Reading its quote as a string opener blanks
    // everything after it, and the declaration disappears from the audit.
    expect(stripNoise('.foo\\"bar { color: red; }')).toContain('color: red;');
  });

  it('handles an escaped quote inside a string', () => {
    expect(stripNoise('a { content: "a\\"b"; }')).not.toContain('b"');
  });

  it('tolerates an unterminated comment', () => {
    expect(stripNoise('a { color: red; /* oops')).toContain('color: red;');
  });

  it.each([
    ['a comment', 'a { /* note */ color: red; }'],
    ['a string', 'a { content: "tan"; }'],
    ['an unterminated string', 'a { content: "tan }'],
    ['a url()', 'a { background: url(data:image/svg+xml;base64,Zm9v); }'],
    ['an unterminated url()', 'a { background: url(oops }'],
    ['a url() with a paren in its payload', 'a { background: url("icon).svg"); }'],
    ['a url() with an unterminated quoted payload', 'a { background: url("oops }'],
    ['a url() ending in a trailing escape', 'a { background: url(oops\\'],
    ['an escaped quote in a selector', '.foo\\"bar { color: red; }'],
    ['a stylesheet ending in an escape', 'a { color: red; } \\'],
    ['an unterminated comment', 'a { color: red; /* oops'],
  ])('blanks %s without changing the length', (_case, css) => {
    // declarations addresses two differently-blanked copies with one index, so this
    // is load-bearing rather than cosmetic: a length change silently misaligns context.
    expect(stripNoise(css)).toHaveLength(css.length);
  });
});

describe('declarations', () => {
  it('reads declarations at the top level of a rule', () => {
    expect(values('a { color: red; background: blue; }')).toEqual(['red', 'blue']);
  });

  it('reads declarations nested in @media', () => {
    expect(values('@media (max-width: 50em) { a { color: red; } }')).toEqual(['red']);
  });

  it('does not mistake a pseudo-class selector for a declaration', () => {
    expect(values('a:hover { color: red; }')).toEqual(['red']);
  });

  it('does not mistake @keyframes percentages for declarations', () => {
    expect(values('@keyframes f { 0% { opacity: 0; } 100% { opacity: 1; } }'))
      .toEqual(['0', '1']);
  });

  it('ignores at-rules outside a block, such as @import', () => {
    expect(values('@import "./theme.css";')).toEqual([]);
  });

  it('reads a declaration with no trailing semicolon', () => {
    expect(values('a { color: red }')).toEqual(['red']);
  });

  it('does not split on a semicolon inside parentheses', () => {
    expect(values('a { background: url(x;y); color: red; }')).toContain('red');
  });

  it('keeps the declarations after a url() whose payload contains a parenthesis', () => {
    const parsed = values('a { background: url("icon).svg"); color: red; }');

    expect(parsed).toHaveLength(2);
    expect(parsed[1]).toEqual('red');
  });

  it('reads several url() payloads in one value', () => {
    const parsed = declarations('a { background: url("a).svg") no-repeat, url(b); color: red; }');

    expect(parsed).toHaveLength(2);
    expect(parsed[1]).toEqual({ context: 'a', property: 'color', value: 'red' });
  });

  it('keeps a brace block as a custom property value rather than a nested rule', () => {
    // `--x: { red }` is a valid declaration whose value is a block of component
    // values. Pushing the block as selector context loses the value entirely.
    expect(declarations(':root { --x: { red }; }'))
      .toEqual([{ context: ':root', property: '--x', value: '{ red }' }]);
  });

  it('still reads a nested rule as a rule, not as a value', () => {
    // the brace-block rule must not swallow real nesting: this is two contexts
    expect(declarations('a { color: red; b { color: blue; } }').map((d) => d.context))
      .toEqual(['a', 'a b']);
  });

  it('keeps a custom property declaration', () => {
    expect(values(':root { --ox-color-x: #fff; }')).toEqual(['#fff']);
  });

  it('lower-cases the property name', () => {
    expect(declarations('a { COLOR: red; }')[0].property).toEqual('color');
  });

  it('keeps the case of a custom property name, which CSS is case-sensitive about', () => {
    // `--Brand` and `--brand` are two different custom properties, so lower-casing them
    // would merge two distinct declarations in the audit metadata.
    expect(declarations(':root { --Brand: #fff; --brand: #000; }')
      .map(({ property }) => property)).toEqual(['--Brand', '--brand']);
  });

  it('records the selector as context', () => {
    expect(declarations('a:hover .thing { color: red; }')[0].context)
      .toEqual('a:hover .thing');
  });

  it('collapses whitespace in the context', () => {
    expect(declarations('a,\n  b {\n  color: red;\n}')[0].context).toEqual('a, b');
  });

  it('does not collapse whitespace inside a selector string', () => {
    // the whole point of keeping string contents is that two rules differing only
    // inside a selector string stay distinguishable — collapsing runs of spaces there
    // merges them again.
    const parsed = declarations(
      '[data-label="a  b"] { color: #fff; } [data-label="a b"] { color: #fff; }'
    );

    expect(parsed.map(({ context }) => context))
      .toEqual(['[data-label="a  b"]', '[data-label="a b"]']);
  });

  it('nests the at-rule prelude and the selector in the context', () => {
    expect(declarations('@media (max-width: 50em) { a { color: red; } }')[0].context)
      .toEqual('@media (max-width: 50em) a');
  });

  it('pops the context again after a nested block closes', () => {
    const parsed = declarations('@media (max-width: 50em) { a { color: red; } } b { color: blue; }');
    expect(parsed.map(({ context }) => context))
      .toEqual(['@media (max-width: 50em) a', 'b']);
  });

  it('keeps string contents in the context, so attribute selectors stay distinct', () => {
    // a consumer may identify an occurrence by its context, so two rules that differ
    // only inside a selector string must not reduce to the same one.
    const parsed = declarations(
      '.x[data-loading="true"] { color: #fff; } .x[data-loading="false"] { color: #fff; }'
    );

    expect(parsed.map(({ context }) => context))
      .toEqual(['.x[data-loading="true"]', '.x[data-loading="false"]']);
  });

  it('still blanks strings in the value, where they are not colours', () => {
    // the other half of the same change: context keeps strings, values must not, or
    // `content: "#fff"` starts reading as a colour.
    expect(declarations('a { content: "#fff"; }')).toEqual([]);
  });

  it.each([
    ['a quote', '.foo\\"bar'],
    ['a brace', '.foo\\{bar'],
    ['a semicolon', '.foo\\;bar'],
  ])('does not read %s escaped in a selector as structure', (_case, selector) => {
    // each of these is one class name. Read as structure they corrupt the context
    // stack — the brace opens a block that never closes, the semicolon truncates the
    // selector — and the quote blanks the rest of the stylesheet outright.
    expect(declarations(`${selector} { color: red; }`))
      .toEqual([{ context: selector, property: 'color', value: 'red' }]);
  });

  it('does not let a brace inside a selector string open a block', () => {
    expect(declarations('.x[data-glyph="{"] { color: red; }'))
      .toEqual([{ context: '.x[data-glyph="{"]', property: 'color', value: 'red' }]);
  });
});

describe('takesColor', () => {
  it.each(['color', 'background-color', 'border-top-color', '-webkit-text-fill-color'])(
    'accepts %s, which names a colour', (property) => {
      expect(takesColor(property)).toBe(true);
    }
  );

  it.each([
    'background', 'border', 'border-left', 'box-shadow', 'outline', 'fill', 'scrollbar',
  ])('accepts the %s shorthand', (property) => {
    expect(takesColor(property)).toBe(true);
  });

  it('accepts a custom property, which has no grammar to go on', () => {
    expect(takesColor('--tabs-border-color')).toBe(true);
  });

  it.each(['animation-name', 'font-family', 'transition-property', 'grid-area'])(
    'rejects %s, where an identifier is not a colour', (property) => {
      expect(takesColor(property)).toBe(false);
    }
  );

  it.each(['border-radius', 'border-width', 'border-collapse'])(
    'rejects %s, which is border-shaped but cannot hold a colour', (property) => {
      // matching the whole border family by prefix would let a named colour through here
      expect(takesColor(property)).toBe(false);
    }
  );

  it.each(['list-style', 'color-scheme'])(
    'rejects %s, whose bare identifier names something the author defined', (property) => {
      // `@counter-style red` and a `red` colour scheme are both legal, and neither is
      // a colour — so neither can be reported as one.
      expect(takesColor(property)).toBe(false);
    }
  );

  it.each([
    'print-color-adjust', '-webkit-print-color-adjust', 'forced-color-adjust',
    'color-interpolation-filters',
  ])('rejects %s, which is colour-named but holds no colour', (property) => {
    expect(takesColor(property)).toBe(false);
  });

  it('sees through a vendor prefix', () => {
    expect(takesColor('-webkit-box-shadow')).toBe(true);
  });
});

describe('findColors', () => {
  it('finds a hex literal', () => {
    expect(literals('a { color: #ff0000; }')).toEqual(['#ff0000']);
  });

  it('finds a bare named colour in a shorthand', () => {
    expect(literals('a { border: 0.1rem solid red; }')).toEqual(['red']);
  });

  it('finds colours in gradient stops', () => {
    expect(literals('a { background: linear-gradient(to top, #fff 0%, #000 100%); }'))
      .toEqual(['#fff', '#000']);
  });

  it('descends into var() fallbacks rather than treating var() as a literal', () => {
    expect(literals('a { color: var(--x, #fff); }')).toEqual(['#fff']);
  });

  it('descends into color-mix() over tokens and finds nothing', () => {
    expect(literals('a { color: color-mix(in srgb, var(--a), var(--b)); }')).toEqual([]);
  });

  it('finds rgba()', () => {
    expect(literals('a { box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2); }'))
      .toEqual(['rgba(0, 0, 0, 0.2)']);
  });

  it.each([
    ['hsl()', 'a { color: hsl(0deg 100% 50%); }'],
    ['oklch()', 'a { color: oklch(0.7 0.1 200); }'],
    ['color()', 'a { color: color(display-p3 1 0 0); }'],
    ['device-cmyk()', 'a { color: device-cmyk(0 0.5 1 0); }'],
    // rgba() may legally hold var() channels, but then there is no telling what colour
    // it is. Reporting it beats skipping it, which would let an unchecked colour past.
    ['rgba() over a var() channel list', 'a { color: rgba(var(--channels), 0.2); }'],
  ])('finds %s, which resolves to null so it cannot pass silently', (_case, css) => {
    const found = stylesheetColors(css);
    expect(found).toHaveLength(1);
    expect(found[0].rgba).toBeNull();
  });

  it('does not treat a class selector named .red as a colour', () => {
    expect(literals('.red { opacity: 1; }')).toEqual([]);
  });

  it('does not treat content: "tan" as a colour', () => {
    expect(literals('a { content: "tan"; }')).toEqual([]);
  });

  it('does not treat a colour inside a comment as a colour', () => {
    expect(literals('a { /* was #ff0000 */ color: var(--x); }')).toEqual([]);
  });

  it('does not treat transparent or currentcolor as comparable colours', () => {
    expect(literals('a { color: currentcolor; background: transparent; }')).toEqual([]);
  });

  it('does not treat a non-colour keyword as a colour', () => {
    expect(literals('a { transition: all 0.2s linear; }')).toEqual([]);
  });

  it('finds several colours in one declaration', () => {
    expect(literals('a { box-shadow: 0 0 0 red, 0 0 0 #00f; }')).toEqual(['red', '#00f']);
  });

  it('tolerates an unbalanced function call', () => {
    expect(() => literals('a { color: rgb(0, 0, 0; }')).not.toThrow();
  });

  it.each([
    ['an animation name', 'a { animation-name: red; }'],
    ['a font family', 'a { font-family: black; }'],
    ['a transitioned property', 'a { transition-property: tan; }'],
    ['a grid area', 'a { grid-area: navy; }'],
    ['a counter style', 'a { list-style: red; }'],
    ['a colour scheme', 'a { color-scheme: red; }'],
    // the property gate has to survive the descent into a function, not just the
    // top level of the value — findColors passes `named` down to itself.
    ['a var() fallback under one', 'a { animation-name: var(--enter, red); }'],
  ])('does not read %s as a named colour', (_case, css) => {
    expect(literals(css)).toEqual([]);
  });

  it.each([
    ['a colour property', 'a { color: red; }'],
    ['a shorthand', 'a { border: 0.1rem solid red; }'],
    ['a custom property', 'a { --x: red; }'],
    ['a box-shadow', 'a { box-shadow: 0 0 0.2rem red; }'],
    ['a vendor-prefixed property', 'a { -webkit-text-fill-color: red; }'],
    // the other side of the descent: gating named colours on the property must not
    // stop finding them inside a function the walk descends into.
    ['a gradient stop', 'a { background: linear-gradient(to top, red, transparent); }'],
  ])('still reads a named colour in %s', (_case, css) => {
    expect(literals(css)).toEqual(['red']);
  });

  it.each([
    ['a gradient', 'a { list-style-image: linear-gradient(red, blue); }'],
    ['a repeating gradient', 'a { list-style-image: repeating-conic-gradient(red, blue); }'],
    ['a vendor-prefixed gradient', 'a { list-style-image: -webkit-linear-gradient(red, blue); }'],
    ['color-mix()', 'a { list-style-image: color-mix(in srgb, red, blue); }'],
  ])('reads named colours in %s under a property that cannot hold one', (_case, css) => {
    // `list-style-image` takes an image, but a gradient's stops are colours wherever
    // the gradient is written, so the property gate must not reach inside one.
    expect(literals(css)).toEqual(['red', 'blue']);
  });

  it('reads the fallback colour in image(), whose first argument is a url', () => {
    // `image()` takes an image and then a bare `<color>` to fall back to, so the stop
    // is a colour however the property is spelled. The url payload is blanked, so the
    // `#` of a fragment in it cannot be read as a hex literal.
    expect(literals('a { list-style-image: image(url(marker.svg#a), red); }'))
      .toEqual(['red']);
  });

  it('does not open the named-colour gate inside image-set(), which holds no colour', () => {
    // the sibling function takes images and resolutions only, so an identifier there is
    // not a colour -- it is listed as deliberately absent from COLOR_CONTAINERS.
    expect(literals('a { list-style-image: image-set(red 1x); }')).toEqual([]);
    // a gradient inside one still opens its own gate, so nothing is lost by the absence
    expect(literals('a { list-style-image: image-set(linear-gradient(red, blue) 1x); }'))
      .toEqual(['red', 'blue']);
  });

  it('keeps the property gate inside var(), whose fallback is not known to be a colour', () => {
    // the other half: `var()` is whatever the property makes of it, so an identifier in
    // a fallback is only a colour when the property says so.
    expect(literals('a { animation-name: var(--enter, red); }')).toEqual([]);
    expect(literals('a { color: var(--enter, red); }')).toEqual(['red']);
  });

  it('still finds a gradient in the list-style shorthand', () => {
    // dropping `list-style` from the shorthands must not lose its image component:
    // the gradient opens the gate for its own stops whatever property it sits in.
    expect(literals('a { list-style: square linear-gradient(red, blue); }'))
      .toEqual(['red', 'blue']);
  });

  it('still reads hex and rgb() in a property that cannot take a named colour', () => {
    // only the bare-identifier case is property-sensitive: `#fff` and `rgb(...)` are
    // colours wherever they are written, so they stay in scope everywhere.
    expect(literals('a { animation-name: #fff; transition-property: rgb(0, 0, 0); }'))
      .toEqual(['#fff', 'rgb(0, 0, 0)']);
  });

  it('has no default for the named-colour gate, so a caller cannot forget it', () => {
    // defaulting it to true would quietly restore reading `animation-name: red` as a
    // colour for any call site that omitted the argument.
    expect(findColors('red', true)).toHaveLength(1);
    expect(findColors('red', false)).toEqual([]);
  });

  it.each([
    ['a url fragment', 'url(#fff)'],
    ['a quoted string', '"red"'],
    ['a string in a shorthand', '0 0 0 "red"'],
    ['a comment', '/* red */ 0'],
    ['a data: URI', 'url(data:image/svg+xml;utf8,<rect fill="#fff"/>)'],
  ])('blanks %s in a raw value handed straight to findColors', (_case, value) => {
    // findColors takes a value as written, not one a caller has already cleaned up:
    // `stylesheetColors` gets that for free from `declarations` and a direct caller
    // should not have to know it is a precondition.
    expect(findColors(value, true)).toEqual([]);
  });

  it.each([
    ['a hex literal', '#fff', '#fff'],
    ['a named colour beside a string', '"x" red', 'red'],
    ['a colour after a url', 'url(a.svg) red', 'red'],
  ])('still finds %s in a raw value', (_case, value, literal) => {
    // the other direction: blanking the noise must not blank the colours with it
    expect(findColors(value, true).map((found) => found.literal)).toEqual([literal]);
  });

  it.each([
    ['a hex escape with its terminating space', 'a { color: r\\65 d; }', 'r\\65 d'],
    ['a hex escape at the end of the identifier', 'a { color: re\\64; }', 're\\64'],
    ['an escaped ordinary character', 'a { color: \\red; }', '\\red'],
    ['a hex escape spelling the first letter', 'a { color: \\72 ed; }', '\\72 ed'],
  ])('decodes %s so the named colour is not evaded', (_case, css, literal) => {
    // CSS tokenizes all three of these as the identifier `red`, so an audit that
    // reads them as separate words is trivially bypassed.
    const found = stylesheetColors(css);
    expect(found).toHaveLength(1);
    // the literal stays the original source span, since that is what a consumer
    // has to find and rewrite in the file
    expect(found[0].literal).toEqual(literal);
    expect(found[0].rgba).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it('does not decode an escape into a colour where the property forbids one', () => {
    expect(literals('a { animation-name: r\\65 d; }')).toEqual([]);
  });

  it('consumes up to six hex digits, so \\72ed is one character and not red', () => {
    // `e` and `d` are hex digits, so this escape is U+72ED and the declaration is not
    // a colour at all — Chromium rejects it. Stopping at two digits would invent a
    // finding out of valid CSS.
    expect(literals('a { color: \\72ed; }')).toEqual([]);
  });

  it('does not throw on an escape outside the Unicode range', () => {
    expect(() => literals('a { color: \\110000 ; }')).not.toThrow();
  });

  it('records the declaration each colour was written in', () => {
    expect(stylesheetColors('@media (max-width: 50em) { .a:hover { color: #fff; } }'))
      .toEqual([{
        context: '@media (max-width: 50em) .a:hover',
        literal: '#fff',
        property: 'color',
        rgba: { r: 255, g: 255, b: 255, a: 1 },
      }]);
  });
});

describe('describeColor', () => {
  it('expands 3-digit hex', () => {
    expect(describeColor('#fff')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it('reads 8-digit hex alpha', () => {
    expect(describeColor('#00000033')?.a).toBeCloseTo(0.2, 1);
  });

  it('reads 4-digit hex', () => {
    expect(describeColor('#0000')).toEqual({ r: 0, g: 0, b: 0, a: 0 });
  });

  it('is case insensitive', () => {
    expect(describeColor('#027EB5')).toEqual(describeColor('#027eb5'));
  });

  it('resolves a named colour', () => {
    expect(describeColor('white')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it('reads comma-separated rgb()', () => {
    expect(describeColor('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it('reads space-separated rgb() with a slash alpha', () => {
    expect(describeColor('rgb(255 0 0 / 0.5)')).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
  });

  it('reads percentage channels', () => {
    expect(describeColor('rgb(100%, 0%, 0%)')).toEqual({ r: 255, g: 0, b: 0, a: 1 });
  });

  it('reads a percentage alpha', () => {
    expect(describeColor('rgba(0, 0, 0, 20%)')?.a).toBeCloseTo(0.2);
  });

  it('returns null for hsl()', () => {
    expect(describeColor('hsl(0, 100%, 50%)')).toBeNull();
  });

  it('returns null for a non-numeric channel', () => {
    expect(describeColor('rgb(var(--x), 0, 0)')).toBeNull();
  });

  it.each([
    // modern syntax puts the alpha behind a single slash; without it this is four
    // channels, which is not a grammar rgb() has
    'rgb(0 0 0 0.5)',
    'rgb(0 0 0 // 0.5)',
    'rgb(0 0 0 /)',
    // and the legacy comma syntax has no slash at all
    'rgb(0, 0, 0 / 0.5)',
  ])('returns null for the malformed rgb() grammar %s', (literal) => {
    expect(describeColor(literal)).toBeNull();
  });

  it.each([
    'rgb(0, 50%, 0)', 'rgba(255, 50%, 0, 0.5)',
    // not just the comma syntax: rgb() splits into an all-number and an
    // all-percentage production in both spellings, so neither permits mixing.
    // Chromium rejects all three of these.
    'rgb(255 50% 0)',
  ])('returns null for %s, since rgb() cannot mix channel units', (literal) => {
    expect(describeColor(literal)).toBeNull();
  });

  it('reads an all-percentage legacy triple, which is consistent', () => {
    expect(describeColor('rgb(100%, 50%, 0%)')).toEqual({ r: 255, g: 128, b: 0, a: 1 });
  });

  it('returns null for the wrong number of channels', () => {
    expect(describeColor('rgb(0, 0)')).toBeNull();
  });

  it('returns null for an unknown identifier', () => {
    expect(describeColor('notacolor')).toBeNull();
  });

  it.each(['#12345', '#1234567', '#123456789'])(
    'returns null for the malformed hex length %s', (literal) => {
      expect(describeColor(literal)).toBeNull();
    }
  );

  it.each(['#ggg', '#gggggg', '#12345g'])(
    'returns null for %s rather than a set of NaN channels', (literal) => {
      // the expanded length is right, so checking only the length would hand back
      // {r: NaN, g: NaN, b: NaN} and read as a resolved colour — which is how a
      // malformed palette value used to pass the consumer's resolvability guard.
      expect(describeColor(literal)).toBeNull();
    }
  );

  it.each([
    'rgb(., 0, 0)', 'rgb(1..2, 0, 0)', 'rgb(1.2.3, 0, 0)', 'rgb(0, 0, 0, .)',
    'rgba(0, 0, 0, 1..2)', 'rgb(.%, 0, 0)', 'rgb(1e, 0, 0)',
  ])('returns null for the malformed number in %s', (literal) => {
    // `[\\d.]+` also matches `.` and `1..2`; parseFloat turns those into NaN and a
    // truncated 1, either of which would be handed back as a resolved channel.
    expect(describeColor(literal)).toBeNull();
  });

  it.each([
    ['no integer part', 'rgb(.0, 0, 0)'],
    ['an explicit plus sign', 'rgb(+255, 0, 0)'],
    ['exponent notation', 'rgb(2.55e2, 0, 0)'],
  ])('still reads a channel written with %s', (_case, literal) => {
    expect(describeColor(literal)?.r).toEqual(literal.includes('.0') ? 0 : 255);
  });

  it('rounds a percentage channel the same way as its integer spelling', () => {
    // 50% of 255 is 127.5, which rounds to 128. Scaling by the decimal 2.55 gives
    // 127.49999999999999 and rounds to 127, so the two spellings would disagree.
    expect(describeColor('rgb(50%, 50%, 50%)')).toEqual({ r: 128, g: 128, b: 128, a: 1 });
    expect(describeColor('rgb(50%, 50%, 50%)')).toEqual(describeColor('rgb(128, 128, 128)'));
  });
});

describe('colour keys', () => {
  const rgbaOf = (literal: string) => {
    const rgba = describeColor(literal);
    if (rgba === null) { throw new Error(`${literal} did not resolve to channels`); }
    return rgba;
  };
  const key = (literal: string) => colorKey(rgbaOf(literal));

  it('is the hex form, which is what an allowlist entry has to be recognisable as', () => {
    expect(key('#ccc')).toEqual('#cccccc');
  });

  it('treats an opaque colour as equal however it is written', () => {
    expect(key('#fff')).toEqual(key('white'));
    expect(key('rgb(50%, 50%, 50%)')).toEqual(key('#808080'));
  });

  it('distinguishes a translucent colour from its opaque form', () => {
    expect(key('rgba(0, 0, 0, 0.2)')).not.toEqual(key('#000'));
  });

  it('keeps alpha decimal rather than rounding it onto a hex pair', () => {
    // two alphas a hex pair cannot tell apart must not collapse onto one key
    expect(key('rgba(0, 0, 0, 0.2)')).toEqual('#000000/0.2');
    expect(key('rgba(0, 0, 0, 0.201)')).not.toEqual(key('rgba(0, 0, 0, 0.2)'));
  });

  it('recognises a translucent colour by its opaque channels', () => {
    expect(opaqueKey(rgbaOf('rgba(0, 0, 0, 0.2)')))
      .toEqual(opaqueKey(rgbaOf('#000')));
  });
});

/**
 * What a real engine makes of each value, generated by scripts/verify-css-colors.mjs.
 *
 * Whether a colour value is valid CSS turned out to be a question of fact rather than
 * of reading the grammar carefully. Two rounds of review here turned on cases where the
 * grammar reads one way and browsers go the other: `rgb(255 50% 0)` looks legal and is
 * not, because rgb() splits into an all-number and an all-percentage production rather
 * than accepting three of either; `\72ed` looks like `red` and is not, because hex
 * escapes consume up to six digits and `e` and `d` are hex digits. So these are taken
 * from the engine instead of argued about.
 *
 * The verdict is only that build's, so the assertion is one-directional where it has to
 * be: this engine has no oklch(), and a newer one would accept what it rejects. The
 * audit may always decline to resolve a value, since `hsl()` and the rest are reported
 * as unresolvable by design. What it may never do is resolve one to different channels
 * than the browser, or resolve one the browser throws away.
 */
const CHROMIUM: Array<[string, string]> = [
  // generated by scripts/verify-css-colors.mjs against Chromium 105.0.5195.19
  ['#ff0000',                'rgb(255, 0, 0)'],
  ['#f00',                   'rgb(255, 0, 0)'],
  ['#f008',                  'rgba(255, 0, 0, 0.533)'],
  ['#ff000080',              'rgba(255, 0, 0, 0.5)'],
  ['#027EB5',                'rgb(2, 126, 181)'],
  ['#ABC',                   'rgb(170, 187, 204)'],
  ['#12345',                 'REJECTED'],
  ['#1234567',               'REJECTED'],
  ['#123456789',             'REJECTED'],
  ['#ggg',                   'REJECTED'],
  ['#gggggg',                'REJECTED'],
  ['#12345g',                'REJECTED'],
  ['red',                    'rgb(255, 0, 0)'],
  ['RED',                    'rgb(255, 0, 0)'],
  ['Red',                    'rgb(255, 0, 0)'],
  ['rebeccapurple',          'rgb(102, 51, 153)'],
  ['notacolor',              'REJECTED'],
  ['tan',                    'rgb(210, 180, 140)'],
  ['white',                  'rgb(255, 255, 255)'],
  ['r\\65 d',                'rgb(255, 0, 0)'],
  ['re\\64',                 'rgb(255, 0, 0)'],
  ['\\red',                  'rgb(255, 0, 0)'],
  ['\\72 ed',                'rgb(255, 0, 0)'],
  ['\\72ed',                 'REJECTED'],
  ['\\110000',               'REJECTED'],
  ['r\\65d',                 'REJECTED'],
  ['rgb(255, 0, 0)',         'rgb(255, 0, 0)'],
  ['rgba(255, 0, 0, 0.5)',   'rgba(255, 0, 0, 0.5)'],
  ['rgb(100%, 0%, 0%)',      'rgb(255, 0, 0)'],
  ['rgba(0, 0, 0, 20%)',     'rgba(0, 0, 0, 0.2)'],
  ['rgb(0, 50%, 0)',         'REJECTED'],
  ['rgba(255, 50%, 0, 0.5)', 'REJECTED'],
  ['rgb(0, 0)',              'REJECTED'],
  ['rgb(0, 0, 0, 0, 0)',     'REJECTED'],
  ['rgb(0, 0, 0 / 0.5)',     'REJECTED'],
  ['rgb(300, 0, 0)',         'rgb(255, 0, 0)'],
  ['rgb(-10, 0, 0)',         'rgb(0, 0, 0)'],
  ['rgb(255 0 0)',           'rgb(255, 0, 0)'],
  ['rgb(255 0 0 / 0.5)',     'rgba(255, 0, 0, 0.5)'],
  ['rgb(50% 50% 50%)',       'rgb(128, 128, 128)'],
  ['rgb(255 50% 0)',         'REJECTED'],
  ['rgb(0 0 0 0.5)',         'REJECTED'],
  ['rgb(0 0 0 // 0.5)',      'REJECTED'],
  ['rgb(0 0 0 /)',           'REJECTED'],
  ['rgb(2.55e2 0 0)',        'rgb(255, 0, 0)'],
  ['rgb(.0 0 0)',            'rgb(0, 0, 0)'],
  ['rgb(+255 0 0)',          'rgb(255, 0, 0)'],
  ['rgb(. 0 0)',             'REJECTED'],
  ['rgb(1..2 0 0)',          'REJECTED'],
  ['rgb(1e 0 0)',            'REJECTED'],
  ['rgb(0 0 0 / 50%)',       'rgba(0, 0, 0, 0.5)'],
  ['rgb(var(--c), 0, 0)',    'REJECTED'],
  ['hsl(0 100% 50%)',        'rgb(255, 0, 0)'],
  ['hsl(0, 100%, 50%)',      'rgb(255, 0, 0)'],
  ['oklch(0.7 0.1 200)',     'REJECTED'],
  ['color(display-p3 1 0 0)','REJECTED'],
  ['hwb(0 0% 0%)',           'rgb(255, 0, 0)'],
  ['lab(50% 40 30)',         'REJECTED'],
];

describe('agreement with a browser', () => {
  /**
   * Alpha is compared as eighths of a bit rather than as a decimal, because that is all
   * the precision a browser keeps: Chromium serialises `#ff000080` as alpha `0.5`, not
   * as 128/255 = `0.502`. That is a narrower comparison than `colorKey` makes, which
   * holds alpha decimal on purpose so that two allowlist entries cannot collide — a
   * different question from whether we agree with the browser about the colour.
   */
  const comparable = ({ r, g, b, a }: Rgba) =>
    `rgb(${r}, ${g}, ${b}) at alpha ${Math.round(a * 255)}/255`;

  const asChromiumSees = (serialised: string) => {
    const args = /^rgba?\(([^)]*)\)$/.exec(serialised);
    if (args === null) { throw new Error(`cannot read ${serialised}`); }
    const [r, g, b, a] = args[1].split(',').map((part) => parseFloat(part));
    return comparable({ r, g, b, a: a === undefined ? 1 : a });
  };

  it.each(CHROMIUM)('resolves %s as Chromium does', (value, verdict) => {
    const resolved = stylesheetColors(`a { color: ${value}; }`)
      .map(({ rgba }) => rgba)
      .filter((rgba): rgba is Rgba => rgba !== null);

    if (verdict === 'REJECTED') {
      // resolving one of these is how a malformed theme value passes the consumer's
      // "every colour token resolves" guard while generating CSS the browser drops
      expect(resolved.map(comparable)).toEqual([]);
      return;
    }

    // declining is allowed, being wrong is not
    if (resolved.length === 0) { return; }

    expect(comparable(resolved[0])).toEqual(asChromiumSees(verdict));
  });
});

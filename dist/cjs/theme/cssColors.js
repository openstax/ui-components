"use strict";
/**
 * Colour auditing for plain-CSS stylesheets: text in, structured colours out.
 *
 * This parses declarations rather than grepping for `#hex`, because a grep misses
 * `rgba()`, `hsl()`, named colours in shorthands and colours in gradient stops — all of
 * which can silently duplicate or diverge from a theme value.
 *
 * Published deliberately, not incidentally. This engine knows nothing about
 * ui-components; REX needed exactly the same thing and, because the first copy lived
 * inside a spec file where nothing could import it, got a second hand-written one
 * instead. The two had already diverged before either merged. See CORE-2736.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.opaqueKey = exports.colorKey = exports.stylesheetColors = exports.findColors = exports.describeColor = exports.takesColor = exports.declarations = exports.stripNoise = void 0;
/** https://www.w3.org/TR/css-color-4/#named-colors */
const NAMED_COLORS = {
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
 * happens to contain a colour (`var`, `color-mix`, the gradients) is descended into.
 */
const COLOR_FUNCTIONS = [
    'rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch', 'color',
    'device-cmyk',
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
const blankNoise = (css, keepStrings) => {
    const pad = (length) => ' '.repeat(Math.max(0, length));
    let out = '';
    let index = 0;
    while (index < css.length) {
        const rest = css.slice(index);
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
            while (cursor < css.length && depth > 0) {
                if (css[cursor] === '(') {
                    depth++;
                }
                if (css[cursor] === ')') {
                    depth--;
                }
                cursor++;
            }
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
const stripNoise = (css) => blankNoise(css, false);
exports.stripNoise = stripNoise;
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
const declarations = (css) => {
    const found = [];
    const values = (0, exports.stripNoise)(css);
    const selectors = blankNoise(css, true);
    const stack = [];
    let start = 0;
    let parens = 0;
    const flush = (end) => {
        const segment = values.slice(start, end);
        const separator = segment.indexOf(':');
        if (stack.length > 0 && separator !== -1) {
            const value = segment.slice(separator + 1).trim();
            const property = segment.slice(0, separator).trim().toLowerCase();
            if (value) {
                found.push({ context: stack.join(' '), property, value });
            }
        }
        start = end + 1;
    };
    for (let index = 0; index < values.length; index++) {
        const character = values[index];
        if (character === '(') {
            parens++;
        }
        if (character === ')') {
            parens = Math.max(0, parens - 1);
        }
        if (parens !== 0) {
            continue;
        }
        if (character === '{') {
            stack.push(selectors.slice(start, index).replace(/\s+/g, ' ').trim());
            start = index + 1;
        }
        else if (character === '}') {
            flush(index);
            stack.pop();
        }
        else if (character === ';') {
            flush(index);
        }
    }
    return found;
};
exports.declarations = declarations;
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
 */
const COLOR_SHORTHANDS = [
    'background', 'background-image', 'border', 'border-block', 'border-block-end',
    'border-block-start', 'border-bottom', 'border-image', 'border-image-source',
    'border-inline', 'border-inline-end', 'border-inline-start', 'border-left',
    'border-right', 'border-top', 'box-shadow', 'caret', 'column-rule', 'fill', 'filter',
    'backdrop-filter', 'list-style', 'mask', 'mask-image', 'outline', 'scrollbar', 'stroke',
    'text-decoration', 'text-emphasis', 'text-shadow', 'text-stroke',
];
/** Whether a bare identifier in this property's value could be a colour. */
const takesColor = (property) => {
    // custom properties have no grammar to go on, so anything in one counts
    if (property.startsWith('--')) {
        return true;
    }
    const name = property.replace(/^-(?:webkit|moz|ms|o)-/, '');
    return name.includes('color') || COLOR_SHORTHANDS.includes(name);
};
exports.takesColor = takesColor;
const clamp = (value, max) => Math.min(max, Math.max(0, value));
const channel = (raw) => {
    const text = raw.trim();
    const percent = /^(-?[\d.]+)%$/.exec(text);
    // scale by 255/100 rather than by the decimal 2.55, which is not representable in
    // binary: 50 * 2.55 is 127.49999999999999 and rounds to 127, where 50% of 255 is
    // 127.5 and rounds to 128. The two spellings of the same colour must agree, or they
    // get different keys and the audit misclassifies one of them.
    if (percent) {
        return Math.round((clamp(parseFloat(percent[1]), 100) / 100) * 255);
    }
    return /^-?[\d.]+$/.test(text) ? Math.round(clamp(parseFloat(text), 255)) : null;
};
const alphaChannel = (raw) => {
    if (raw === undefined) {
        return 1;
    }
    const text = raw.trim();
    const percent = /^(-?[\d.]+)%$/.exec(text);
    if (percent) {
        return clamp(parseFloat(percent[1]), 100) / 100;
    }
    return /^-?[\d.]+$/.test(text) ? clamp(parseFloat(text), 1) : null;
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
const fromHex = (literal) => {
    if (!HEX.test(literal.toLowerCase())) {
        return null;
    }
    const digits = literal.slice(1);
    const expand = (text) => text.split('').map((c) => c + c).join('');
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
const describeColor = (literal) => {
    const text = literal.trim();
    if (text.startsWith('#')) {
        return fromHex(text.toLowerCase());
    }
    const named = NAMED_COLORS[text.toLowerCase()];
    if (named) {
        return fromHex(named);
    }
    const fn = /^(rgba?)\((.*)\)$/is.exec(text);
    if (!fn) {
        return null;
    }
    const args = fn[2].includes(',')
        ? fn[2].split(',')
        : fn[2].replace(/\//g, ' ').trim().split(/\s+/);
    if (args.length < 3 || args.length > 4) {
        return null;
    }
    const [r, g, b] = args.slice(0, 3).map(channel);
    const a = alphaChannel(args[3]);
    return r === null || g === null || b === null || a === null ? null : { r, g, b, a };
};
exports.describeColor = describeColor;
/**
 * Finds every colour literal in a declaration value, at any depth. Functions that merely
 * contain colours are descended into; colour functions are terminal.
 *
 * `named` says whether a bare identifier may be read as a colour, which depends on the
 * property the value belongs to — see `takesColor`. Hex and the colour functions are
 * unambiguous and are found either way. It has no default: defaulting it to `true` would
 * quietly restore the over-eager behaviour for any caller that forgot it.
 */
const findColors = (value, named) => {
    const found = [];
    let index = 0;
    while (index < value.length) {
        const rest = value.slice(index);
        const call = /^([a-z][\w-]*)\(/i.exec(rest);
        if (call) {
            let depth = 1;
            let cursor = index + call[0].length;
            while (cursor < value.length && depth > 0) {
                if (value[cursor] === '(') {
                    depth++;
                }
                if (value[cursor] === ')') {
                    depth--;
                }
                cursor++;
            }
            const literal = value.slice(index, cursor);
            const args = literal.slice(call[0].length, literal.endsWith(')') ? -1 : undefined);
            if (COLOR_FUNCTIONS.includes(call[1].toLowerCase())) {
                found.push({ literal, rgba: (0, exports.describeColor)(literal) });
            }
            else {
                found.push(...(0, exports.findColors)(args, named));
            }
            index = cursor;
            continue;
        }
        const hex = /^#[0-9a-fA-F]{3,8}\b/.exec(rest);
        if (hex) {
            found.push({ literal: hex[0], rgba: (0, exports.describeColor)(hex[0]) });
            index += hex[0].length;
            continue;
        }
        const word = /^-?[a-zA-Z][\w-]*/.exec(rest);
        if (word) {
            const name = word[0].toLowerCase();
            if (named && NAMED_COLORS[name] && !COLOR_KEYWORDS.includes(name)) {
                found.push({ literal: word[0], rgba: (0, exports.describeColor)(word[0]) });
            }
            index += word[0].length;
            continue;
        }
        index++;
    }
    return found;
};
exports.findColors = findColors;
/**
 * Every colour literal written in a stylesheet, in source order.
 *
 * Accumulated with `push` rather than by spreading into a new array per declaration:
 * this runs over every stylesheet in a tree, so the quadratic version was copying every
 * colour found so far once per subsequent declaration.
 */
const stylesheetColors = (css) => {
    const found = [];
    for (const { context, property, value } of (0, exports.declarations)(css)) {
        for (const color of (0, exports.findColors)(value, (0, exports.takesColor)(property))) {
            found.push({ ...color, context, property });
        }
    }
    return found;
};
exports.stylesheetColors = stylesheetColors;
const hex = (rgba) => `#${[rgba.r, rgba.g, rgba.b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
/**
 * Canonical key for comparing two colours, and the form a consumer's allowlist is keyed
 * by. `#rrggbb` for an opaque colour, with the alpha appended when there is one.
 *
 * Hex rather than the raw channels because this is the form that ends up in an allowlist
 * and in a failure message, where a reader has to recognise it. Alpha stays decimal
 * rather than becoming a fourth hex pair, which would round two distinct alphas onto one
 * key.
 */
const colorKey = (rgba) => rgba.a === 1 ? hex(rgba) : `${hex(rgba)}/${rgba.a}`;
exports.colorKey = colorKey;
/** Key ignoring alpha, so `rgba(0, 0, 0, 0.2)` can be recognised as the theme's black. */
const opaqueKey = (rgba) => hex(rgba);
exports.opaqueKey = opaqueKey;

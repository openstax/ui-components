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
     * whitespace-collapsed: `@media (max-width: 75em) .book-banner .title`.
     *
     * Carried because a consumer may need to tell two occurrences of the same literal in
     * one file apart — REX's baseline ratchet identifies an occurrence by the declaration
     * it was written in. Consumers that only need to know a colour is wrong can ignore it.
     */
    context: string;
    /** Lower-cased property name, e.g. `background-color` or `--tabs-border-color`. */
    property: string;
    /** Everything to the right of the `:`. */
    value: string;
}
/** A colour literal together with the declaration it was written in. */
export interface StylesheetColor extends FoundColor {
    context: string;
    property: string;
}
/** Noise blanked for reading declaration values: strings go too. */
export declare const stripNoise: (css: string) => string;
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
export declare const declarations: (css: string) => Declaration[];
/** Whether a bare identifier in this property's value could be a colour. */
export declare const takesColor: (property: string) => boolean;
/**
 * Resolves a colour literal to channels, or null when it cannot be resolved statically.
 * Returning null is deliberate: `hsl()`, `oklch()` and `color()` are reported by the
 * consumer rather than passing silently, so the escape hatch stays explicit.
 */
export declare const describeColor: (literal: string) => Rgba | null;
/**
 * Finds every colour literal in a declaration value, at any depth. Functions that merely
 * contain colours are descended into; colour functions are terminal.
 *
 * `named` says whether a bare identifier may be read as a colour, which depends on the
 * property the value belongs to — see `takesColor`. Hex and the colour functions are
 * unambiguous and are found either way. It has no default: defaulting it to `true` would
 * quietly restore the over-eager behaviour for any caller that forgot it.
 */
export declare const findColors: (value: string, named: boolean) => FoundColor[];
/**
 * Every colour literal written in a stylesheet, in source order.
 *
 * Accumulated with `push` rather than by spreading into a new array per declaration:
 * this runs over every stylesheet in a tree, so the quadratic version was copying every
 * colour found so far once per subsequent declaration.
 */
export declare const stylesheetColors: (css: string) => StylesheetColor[];
/**
 * Canonical key for comparing two colours, and the form a consumer's allowlist is keyed
 * by. `#rrggbb` for an opaque colour, with the alpha appended when there is one.
 *
 * Hex rather than the raw channels because this is the form that ends up in an allowlist
 * and in a failure message, where a reader has to recognise it. Alpha stays decimal
 * rather than becoming a fourth hex pair, which would round two distinct alphas onto one
 * key.
 */
export declare const colorKey: (rgba: Rgba) => string;
/** Key ignoring alpha, so `rgba(0, 0, 0, 0.2)` can be recognised as the theme's black. */
export declare const opaqueKey: (rgba: Rgba) => string;

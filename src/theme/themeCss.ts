import { palette } from "./palette";
import { colors, padding, zIndex } from "../theme";

const kebab = (key: string) => key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

type Token = readonly [name: string, value: string];

/**
 * The tokens theme.css is made of, grouped the way the file is laid out. This is the
 * single description of the projection from the JavaScript theme into CSS custom
 * properties: `renderThemeCss` writes it out, and `tokens.spec.ts` checks the committed
 * file still matches. Nothing reads the CSS to decide what the tokens are.
 */
export const themeTokenGroups: ReadonlyArray<{ label: string; tokens: Token[] }> = [
  {
    label: "palette — src/theme/palette.ts",
    tokens: Object.entries(palette).map(([key, value]) => [`--ox-color-${kebab(key)}`, value] as const),
  },
  {
    label: "link colours — src/theme.ts",
    tokens: [
      ["--ox-color-link", colors.link.color],
      ["--ox-color-link-hover", colors.link.hover],
    ],
  },
  {
    label: "z-index scale — src/theme.ts",
    tokens: Object.entries(zIndex).map(([key, value]) => [`--ox-z-index-${kebab(key)}`, String(value)] as const),
  },
  {
    label: "padding — src/theme.ts",
    tokens: [
      ["--ox-padding-navbar-mobile", `${padding.navbar.mobile}rem`],
      ["--ox-padding-navbar-desktop", `${padding.navbar.desktop}rem`],
    ],
  },
];

/** Every token as a flat name -> value map. */
export const themeTokens = (): Map<string, string> =>
  new Map(themeTokenGroups.flatMap((group) => group.tokens));

const header = `/*
 * Global theme tokens.
 *
 * GENERATED FILE — do not edit by hand. Run \`npm run generate:theme-css\`.
 *
 * Projected from the JavaScript theme, which stays the single source of truth:
 * src/theme/palette.ts (colours) and src/theme.ts (link colours, z-index, padding).
 * src/theme/tokens.spec.ts fails if this file is out of date, so add the value to the
 * JS theme and regenerate rather than editing here.
 *
 * Component CSS should reference these rather than repeating a literal. Where a
 * component exposes its own --component-* override hook, use the token as the
 * fallback: var(--tabs-border-color, var(--ox-color-pale)).
 *
 * Imported for side effects by every component whose CSS depends on it, the same
 * way component stylesheets are imported. Consumers need do nothing.
 */`;

export const renderThemeCss = () => {
  const body = themeTokenGroups
    .map(({ label, tokens }) =>
      [`  /* ${label} */`, ...tokens.map(([name, value]) => `  ${name}: ${value};`)].join("\n")
    )
    .join("\n\n");

  return `${header}\n:root {\n${body}\n}\n`;
};

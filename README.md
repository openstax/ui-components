# OpenStax UI Component Library

General UI components for OpenStax projects.

## Installation

From the GitHub Packages registry, with `@openstax:registry=https://npm.pkg.github.com` in `.npmrc`:

```json
"dependencies": {
  "@openstax/ui-components": "^1.26.0"
}
```

Or from a git tag, which needs no registry setup:

```json
"dependencies": {
  "@openstax/ui-components": "https://github.com/openstax/ui-components#1.26.4"
}
```

Use a version that matches your project's requirements. See [Versioning & Release Process](#versioning--release-process) for how releases are tagged.

## Versioning & Release Process

A release is published to the GitHub Packages npm registry and tagged in git. Projects can install either way:

- **Registry:** a semver range such as `^1.26.0`, with `@openstax:registry=https://npm.pkg.github.com` in `.npmrc`.
- **Git tag:** `openstax/ui-components#1.26.4`. The tag points to a "Dist files" commit that adds the built `dist/` to the release commit, so the install needs no build.

Tags are the version, with no `v` prefix: `1.26.4`, or `1.25.1-pre1` for a pre-release. A feature-specific tag such as `sentry-logger-03212025` is created by hand.

### Creating a Release
1. Update the version in `package.json` (and the lockfile, with `npm version <version> --no-git-tag-version`)
1. Merge it, then check out that commit with a clean working tree
1. Run `./scripts/publish.bash`

A pre-release (a version with a `-` suffix) is published with the `next` dist-tag, so `npm install @openstax/ui-components` still gets the latest release.

Publishing cannot be undone, so the script creates the tag first. Everything that can go wrong with it then happens before the publish. The script stops, before `npm publish`, if:

- the working tree has changes (untracked files included), or the tag already exists locally or on origin
- the version is not `MAJOR.MINOR.PATCH` or `MAJOR.MINOR.PATCH-prerelease`
- you are not logged in to the npm registry
- the build changes a tracked file, such as the generated `src/theme/theme.css`
- git cannot create the tag: no author and committer identity, or `tag.gpgSign` is on without a usable key
- any file in the package is missing from the tag or differs from it, byte for byte, for example an untracked or ignored file under `src/`, or a checkout whose files have CRLF line endings because of `core.autocrlf`. Release from a checkout with LF line endings.
- git cannot push the tag to origin (a dry-run push), or `HEAD` has moved since the script started

If it stops before the publish, it removes the tag it created. The only step after the publish is pushing the tag; if that fails the script says so, and the tag is still there locally, so push it by hand with `git push origin refs/tags/<version>`. Do not run the release again.

## CI/CD Workflows

### Checks Workflow
Runs on PRs and main branch, handling:
- Jira ticket verification
- Linting and tests

## Usage in Projects

```typescript
// Import all components
import * as UI from '@openstax/ui-components';

// Or just what you need
import { Button, Modal } from '@openstax/ui-components';
```

## Development

```bash
npm run dev        # Watch mode
npx ladle serve    # Component demos at localhost:61000
npm run test       # Run tests
npm run lint       # Check code rules
npm run dist       # Build distribution files
```

## Styling

Components are styled with plain CSS in a sibling `.css` file, imported for side effects.

### Theme tokens

Theme values are defined once, in JavaScript, and projected into CSS custom properties by
`src/theme/theme.css`. That file is **generated** from `src/theme/palette.ts` and
`src/theme.ts` — never edit it by hand. `npm run build` regenerates it as its first step, so
a published package can never ship a stale one. To refresh it without a full build:

```
npm run generate:theme-css
```

It is committed as well as generated, because jest and ladle read `src/` directly and never
run the build — `src/theme/tokens.spec.ts` fails when the committed copy is stale, which is
what makes CI (which runs lint and test, not build) catch it.

**Never write a theme value as a literal in a component stylesheet** — reference the token
instead:

```css
/* no */
.thing { border-color: #d5d5d5; }

/* yes */
.thing { border-color: var(--ox-color-pale); }
```

Tokens are `--ox-`-prefixed, so they will not collide with a consuming app's own variables.
Color tokens are the kebab-case form of the `src/theme/palette.ts` key
(`palette.neutralLighter` → `--ox-color-neutral-lighter`); there are also `--ox-color-link`,
`--ox-color-link-hover`, `--ox-z-index-*` and `--ox-padding-navbar-*`.

Any component whose CSS uses a token must import the token file alongside its own
stylesheet:

```ts
import './MyComponent.css';
import '../theme/theme.css';
```

There is no bundler in the build — `build.bash` copies CSS 1:1 — so nothing resolves an
`@import` on our behalf and a stylesheet does not drag `theme.css` in by itself. Forget the
import and every `var(--ox-*)` in that file quietly takes its fallback, which usually looks
right on screen because the fallback is the literal the token replaced. `tokens.spec.ts`
fails when a stylesheet reads a token and the module importing it does not import the
tokens, so this cannot be forgotten rather than merely being documented.

Consumers of the package need do nothing: the import rides along with the component,
bundlers deduplicate it, and `sideEffects` in `package.json` keeps it from being
tree-shaken. An app that wants the tokens without rendering one of our components — to
build its own styles on the palette, say — can load the file directly:

```ts
import '@openstax/ui-components/theme/theme.css';
```

### Component override hooks and when to bind in JS

A component may expose its own `--component-*` custom property so consumers can restyle it.
Declare the **default in the stylesheet** with the token as the fallback, and do not bind it
from JavaScript:

```css
.ox-tabs [role="tab"] { border-color: var(--tabs-active-border-color, var(--ox-color-dark-green)); }
```

Bind a custom property from JavaScript only when its value genuinely varies at runtime — a
variant lookup, a numeric prop, a disabled state. A static color pushed through an inline
style is duplication with extra steps, and it wins over the cascade in ways callers do not
expect.

Widen the component's `style` prop to `CSSPropertiesWithVariables` (from `src/types`) so
callers can set these without a cast.

### What CI enforces

`src/theme/tokens.spec.ts` fails the build if:

- the committed `theme.css` is not what the generator produces from the JS theme (the build
  regenerates it; this is what stops a stale copy reaching jest, ladle or a reviewer)
- a component stylesheet writes a color literal that duplicates a theme value
- a component stylesheet introduces a color that is not a theme value and not in the
  `KNOWN_OFF_PALETTE` allowlist
- a component stylesheet reads an `--ox-*` token that does not exist
- a stylesheet reads a token and the module that imports it does not import `theme.css`

The color check parses declarations rather than grepping for hex, so it reads a value the
way the property does. What that covers:

- Hex, and the color functions — `rgb()`, `hsl()`, `hwb()`, `lab()`, `lch()`, `oklab()`,
  `oklch()`, `color()` and their `a` variants — in any declaration, whatever the property.
- A bare name such as `whitesmoke` only where the property could take a color: a property
  whose name contains `color`, one of the color shorthands (`background`, `border`,
  `outline`, `box-shadow`, `text-decoration`, `fill` and the rest), or a custom property,
  which has no grammar to go on. `var()` keeps the gate of the property it is written in,
  since its fallback is whatever that property makes of it.
- Functions that merely *contain* colors (`var()`, `color-mix()`, `light-dark()`, the
  gradients) are descended into rather than read as literals, so a value built out of
  tokens stays clean. The gradients and `color-mix()` open the gate on their own, because
  `linear-gradient(red, blue)` is a gradient between two colors whatever it is assigned to.
- A translucent color where its opaque channels are a theme value — `rgba(0, 0, 0, 0.2)` is
  black at 20% and there is no token form for it. A new hue smuggled in through `rgba()` is
  still refused.

What it does not cover, deliberately: a bare name outside a color context. `animation-name:
red`, `font-family: white` and `grid-area: gold` are identifiers that happen to spell
colors, and are not reported.

What it does not cover, for now: only the literal ASCII spelling of a *name* is recognized.
Escapes are decoded in color names themselves, but not in property or function names, so
`c\6f lor: red` — which is `color: red` to a browser — is missed. Nothing we ship is
written that way; CORE-2885 tracks it along with the rest of the lexing work.

The check has its own tests, so what is claimed above is pinned rather than asserted.

Adding a genuinely new color is therefore a deliberate act: put it in `palette.ts` if it is
part of the design, or in the allowlist with a reason if it is a one-off we are keeping.

An allowlist entry only excuses a color while the theme does not have it. Promote one into
`palette.ts` later and every literal of it becomes a duplicate owed a swap, and the entry
itself has to go in the same commit — the tests say both.

Breakpoints are the known gap — `@media (min-width: var(--x))` is not valid CSS, so
breakpoint values are still repeated in media queries and are not covered by the tests.

## Testing Across Projects

To test changes before tagging:

1. Push your branch
2. Update the consuming project temporarily:
   ```json
   "@openstax/ui-components": "https://github.com/openstax/ui-components#your-branch"
   ```
3. After testing, create and push a proper version tag

## Best Practices

- Update `CHANGELOG.md` with significant changes
- Coordinate breaking changes with dependent projects
- Include tests and Ladle stories for new components
- Export all components from `src/index.ts`

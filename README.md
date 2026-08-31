# OpenStax UI Component Library

General UI components for OpenStax projects.

## Installation
Add to your project using GitHub tags:

```json
"dependencies": {
  "@openstax/ui-components": "https://github.com/openstax/ui-components#1.15.0"
}
```
Use a version that matches your project's requirements.

## Versioning & Release Process

### Git Tags
We use Git tags instead of npm publishing:
- Standard: `1.15.0`, `1.15.1`
- Pre-release: `1.15.3-pre1`
- Feature-specific: `sentry-logger-03212025`

### Creating a Release
1. Update the version in `package.json`
1. Run `./scripts/publish.bash`

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
`src/theme.ts` — never edit it by hand. Change the JavaScript and run:

```
npm run generate:theme-css
```

**Never write a theme value as a literal in a component stylesheet** — reference the token
instead:

```css
/* no */
.thing { border-color: #d5d5d5; }

/* yes */
.thing { border-color: var(--ox-color-pale); }
```

Tokens are `--ox-`-prefixed, so they will not collide with a consuming app's own variables.
Colour tokens are the kebab-case form of the `src/theme/palette.ts` key
(`palette.neutralLighter` → `--ox-color-neutral-lighter`); there are also `--ox-color-link`,
`--ox-color-link-hover`, `--ox-z-index-*` and `--ox-padding-navbar-*`.

Any component whose CSS uses a token must import the token file alongside its own stylesheet:

```ts
import './MyComponent.css';
import '../theme/theme.css';
```

Consumers need do nothing — bundlers deduplicate the import, and `sideEffects` in
`package.json` keeps it from being tree-shaken.

### Component override hooks and when to bind in JS

A component may expose its own `--component-*` custom property so consumers can restyle it.
Declare the **default in the stylesheet** with the token as the fallback, and do not bind it
from JavaScript:

```css
.tabs [role="tab"] { border-color: var(--tabs-active-border-color, var(--ox-color-dark-green)); }
```

Bind a custom property from JavaScript only when its value genuinely varies at runtime — a
variant lookup, a numeric prop, a disabled state. A static colour pushed through an inline
style is duplication with extra steps, and it wins over the cascade in ways callers do not
expect.

Widen the component's `style` prop to `CSSPropertiesWithVariables` (from `src/types`) so
callers can set these without a cast.

### What CI enforces

`src/theme/tokens.spec.ts` fails the build if:

- the committed `theme.css` is not what the generator produces from the JS theme
- a component stylesheet writes a colour literal that duplicates a theme value
- a component stylesheet introduces a colour that is not a theme value and not in the
  `KNOWN_OFF_PALETTE` allowlist
- a component stylesheet reads an `--ox-*` token that does not exist

The colour check parses declarations, so it covers every syntax a colour can be written in —
hex, `rgb()`/`hsl()`/`oklch()`/`color()`, and bare named colours wherever they appear,
including inside shorthands and gradient stops. Functions that merely *contain* colours
(`var()`, `color-mix()`, the gradients) are descended into rather than treated as literals,
so building a value out of tokens stays clean. A translucent colour is accepted when its
opaque channels are a theme value — `rgba(0, 0, 0, 0.2)` is black at 20% and there is no
token form for it — which still refuses a new hue smuggled in through `rgba()`.

The check has its own tests, so the guarantee is a tested one rather than an asserted one.

Adding a genuinely new colour is therefore a deliberate act: put it in `palette.ts` if it is
part of the design, or in the allowlist with a reason if it is a one-off we are keeping.

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

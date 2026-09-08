# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed

#### Render-callback `className` support in react-aria-components wrappers (CORE-2708)

`NavBarMenuItem`, `NavBarPopover`, `NavBarButton`, and `TreeCheckbox` passed the caller's
`className` straight into `classnames`, which ignores functions. React-aria-components types
`className` as `string | ((renderProps) => string)`, so a render-callback `className` was
silently discarded and never reached the DOM. These wrappers now use RAC's
`composeRenderProps`, matching the fix applied to `Mask`, `OverlayMask`, and `OverlayWrapper`.

`NavBarButtonProps` no longer re-declares `className?: string`; the type now inherits the
callback form from `ButtonProps`. This widens the accepted type, so string `className` values
keep working unchanged.

#### Render-callback `style` support in react-aria-components wrappers (CORE-2710)

`NavBarMenuItem`, `NavBarPopover`, and `TreeCheckbox` merged the caller's `style` into their
own CSS-variable object with a spread. React-aria-components types `style` as
`CSSProperties | ((renderProps) => CSSProperties)`, and spreading a function into an object
literal copies nothing, so a render-callback `style` was silently discarded — with no type
error to catch it. These wrappers now use RAC's `composeRenderProps` and merge inside a
callback, so both forms reach the DOM. The object form is unchanged, including the caller's
ability to override the wrapper's CSS variables.

### Changed - BREAKING CHANGES

#### Feature Component Migration (CORE-2008)

`MessageBox`, `Banner`, `Tree` and `ToggleButtonGroup` have been migrated from styled-components
to plain CSS bound to the `--ox-*` theme tokens. Props, behaviour and visual appearance are
unchanged, but the exported pieces are no longer styled-components:

**Breaking Changes:**

1. **`BoxWrapper` (and `BoxHeading`, `BoxBody`, `BoxEventId`) are no longer styled-components**
   - **Old behavior**: styled-components, usable as component selectors inside another styled
     component's template — `${BoxWrapper} { ... }`
   - **New behavior**: plain function components rendering `.message-box`, `.message-box-heading`,
     `.message-box-body` and `.message-box-event-id`
   - **Impact**: `${BoxWrapper}` in a styled-components template no longer resolves to a selector.
     `openstax/assessments` does this in
     `packages/frontend/src/assessments/screens/Preview/styled.tsx`
   - **Migration**: target the `.message-box` class instead

2. **`CloseButton` no longer wraps `Button`**
   - **Old behavior**: `styled(Button)` that unset every style `Button` applied, and forwarded the
     `severity` prop through to the rendered `<button>` element
   - **New behavior**: a self-contained `<button class="banner-close-button">`. The old layering
     only worked because styled-components injects its sheet last; in plain CSS the two class
     selectors have equal specificity and the winner would depend on module evaluation order
   - **Impact**: `variant` and `isWaiting` are no longer accepted (no consumer passes them), and the
     rendered element no longer carries a `severity` attribute or the `button-base` class
   - **Migration**: none needed for the `severity` / `onClick` / `aria-label` usage in the wild

**Non-Breaking Changes:**

- `StyledBanner`, `Severity`, `Tree`, `TreeItem`, `TreeItemContent`, `TreeChevron`, `MessageBox`
  and `ToggleButtonGroup` keep their props and rendered structure.
- Banner severity is now a tone class — `.banner-note`, `.banner-warning`, `.banner-error` — which
  sets `--banner-bg`, `--banner-color` and `--banner-border-color`. The tone class is applied to
  the close button as well as the banner, so `CloseButton` keeps its colour when rendered outside
  a `StyledBanner`.
- The react-aria wrappers (`Tree`, `TreeItem`, `StyledToggleButtonGroup`, `StyledToggleButton`)
  compose `className` with `composeRenderProps`, so both the string and render-callback forms
  survive. `styled(UI.ToggleButtonGroup)` in consuming projects keeps working.
- `TreeItemContent` is re-exported straight from react-aria-components. It renders no DOM node, so
  the empty `styled()` wrapper it used to carry was a no-op.
- The `style` prop on the `MessageBox` and `Banner` exports is widened from `React.CSSProperties`
  to `CSSPropertiesWithVariables`, so callers can set the documented `--message-box-*` and
  `--banner-*` variables without casting. This is a widening, so existing usage is unaffected.
- Four Banner colours (`#fff5e0`, `#976502`, `#fdbd3e`, `#f8e8ea`) are recorded in
  `KNOWN_OFF_PALETTE` rather than snapped to the nearest palette entry, which would have been a
  visual change.


#### Button Component Migration (CORE-1999)

The Button component and its variants have been migrated from styled-components to standard CSS with CSS custom properties. While the components maintain the same visual appearance and React API, there are **breaking changes** for certain exports:

**Breaking Changes:**

1. **`buttonCss` export**: Changed from a styled-components `css` fragment to a plain string (`'button-base'`)
   - **Old behavior**: Was a styled-components CSS fragment that could be interpolated into styled components and included variant styles
   - **New behavior**: Returns the string `'button-base'` (a CSS class name)
   - **Impact**: Code that interpolates `buttonCss` into styled-components templates will break if it expects variant colors to be applied automatically. Callers must now also set CSS custom properties for colors.
   - **Migration**: Use the Button components directly, or manually bind CSS custom properties when using the class

2. **`linkStyle` export**: Changed from a styled-components `css` fragment to a plain CSS string
   - **Old behavior**: Was a styled-components CSS fragment (`css` tagged template)
   - **New behavior**: Returns a plain CSS string with the same styles
   - **Impact**: Type incompatibility for consumers expecting `FlattenSimpleInterpolation`
   - **Migration**: Can still be used in styled-components template literals, but the type has changed
   - **Deprecated**: Use the `ButtonLink` component instead

3. **`applyButtonVariantStyles` function**: Return type changed from `FlattenSimpleInterpolation` to plain string
   - **Old behavior**: Returned styled-components `FlattenSimpleInterpolation` type
   - **New behavior**: Returns a plain CSS string
   - **Impact**: Type incompatibility for consumers
   - **Migration**: Can still be used in styled-components template literals
   - **Deprecated**: Use `getButtonVariantStyles()` with CSS custom properties instead

**Non-Breaking Changes:**

- All Button component props and behavior remain unchanged
- Visual appearance is identical to previous implementation
- All variants (Button, LinkButton, PlainButton, ButtonLink) maintain the same React API

#### Composite Component Migration (CORE-2003)

Tooltip, Toast, ToastContainer, Tabs and ButtonBar have been migrated from styled-components to
plain CSS with CSS custom properties. Props, behavior and visual appearance are unchanged, but the
styling fragments that `Tabs` exported are gone:

**Breaking Changes:**

1. **`tabListBaseCss`, `tabBaseCss`, `buttonBarWrapperCss`, `buttonBarItemCss` exports removed from `Tabs`**
   - **Old behavior**: styled-components `css` fragments (and plain strings) intended for interpolation into a consumer's own styled components
   - **New behavior**: the equivalent rules live in `Tabs.css` / `ButtonBar.css` under the `.tabs` and `.button-bar` class names
   - **Impact**: any styled-component interpolating these fragments will fail to compile. A search of the `openstax` org found no consumers outside this repo
   - **Migration**: use the `Tabs` or `ButtonBar` components, or apply the `.tabs` / `.button-bar` classes and set the documented CSS custom properties

**Non-Breaking Changes:**

- `StyledTooltip` and `StyledTrigger` are still exported. They are no longer styled-components, but
  they accept the same `className`/`style` props and merge them as before. Both are **deprecated** —
  prefer `Tooltip` and `TooltipGroup`.
- `Tooltip` no longer accepts the trigger-only `icon` / `ariaLabel` props; use `TooltipGroup` for a trigger + tooltip pair.
- `Tabs` continues to accept the React Aria `className`/`style` render-callback forms; the component
  merges its own variant classes and CSS custom properties into whatever the callback returns.
- The `style` prop on `Tabs`, `ButtonBar`, `Tooltip`, `StyledTooltip` and `StyledTrigger` is widened
  from `React.CSSProperties` to `CSSPropertiesWithVariables`. Since CSS custom properties are how
  these components are now themed, callers can override the documented `--tabs-*`, `--button-bar-*`
  and `--tooltip-*` variables without casting. This is a widening, so existing `style` usage is
  unaffected.

## [v1.10.7] - 2024-10-22

- Create custom styled checkbox
- Update primary and light checkbox styles
- Update color for checkbox label
- Add disabled state style
- Add error state style
- Add error prop to checkbox
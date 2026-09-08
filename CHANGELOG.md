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
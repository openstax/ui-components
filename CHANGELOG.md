# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

#### `Checkbox` supports an `indeterminate` state (CORE-2901)

A checkbox that summarises a set of others, such as "all options" above a list, has no way
to say that only some of them are chosen. It was either checked or unchecked, so assistive
tech reported a fully checked box when it was not (WCAG 4.1.2, Name, Role, Value).

`Checkbox` takes a new `indeterminate` prop. It sets the input's `indeterminate` property,
which browsers expose as the "mixed" state, and draws a dash in place of the checkmark for
each variant. It does not change `checked`, so the parent decides what a click on a mixed
box does; selecting everything is the native behaviour. The browser clears `indeterminate`
on click, so the prop is reapplied after every render and stays the source of truth.

A disabled indeterminate checkbox draws no dash, the same as a disabled checked one.

### Fixed

#### `TooltipGroup`'s trigger is a button that does something (CORE-2871)

An accessibility evaluation flagged the info-icon trigger as a name/role/value failure
(WCAG 4.1.2): it is exposed as `role="button"`, but pressing it did nothing useful.
react-aria's `useTooltipTrigger` binds `onPointerDown` and `onKeyDown` to *close* the
tooltip, so tabbing to the trigger opened it and then Enter or Space — the one interaction
the button role promises — dismissed it. On touch it was worse: hover never fires there and
the tap closed the tooltip on pointerdown, leaving the content unreachable.

`TooltipGroup` now owns the trigger state and presses toggle it, so the button role
describes real behaviour and the content is reachable by keyboard and by touch. Because
those library handlers run before `onPress`, the press records the state at `onPressStart`
rather than reading one react-aria has already flipped. The trigger also exposes
`aria-expanded`, so the state it toggles is reported and not just described: `aria-describedby`
supplies the description once the tooltip is already open, and says nothing about a control
that can be opened and closed.

`onOpenChange` reports each transition once, including for a caller that controls `isOpen`
and has not applied the change yet. react-aria's own pointerdown/keydown handler closes the
tooltip through the same callback before `onPress` runs, so `onPress` closes it only for a
press that had neither, such as a screen reader click.

The touch path is covered by tests. jsdom has no `PointerEvent`, and without one react-aria
falls back to branches that cannot represent touch — `useHover` binds `onMouseEnter` with a
hardcoded `mouse` pointer type — so the tests install a minimal polyfill and drive the
pointer sequence a tap produces. That puts `useHover` and `usePress` on the same branches a
real browser takes, with `triggerHoverStart` correctly ignoring touch.

The two things the evaluation's recommendation asked for — `role="tooltip"` on the tooltip
element and `aria-describedby` on the trigger — were already correct, with one exception now
fixed: `isOpen` was spread into `Tooltip` instead of being given to `TooltipTrigger`.
react-aria's `Tooltip` builds its own state when passed `isOpen` or `defaultOpen`, detached
from the trigger's, so in controlled mode the trigger's state stayed closed and
`aria-describedby` was never emitted at all — and hover and Escape-to-dismiss stopped
working. `isOpen` keeps its meaning for callers; it now drives the trigger. `defaultOpen`
and `onOpenChange` are accepted alongside it.

`ariaLabel` is unchanged but now documented in the story: the `More information` default
repeats across every instance on a screen, so callers should name what the tooltip is about.

#### The Help menu no longer announces "menu" twice (CORE-2940)

The Help trigger had `aria-label='Help menu'` on top of its visible "Help", so screen readers
read "Help menu, menu button". The aria-label is removed, so the name is now the visible
"Help".

#### Menu popovers no longer render as dialogs (CORE-2875)

react-aria-components' `Popover` gives itself `role="dialog"` unless `isNonModal` is set, and
none of our menus set it. So every `MenuTrigger` → `Popover` → `Menu` put a dialog around
the menu, with the trigger labelling both. Screen readers announced "Help menu, dialog" and
then "Help menu, menu". The dialog also made the menu modal: a full-screen underlay, a focus
trap, a scroll-locked body, and `aria-hidden` on the rest of the page. An accessibility
audit flagged this under WCAG 4.1.2 (Name, Role, Value) on the Help and Resources menus in
Assignable.

`NavBarMenuButton`, `ProfileMenu` and `DropdownMenu` now pass `isNonModal`, so the popover
has no role and the menu is the only thing announced. `NavBarMenuButton` sets it ahead of
`popoverProps`, so a caller can still override it. `NavBarPopoverButton` is unchanged and
still renders a dialog.

`isNonModal` on its own also stops a click elsewhere on the page from closing the menu.
The underlay used to catch that click, and react-aria's blur fallback ignores focus
moving to the page body. A new exported `MenuPopover` wraps `Popover` with `isNonModal`
and closes the menu again on an outside press. `NavBarPopover` switches to it whenever
`isNonModal` is set, and `DropdownMenu` uses it directly.

What changes for users while a menu is open: the page behind it stays scrollable and
visible to assistive tech, and focus is no longer trapped. Moving focus out of the menu
closes it, as does Escape or a click outside. Focus still returns to the trigger on close.
The menu also closes when the page scrolls.


#### Dropped the `os` restriction that blocked Windows installs (CORE-2876)

`package.json` declared `"os": [ "darwin", "linux" ]`, which npm enforces at install time in
*consuming* projects: `npm ci` on Windows fails with `EBADPLATFORM`, and the restriction is
copied into consumers' lockfiles. It arrived incidentally in #134, an error-boundary change,
and has shipped since 1.23.6.

Nothing here is platform-specific — every dependency is pure JavaScript and the published
package is prebuilt `dist` output — so the field is removed. The repo's own bash build
scripts are unaffected: `os` gates installation of the package, not development in this repo.

#### Consumer-supplied `generic` error fallback is honoured (CORE-2876)

`ErrorBoundary` merges a consumer's `errorFallbacks` over its defaults, `generic` included,
but then chose what to display with `typedFallback || defaultErrorFallbacks.generic` — the
module-level constant rather than the merged map. Since `typedFallback` is keyed on
`getTypeFromError`, which returns the error's constructor name (`'Error'`) and never
`'generic'`, an override of `generic` was unreachable by either path and silently ignored.
Consumers that had replaced the stock error screen — openstax/assignments deliberately uses
its own, with support details instead of a Sentry id — got the built-in one back.

The display now reads the merged map, falling back to the built-in only for boundaries that
set `includeDefaultHandlers={false}` without supplying a `generic` of their own.

A boundary that supplies `generic` also stops passing untyped errors up to its parent. It has
declared it can display anything, so bubbling past it would make the override unreachable
again whenever the boundary is nested. Boundaries without their own `generic` bubble exactly
as before.

#### Configurable `NavBar` element (CORE-2876)

`NavBar` hard-coded `tagName='nav'` on its `BodyPortal`, so every consumer got a
`navigation` landmark whether or not the bar contained navigation. An accessibility audit
of the Assignments student view flagged a bar holding only a heading, a Help menu, and a
kebab menu as an unnecessary navigation landmark (WCAG 4.1.2).

`NavBar` now accepts `tagName?: 'nav' | 'header' | 'div'`, forwarded to `BodyPortal`. It
still defaults to `'nav'`, so existing consumers are unchanged; bars that hold no
navigation links can pass `'header'` (a `banner` landmark) or `'div'` (no landmark).

The portal `slot` stays `'nav'` regardless — it is only an ordering key for
`BodyPortalSlotsContext` — and styling inside the bar is class-based, so the default
`'nav'` behaves exactly as before.

Consumers that pass a non-default `tagName` must check their body-portal layout CSS: a
tag-qualified selector such as `nav[data-portal-slot="nav"]` stops matching once the bar
renders as a `header` or `div`, and the bar loses its `grid-area`. Drop the tag qualifier
(`[data-portal-slot="nav"]`) to select the slot regardless of element. The
`SidebarNav` "UsingBodyPortal" story was updated accordingly.

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
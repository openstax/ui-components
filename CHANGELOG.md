# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

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

## [v1.10.7] - 2024-10-22

- Create custom styled checkbox
- Update primary and light checkbox styles
- Update color for checkbox label
- Add disabled state style
- Add error state style
- Add error prop to checkbox
/**
 * Type alias for CSS fragments used in styled-components.
 * During the migration away from styled-components, this is now just a string
 * instead of FlattenSimpleInterpolation from styled-components.
 *
 * @deprecated This type will be removed once the styled-components migration is complete.
 * Use plain strings for CSS content.
 */
export type CssFragment = string;
export declare const colors: {
    palette: {
        readonly red: "#ca2026";
        readonly danger: "#c2002f";
        readonly darkRed: "#c22032";
        readonly lightRed: "#e298a0";
        readonly paleRed: "#FBE7EA";
        readonly green: "#77af42";
        readonly lightGreen: "#8bc753";
        readonly paleGreen: "#e0edd3";
        readonly darkGreen: "#63a524";
        readonly darkerGreen: "4e7226";
        readonly paleYellow: "#ffffbb";
        readonly teal: "#0dc0de";
        readonly darkTeal: "#007297";
        readonly blue: "#007da4";
        readonly mediumBlue: "#026AA1";
        readonly lightBlue: "#34bdd8";
        readonly neutralLightBlue: "#0dc0dc";
        readonly tangerine: "#ffbd3e";
        readonly gray: "#5e5e5e";
        readonly darkGray: "#757575";
        readonly pale: "#d5d5d5";
        readonly light: "#e4e4e4";
        readonly white: "#ffffff";
        readonly neutralLightest: "#f9f9f9";
        readonly neutralCool: "#f6f7f8";
        readonly neutralBright: "#f5f5f5";
        readonly neutralLighter: "#f1f1f1";
        readonly neutralLight: "#e5e5e5";
        readonly neutralMedium: "#a0a0a0";
        readonly neutral: "#818181";
        readonly neutralThin: "#6f6f6f";
        readonly neutralDark: "#5f6163";
        readonly neutralFeedback: "#555";
        readonly neutralDarker: "#424242";
        readonly black: "#000000";
        readonly orange: "#D4450C";
    };
    link: {
        color: string;
        hover: string;
    };
};
export declare const zIndex: {
    [key: string]: number;
};
export declare const padding: {
    navbar: {
        desktop: number;
        mobile: number;
    };
};
/**
 * Default focus outline styles for accessibility.
 *
 * @type {CssFragment}
 * @note Breaking change: Previously returned FlattenSimpleInterpolation from styled-components,
 * now returns a plain string. This is part of the migration away from styled-components.
 * The string can still be used in styled-components template literals.
 */
export declare const defaultFocusOutline: CssFragment;
/**
 * Breakpoints for responsive design.
 *
 * @note Breaking change: The `desktop()` helper function has been removed as part of
 * the migration away from styled-components. Use `desktopBreak` directly in media queries instead.
 *
 * Migration example:
 * ```
 * // Old (with styled-components):
 * ${theme.breakpoints.desktop(css`padding: 2rem;`)}
 *
 * // New (plain CSS):
 * @media screen and (min-width: ${theme.breakpoints.desktopBreak}em) {
 *   padding: 2rem;
 * }
 * ```
 */
export declare const breakpoints: {
    mobileNavBreak: number;
    mobileBreak: number;
    desktopBreak: number;
};
declare const theme: {
    colors: {
        palette: {
            readonly red: "#ca2026";
            readonly danger: "#c2002f";
            readonly darkRed: "#c22032";
            readonly lightRed: "#e298a0";
            readonly paleRed: "#FBE7EA";
            readonly green: "#77af42";
            readonly lightGreen: "#8bc753";
            readonly paleGreen: "#e0edd3";
            readonly darkGreen: "#63a524";
            readonly darkerGreen: "4e7226";
            readonly paleYellow: "#ffffbb";
            readonly teal: "#0dc0de";
            readonly darkTeal: "#007297";
            readonly blue: "#007da4";
            readonly mediumBlue: "#026AA1";
            readonly lightBlue: "#34bdd8";
            readonly neutralLightBlue: "#0dc0dc";
            readonly tangerine: "#ffbd3e";
            readonly gray: "#5e5e5e";
            readonly darkGray: "#757575";
            readonly pale: "#d5d5d5";
            readonly light: "#e4e4e4";
            readonly white: "#ffffff";
            readonly neutralLightest: "#f9f9f9";
            readonly neutralCool: "#f6f7f8";
            readonly neutralBright: "#f5f5f5";
            readonly neutralLighter: "#f1f1f1";
            readonly neutralLight: "#e5e5e5";
            readonly neutralMedium: "#a0a0a0";
            readonly neutral: "#818181";
            readonly neutralThin: "#6f6f6f";
            readonly neutralDark: "#5f6163";
            readonly neutralFeedback: "#555";
            readonly neutralDarker: "#424242";
            readonly black: "#000000";
            readonly orange: "#D4450C";
        };
        link: {
            color: string;
            hover: string;
        };
    };
    zIndex: {
        [key: string]: number;
    };
    padding: {
        navbar: {
            desktop: number;
            mobile: number;
        };
    };
    breakpoints: {
        mobileNavBreak: number;
        mobileBreak: number;
        desktopBreak: number;
    };
};
export default theme;

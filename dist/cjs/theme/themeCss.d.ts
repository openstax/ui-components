type Token = readonly [name: string, value: string];
/**
 * The tokens theme.css is made of, grouped the way the file is laid out. This is the
 * single description of the projection from the JavaScript theme into CSS custom
 * properties: `renderThemeCss` writes it out, and `tokens.spec.ts` checks the committed
 * file still matches. Nothing reads the CSS to decide what the tokens are.
 */
export declare const themeTokenGroups: ReadonlyArray<{
    label: string;
    tokens: Token[];
}>;
/** Every token as a flat name -> value map. */
export declare const themeTokens: () => Map<string, string>;
export declare const renderThemeCss: () => string;
export {};

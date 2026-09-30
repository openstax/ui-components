import React from 'react';
import './Text.css';
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Visual style applied to a heading, decoupled from its semantic level.
 * Maps to the `text-*` classes in Text.css.
 */
export type HeadingVariant = 'h2' | 'h3';
export interface HeadingProps extends React.ComponentPropsWithoutRef<'h2'> {
    /** Semantic heading level — controls which `h1`–`h6` element is rendered. */
    level: HeadingLevel;
    /** Visual style to apply. Defaults to match `level` (e.g. `level={2}` → `h2`). */
    variant?: HeadingVariant;
}
/**
 * Renders a heading whose semantic level (the rendered `h1`–`h6` tag) is
 * independent of its visual style (`variant`). This lets consumers preserve a
 * correct document outline while reusing an existing heading style — e.g.
 * `<Heading level={2} variant="h3">` is an `<h2>` styled like an h3.
 */
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export declare const H2: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const H3: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
export declare const Paragraph: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

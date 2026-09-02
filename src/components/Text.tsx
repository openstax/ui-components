import React from 'react';
import classNames from 'classnames';
import './Text.css';
import '../theme/theme.css';

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
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, variant, className, ...props }, ref) => {
    const Tag = `h${level}` as const;
    // Default the visual style to match the semantic level.
    const resolvedVariant = variant ?? (`h${level}` as HeadingVariant);
    return <Tag ref={ref} className={classNames(`text-${resolvedVariant}`, className)} {...props} />;
  }
);

Heading.displayName = 'Heading';

export const H2 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h2'>>(
  (props, ref) => <Heading level={2} ref={ref} {...props} />
);

H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h3'>>(
  (props, ref) => <Heading level={3} ref={ref} {...props} />
);

H3.displayName = 'H3';

export const Paragraph = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={classNames('text-paragraph', className)} {...props} />
  )
);

Paragraph.displayName = 'Paragraph';

import React from 'react';
import classNames from 'classnames';
import './Text.css';

export const H2 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h2'>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={classNames('text-h2', className)} {...props} />
  )
);

H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<'h3'>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={classNames('text-h3', className)} {...props} />
  )
);

H3.displayName = 'H3';

export const Paragraph = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<'p'>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={classNames('text-paragraph', className)} {...props} />
  )
);

Paragraph.displayName = 'Paragraph';

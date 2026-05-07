import React from 'react';
import classNames from 'classnames';
import './Text.css';

export const H2 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={classNames('text-h2', className)} {...props} />
);

export const H3 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={classNames('text-h3', className)} {...props} />
);

export const Paragraph = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={classNames('text-paragraph', className)} {...props} />
);

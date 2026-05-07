import React from 'react';
import './Text.css';

export const H2 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={`text-h2${className ? ' ' + className : ''}`} {...props} />
);

export const H3 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-h3${className ? ' ' + className : ''}`} {...props} />
);

export const Paragraph = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text-paragraph${className ? ' ' + className : ''}`} {...props} />
);

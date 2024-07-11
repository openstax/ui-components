import React, { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export const BodyPortal = ({
  children, tagName, className, append
}: React.PropsWithChildren<{tagName?: string; className?: string; append?: boolean}>) => {
  const tag = tagName?.toUpperCase() ?? 'DIV';
  const ref = React.useRef<HTMLElement>(document.createElement(tag));
  if (ref.current.tagName !== tag) {
    ref.current = document.createElement(tag);
  }

  // The default is to add the tag before the root element
  // Pass append: true to append it to the body
  const before = append ? null : document.body.querySelector('#root');

  useLayoutEffect(() => {
    const element = ref.current;

    if (className) {
      element.classList.add(className);
    }

    document.body.insertBefore(element, before);

    return () => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      if (className) {
        element.classList.remove(className);
      }
    };
  }, [before, className, tag]);

  return createPortal(children, ref.current);
};

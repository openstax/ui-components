import React from 'react';
import { createPortal } from 'react-dom';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';

const getInsertBeforeTarget = (bodyPortalSlots: string[], slot?: string) => {
  if (!slot) { return null; }

  for (let index = bodyPortalSlots.findIndex((sl) => sl === slot) + 1; index < bodyPortalSlots.length; index++) {
    const sl = bodyPortalSlots[index];
    const tag = sl === 'root' ? document.querySelector('#root') : document.querySelector(`[data-portal-slot="${sl}"]`);
    if (tag) { return tag; }
  }

  return null;
}

export const BodyPortal = ({
  children, slot, tagName, className
}: React.PropsWithChildren<{slot?: string; tagName?: string; className?: string}>) => {
  const tag = tagName?.toUpperCase() ?? 'DIV';
  const ref = React.useRef<HTMLElement>(document.createElement(tag));
  if (ref.current.tagName !== tag) {
    ref.current = document.createElement(tag);
  }

  const bodyPortalOrderedRefs = React.useContext(BodyPortalSlotsContext);

  React.useLayoutEffect(() => {
    const element = ref.current;

    if (className) {
      element.classList.add(className);
    }

    if (slot) {
      element.dataset['portalSlot'] = slot;
    }

    document.body.insertBefore(element, getInsertBeforeTarget(bodyPortalOrderedRefs, slot));

    return () => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      if (slot) {
        delete element.dataset['portalSlot'];
      }

      if (className) {
        element.classList.remove(className);
      }
    };
  }, [bodyPortalOrderedRefs, className, slot, tag]);

  return createPortal(children, ref.current);
};

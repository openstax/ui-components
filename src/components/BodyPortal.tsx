import React from 'react';
import { createPortal } from 'react-dom';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';

const getInsertBeforeTarget = (bodyPortalSlots: string[], slot?: string) => {
  // Note: If the slot is not found in bodyPortalSlots, this code will append the tag instead,
  //       meaning the ordering will then depend on the rendering order and may change
  const slotIndex = bodyPortalSlots.findIndex((sl) => sl === slot);
  if (slotIndex === -1) { return null; }

  // Find the next slot that is present in the DOM and return it
  for (let index = slotIndex + 1; index < bodyPortalSlots.length; index++) {
    const sl = bodyPortalSlots[index];
    const tag = sl === 'root'
    ? document.body.querySelector('#root')
    : document.body.querySelector(`[data-portal-slot="${sl}"]`);
    if (tag) { return tag; }
  }

  // None of the slots after this one are present in the DOM, so just append it instead
  return null;
}

export const BodyPortal = ({
  children, className, role, slot, tagName
}: React.PropsWithChildren<{className?: string; role?: string; slot?: string; tagName?: string}>) => {
  const tag = tagName?.toUpperCase() ?? 'DIV';
  const ref = React.useRef<HTMLElement>(document.createElement(tag));
  if (ref.current.tagName !== tag) {
    ref.current = document.createElement(tag);
  }

  const bodyPortalOrderedRefs = React.useContext(BodyPortalSlotsContext);

  React.useLayoutEffect(() => {
    const element = ref.current;

    if (className) { element.classList.add(...className.split(' ')); }

    if (role) { element.setAttribute('role', role); }

    if (slot) { element.dataset.portalSlot = slot; }

    document.body.insertBefore(element, getInsertBeforeTarget(bodyPortalOrderedRefs, slot));

    return () => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      if (slot) { delete element.dataset.portalSlot; }

      if (role) { element.removeAttribute('role'); }

      if (className) { element.classList.remove(...className.split(' ')); }
    };
  }, [bodyPortalOrderedRefs, className, role, slot, tag]);

  return createPortal(children, ref.current);
};

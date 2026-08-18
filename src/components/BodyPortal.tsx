import React from 'react';
import { createPortal } from 'react-dom';
import { BodyPortalSlotsContext } from './BodyPortalSlotsContext';
import { CSSPropertiesWithVariables } from '../types';

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

export type BodyPortalProps = React.PropsWithChildren<{
  className?: string;
  role?: string;
  slot?: string;
  tagName?: string;
  id?: string;
  'data-testid'?: string;
  ariaLabel?: string;
  style?: CSSPropertiesWithVariables;
}>;

export const BodyPortal = React.forwardRef<HTMLElement, BodyPortalProps>((
  { children, className, role, slot, tagName, id, ariaLabel, style, ...props }, ref?: React.ForwardedRef<HTMLElement>
) => {
  const tag = tagName?.toUpperCase() ?? 'DIV';
  const internalRef = React.useRef<HTMLElement | null>(
    typeof document !== 'undefined' ? document.createElement(tag) : null
  );
  if (typeof document !== 'undefined' && (!internalRef.current || internalRef.current.tagName !== tag)) {
    internalRef.current = document.createElement(tag);
  }
  if (ref && internalRef.current) {
    if (typeof ref === 'function') {
      ref(internalRef.current);
    } else {
      ref.current = internalRef.current;
    }
  }

  const bodyPortalOrderedRefs = React.useContext(BodyPortalSlotsContext);
  const testId = props['data-testid'];

  // Effect for creating/destroying the portal element and setting non-style props
  React.useLayoutEffect(() => {
    const element = internalRef.current;
    if (!element) { return; }

    if (className) { element.classList.add(...className.split(' ')); }

    if (id) { element.id = id; }

    if (testId) { element.dataset.testid = testId; }

    if (role) { element.setAttribute('role', role); }

    if (slot) { element.dataset.portalSlot = slot; }

    if (ariaLabel) element.setAttribute('aria-label', ariaLabel);

    document.body.insertBefore(element, getInsertBeforeTarget(bodyPortalOrderedRefs, slot));

    return () => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      if (slot) { delete element.dataset.portalSlot; }

      if (role) { element.removeAttribute('role'); }

      if (ariaLabel) { element.removeAttribute('aria-label'); }

      if (className) { element.classList.remove(...className.split(' ')); }

      if (id) { element.id = ''; }

      if (testId) { delete element.dataset.testid; }
    };
  }, [bodyPortalOrderedRefs, className, id, role, slot, ariaLabel, tag, testId]);

  // Separate effect for updating styles without removing/reinserting the portal
  React.useLayoutEffect(() => {
    const element = internalRef.current;
    if (!element || !style) { return; }

    // Apply styles
    Object.entries(style).forEach(([key, value]) => {
      if (value == null) return;
      if (key.startsWith('--')) {
        element.style.setProperty(key, String(value));
      } else {
        // Use camelCased style keys (e.g. cssFloat) directly instead of converting to kebab-case.
        (element.style as any)[key] = value as any;
      }
    });

    // Cleanup: remove styles on unmount or when style prop changes
    return () => {
      Object.keys(style).forEach((key) => {
        if (key.startsWith('--')) {
          element.style.removeProperty(key);
        } else {
          (element.style as any)[key] = '';
        }
      });
    };
  }, [style, tag]);

  if (!internalRef.current) { return null; }

  return createPortal(children, internalRef.current);
});

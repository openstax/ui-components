import React from "react";
import * as RAC from "react-aria-components";
import classNames from "classnames";
import "./Tree.css";
import "../../theme/theme.css";

// composeRenderProps normalises the string and render-callback forms of className so a
// caller-supplied callback is composed rather than dropped.
//
// forwardRef erases the generic, so each wrapper is declared over `object` and then given
// back the generic signature react-aria-components itself exports for the component being
// wrapped. That keeps both the ref the styled() wrappers used to forward and the item-type
// inference callers rely on.
const TreeBase = React.forwardRef<HTMLDivElement, RAC.TreeProps<object>>(
  ({ className, ...props }, ref) => (
    <RAC.Tree
      ref={ref}
      {...props}
      className={RAC.composeRenderProps(className, (resolved) => classNames('tree', resolved))}
    />
  )
);
TreeBase.displayName = 'Tree';

export const Tree = TreeBase as <T extends object>(
  props: RAC.TreeProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement | null;

const TreeItemBase = React.forwardRef<HTMLDivElement, RAC.TreeItemProps<object>>(
  ({ className, ...props }, ref) => (
    <RAC.TreeItem
      ref={ref}
      {...props}
      className={RAC.composeRenderProps(className, (resolved) => classNames('tree-item', resolved))}
    />
  )
);
TreeItemBase.displayName = 'TreeItem';

export const TreeItem = TreeItemBase as <T extends object>(
  props: RAC.TreeItemProps<T> & React.RefAttributes<HTMLDivElement>
) => React.ReactElement | null;

// TreeItemContent renders no DOM node, so it never had anything to style — the empty
// styled() wrapper it used to carry was a no-op.
export { TreeItemContent } from "react-aria-components";

// The caller's className lands on the button rather than the wrapper, matching the
// styled-components original. The button is always given a class, which is also what kept
// react-aria-components from applying its default `react-aria-Button` class.
export const TreeChevron = (props: React.PropsWithChildren<{
  className?: string,
}>) => (
  <div className="tree-chevron">
    <RAC.Button
      className={classNames('tree-chevron-button', props.className)}
      type="button"
      aria-label="expand/collapse"
      slot="chevron"
    >
      <svg viewBox="0 0 24 24">
        <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      {props.children}
    </RAC.Button>
  </div>
);

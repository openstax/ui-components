import React from "react";
import * as RAC from "react-aria-components";
import classNames from "classnames";
import "./Tree.css";
import "../../theme/theme.css";

// composeRenderProps normalises the string and render-callback forms of className so a
// caller-supplied callback is composed rather than dropped.
export const Tree = <T extends object>({ className, ...props }: RAC.TreeProps<T>) => (
  <RAC.Tree
    {...props}
    className={RAC.composeRenderProps(className, (resolved) => classNames('tree', resolved))}
  />
);

export const TreeItem = <T extends object>({ className, ...props }: RAC.TreeItemProps<T>) => (
  <RAC.TreeItem
    {...props}
    className={RAC.composeRenderProps(className, (resolved) => classNames('tree-item', resolved))}
  />
);

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

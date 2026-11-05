import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const TreeBase = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.Tree, { ref: ref, ...props, className: RAC.composeRenderProps(className, (resolved) => classNames('tree', resolved)) })));
TreeBase.displayName = 'Tree';
export const Tree = TreeBase;
const TreeItemBase = React.forwardRef(({ className, ...props }, ref) => (_jsx(RAC.TreeItem, { ref: ref, ...props, className: RAC.composeRenderProps(className, (resolved) => classNames('tree-item', resolved)) })));
TreeItemBase.displayName = 'TreeItem';
export const TreeItem = TreeItemBase;
// TreeItemContent renders no DOM node, so it never had anything to style — the empty
// styled() wrapper it used to carry was a no-op.
export { TreeItemContent } from "react-aria-components";
// The chevron's own text is its name, which react-aria extends with the row's label ("Show sections
// Chapter 1"), so a person who speaks the visible label can activate it (WCAG 2.5.3). Without this
// react-aria names it "Expand"/"Collapse" and the visible text is not part of the name. A chevron
// with no text, or with any element child, keeps "expand/collapse": the text alone would
// leave part of the visible label out of the name.
const visibleText = (children) => {
    const nodes = React.Children.toArray(children);
    return nodes.every((node) => typeof node === 'string' || typeof node === 'number')
        ? nodes.join('').trim()
        : '';
};
// The caller's className lands on the button rather than the wrapper, matching the
// styled-components original. The button is always given a class, which is also what kept
// react-aria-components from applying its default `react-aria-Button` class.
export const TreeChevron = (props) => (_jsx("div", { className: "tree-chevron", children: _jsxs(RAC.Button, { className: classNames('tree-chevron-button', props.className), type: "button", "aria-label": visibleText(props.children) || 'expand/collapse', slot: "chevron", children: [_jsx("svg", { viewBox: "0 0 24 24", children: _jsx("path", { d: "m8.25 4.5 7.5 7.5-7.5 7.5" }) }), props.children] }) }));

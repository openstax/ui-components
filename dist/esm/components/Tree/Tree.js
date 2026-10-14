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
// The caller's className lands on the button rather than the wrapper, matching the
// styled-components original. The button is always given a class, which is also what kept
// react-aria-components from applying its default `react-aria-Button` class.
export const TreeChevron = (props) => (_jsx("div", { className: "tree-chevron", children: _jsxs(RAC.Button, { className: classNames('tree-chevron-button', props.className), type: "button", "aria-label": "expand/collapse", slot: "chevron", children: [_jsx("svg", { viewBox: "0 0 24 24", children: _jsx("path", { d: "m8.25 4.5 7.5 7.5-7.5 7.5" }) }), props.children] }) }));

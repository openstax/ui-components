import{R as o,j as t,F as i,a as l}from"./index.1725ba47.js";import{T as r}from"./index.5fce0b12.js";import"./context.module.17a0d507.js";import"./useButton.module.45261402.js";import"./Collection.module.ffb7a4ec.js";import"./theme.9e7aa81e.js";import"./palette.15e4d008.js";import"./Tabs.1281a658.js";const s=[{id:"red",value:"Red"},{id:"green",value:"Green"},{id:"blue",value:"Blue"},{id:"yellow",value:"Yellow"},{id:"orange",value:"Orange"}],w=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},g=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as MultipleSelection,g as SingleSelection};

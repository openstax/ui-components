import{R as o,j as t,F as l,a as r}from"./index.4d692fb5.js";import{T as s}from"./index.d7161949.js";import"./context.module.992083d1.js";import"./useButton.module.1e8601a1.js";import"./FocusScope.module.5c092a1e.js";import"./theme.ac00b3a8.js";import"./palette.15e4d008.js";const i=[{key:"red",value:"Red"},{key:"green",value:"Green"},{key:"blue",value:"Blue"},{key:"yellow",value:"Yellow"},{key:"orange",value:"Orange"}],h=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},w=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as MultipleSelection,w as SingleSelection};

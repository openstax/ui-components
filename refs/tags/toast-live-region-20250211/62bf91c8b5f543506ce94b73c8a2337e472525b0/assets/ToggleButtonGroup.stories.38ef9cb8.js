import{R as o,j as t,F as l,a as r}from"./index.b1193cf1.js";import{T as s}from"./index.22f544e5.js";import"./context.module.122447a6.js";import"./useButton.module.c025c117.js";import"./FocusScope.module.65f01951.js";import"./theme.89304e3c.js";import"./palette.15e4d008.js";const i=[{key:"red",value:"Red"},{key:"green",value:"Green"},{key:"blue",value:"Blue"},{key:"yellow",value:"Yellow"},{key:"orange",value:"Orange"}],h=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},w=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as MultipleSelection,w as SingleSelection};

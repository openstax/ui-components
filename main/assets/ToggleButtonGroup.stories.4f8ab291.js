import{R as o,j as t,F as l,a as r}from"./index.fa43fba7.js";import{T as s}from"./index.9ec6b117.js";import"./context.module.742a2143.js";import"./useButton.module.b601f8f1.js";import"./FocusScope.module.9d41729b.js";import"./theme.ab406f57.js";import"./palette.15e4d008.js";const i=[{key:"red",value:"Red"},{key:"green",value:"Green"},{key:"blue",value:"Blue"},{key:"yellow",value:"Yellow"},{key:"orange",value:"Orange"}],h=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},w=()=>{const[e,n]=o.useState(new Set([]));return t(l,{children:[r(s,{selectedItems:e,onSelectionChange:n,children:i}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as MultipleSelection,w as SingleSelection};

import{R as o,j as t,F as i,a as l}from"./index.0def020e.js";import{T as r}from"./index.6043dee4.js";import"./context.module.756113a8.js";import"./useButton.module.544ad40e.js";import"./Collection.module.43ff4ddc.js";import"./theme.00a415e3.js";import"./palette.15e4d008.js";import"./Tabs.48838fc9.js";const s=[{id:"red",value:"Red"},{id:"green",value:"Green"},{id:"blue",value:"Blue"},{id:"yellow",value:"Yellow"},{id:"orange",value:"Orange"}],w=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},g=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as MultipleSelection,g as SingleSelection};

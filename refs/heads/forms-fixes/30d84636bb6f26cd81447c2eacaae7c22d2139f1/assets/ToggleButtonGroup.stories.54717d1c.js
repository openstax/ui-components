import{R as o,j as t,F as i,a as l}from"./index.0edc2388.js";import{T as r}from"./index.01f157dc.js";import"./context.module.a3feaa0a.js";import"./useButton.module.9c4d8459.js";import"./Collection.module.ec183c12.js";import"./theme.ca682476.js";import"./palette.15e4d008.js";import"./Tabs.65082cea.js";const s=[{id:"red",value:"Red"},{id:"green",value:"Green"},{id:"blue",value:"Blue"},{id:"yellow",value:"Yellow"},{id:"orange",value:"Orange"}],w=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},g=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as MultipleSelection,g as SingleSelection};

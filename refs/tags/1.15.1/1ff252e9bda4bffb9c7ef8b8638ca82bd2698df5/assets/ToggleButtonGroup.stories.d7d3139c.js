import{R as o,j as t,F as i,a as l}from"./index.c4ccf2f7.js";import{T as r}from"./index.9282c644.js";import"./context.module.8c7ca040.js";import"./useButton.module.4efb775d.js";import"./Collection.module.e61f4308.js";import"./theme.702baa9f.js";import"./palette.15e4d008.js";import"./Tabs.6f72ac02.js";const s=[{id:"red",value:"Red"},{id:"green",value:"Green"},{id:"blue",value:"Blue"},{id:"yellow",value:"Yellow"},{id:"orange",value:"Orange"}],w=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},g=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as MultipleSelection,g as SingleSelection};

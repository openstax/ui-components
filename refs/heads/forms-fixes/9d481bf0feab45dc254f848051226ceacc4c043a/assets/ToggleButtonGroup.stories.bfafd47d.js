import{R as o,j as t,F as i,a as l}from"./index.f9db6b46.js";import{T as r}from"./index.8378edf4.js";import"./context.module.5e11cc9b.js";import"./useButton.module.b59b9e37.js";import"./Collection.module.0f13d1bd.js";import"./theme.ba986330.js";import"./palette.15e4d008.js";import"./Tabs.7e5eb728.js";const s=[{id:"red",value:"Red"},{id:"green",value:"Green"},{id:"blue",value:"Blue"},{id:"yellow",value:"Yellow"},{id:"orange",value:"Orange"}],w=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectionMode:"multiple",selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})},g=()=>{const[e,n]=o.useState(new Set([]));return t(i,{children:[l(r,{selectedItems:e,onSelectionChange:n,children:s}),t("p",{children:["Current selections: ",[...e].join(", ")]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as MultipleSelection,g as SingleSelection};

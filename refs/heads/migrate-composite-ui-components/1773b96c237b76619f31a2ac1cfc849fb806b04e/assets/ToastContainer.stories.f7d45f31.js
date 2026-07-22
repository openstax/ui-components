import{c as r,a as n,s as i}from"./index.34d5bdce.js";import{B as d}from"./BodyPortal.68e852bd.js";import{T as u}from"./Toast.17027f26.js";import{z as f}from"./theme.469067e1.js";import"./palette.5e342580.js";const c=(e,o,t)=>e.map((s,a)=>n(u,{onDismiss:t,inline:o,...s,children:s.message},`toast-${a}`)),p=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s),m={"--toast-container-z-index":f.toasts};return n("div",{className:a,"aria-live":"polite",style:m,children:c(e,t,o)})},y=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s);return n(d,{className:a,"aria-live":"polite",slot:"toast",children:c(e,t,o)})},g=i(y)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,T=i(p)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,l=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],P=()=>n(g,{toasts:l}),x=()=>n(T,{toasts:l});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{P as UsingBodyPortal,x as WithoutBodyPortal};

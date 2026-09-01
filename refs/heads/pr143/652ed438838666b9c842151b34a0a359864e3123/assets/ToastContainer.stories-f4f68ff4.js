import{c as r,j as n,s as i}from"./index-c88d8e22.js";import{B as m}from"./BodyPortal-c1b41fd5.js";import{T as d}from"./Toast-c1c6f4d9.js";/* empty css              */const c=(e,o,t)=>e.map((s,a)=>n(d,{onDismiss:t,inline:o,...s,children:s.message},`toast-${a}`)),u=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s);return n("div",{className:a,"aria-live":"polite",children:c(e,t,o)})},f=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s);return n(m,{className:a,"aria-live":"polite",slot:"toast",children:c(e,t,o)})},p=i(f)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,g=i(u)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,l=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],w=()=>n(p,{toasts:l}),B=()=>n(g,{toasts:l});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as UsingBodyPortal,B as WithoutBodyPortal};

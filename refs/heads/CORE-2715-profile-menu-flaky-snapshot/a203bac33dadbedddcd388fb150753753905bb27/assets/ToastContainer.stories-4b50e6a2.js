import{c as r,j as n,s as i}from"./index-469574e6.js";import{B as d}from"./BodyPortal-18b47613.js";import{T as u}from"./Toast-ef75d31b.js";import{z as f}from"./theme-bed77ad0.js";import"./palette-12edeb86.js";const l=(e,o,t)=>e.map((s,a)=>n(u,{onDismiss:t,inline:o,...s,children:s.message},`toast-${a}`)),c={"--toast-container-z-index":f.toasts},y=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s);return n("div",{className:a,"aria-live":"polite",style:c,children:l(e,t,o)})},p=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=r("toast-container",{"toast-container-inline":t},s);return n(d,{className:a,"aria-live":"polite",slot:"toast",style:c,children:l(e,t,o)})},g=i(p)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,T=i(y)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,m=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>n(g,{toasts:m}),P=()=>n(T,{toasts:m});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as UsingBodyPortal,P as WithoutBodyPortal};

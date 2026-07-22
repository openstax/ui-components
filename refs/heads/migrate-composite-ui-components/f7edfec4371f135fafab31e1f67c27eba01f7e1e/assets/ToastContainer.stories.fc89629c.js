import{c as i,a as n,s as c}from"./index.eaf11874.js";import{B as u}from"./BodyPortal.9f6b382a.js";import{T as f}from"./Toast.8ad91f0e.js";import{z as l}from"./theme.469067e1.js";import"./palette.5e342580.js";const m=(e,o,t)=>e.map((s,a)=>n(f,{onDismiss:t,inline:o,...s,children:s.message},`toast-${a}`)),p=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=i("toast-container",{"toast-container-inline":t},s),r={"--toast-container-z-index":l.toasts};return n("div",{className:a,"aria-live":"polite",style:r,children:m(e,t,o)})},y=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=i("toast-container",{"toast-container-inline":t},s),r={"--toast-container-z-index":l.toasts};return n(u,{className:a,"aria-live":"polite",slot:"toast",style:r,children:m(e,t,o)})},g=c(y)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,T=c(p)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,d=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>n(g,{toasts:d}),P=()=>n(T,{toasts:d});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as UsingBodyPortal,P as WithoutBodyPortal};

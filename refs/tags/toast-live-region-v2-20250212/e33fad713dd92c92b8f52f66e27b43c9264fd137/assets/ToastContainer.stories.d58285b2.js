import{s as r,C as l,a}from"./index.7adb08c3.js";import{B as c}from"./BodyPortal.569c7446.js";import{T as y}from"./Toast.e6cbbc74.js";import{z as f}from"./theme.c7880208.js";import"./palette.15e4d008.js";const i=t=>t`
  ${e=>!e.inline&&l`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${f.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,u=i(r.div),g=i(r(c)),n=(t,e,s)=>t.map((o,m)=>a(y,{onDismiss:s,inline:e,...o,children:o.message},`toast-${m}`)),p=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(u,{inline:s,"aria-live":"assertive",className:o,children:n(t,s,e)}),T=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(g,{inline:s,"aria-live":"assertive",slot:"toast",className:o,children:n(t,s,e)}),C=r(T)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,h=r(p)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,d=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>a(C,{toasts:d}),$=()=>a(h,{toasts:d});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as UsingBodyPortal,$ as WithoutBodyPortal};

import{s as i,C as l,a}from"./index.14a97abd.js";import{B as c}from"./BodyPortal.6547f364.js";import{T as y}from"./Toast.8e2310f0.js";import{z as f}from"./theme.bc278bd7.js";import"./palette.15e4d008.js";const r=t=>t`
  ${e=>!e.inline&&l`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${f.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,p=r(i.div),u=r(i(c)),n=(t,e,s)=>t.map((o,m)=>a(y,{onDismiss:s,inline:e,...o,children:o.message},`toast-${m}`)),g=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(p,{inline:s,"aria-live":"polite",className:o,children:n(t,s,e)}),T=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(u,{inline:s,"aria-live":"polite",slot:"toast",className:o,children:n(t,s,e)}),C=i(T)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,h=i(g)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,d=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>a(C,{toasts:d}),$=()=>a(h,{toasts:d});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as UsingBodyPortal,$ as WithoutBodyPortal};

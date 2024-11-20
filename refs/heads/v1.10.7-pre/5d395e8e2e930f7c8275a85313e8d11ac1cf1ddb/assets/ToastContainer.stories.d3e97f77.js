import{s as a,C as m,a as t}from"./index.0f9cd158.js";import{B as d}from"./BodyPortal.ddf219a3.js";import{T as l}from"./Toast.93f2574d.js";import{z as c}from"./theme.f6b4b38a.js";import"./palette.15e4d008.js";const f=a(d)`
  ${e=>!e.inline&&m`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${c.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,u=({toasts:e,onDismissToast:i,inline:s=!1,className:r})=>t(f,{inline:s,"aria-live":"polite",slot:"toast",className:r,children:e.map((o,n)=>t(l,{onDismiss:i,inline:s,...o,children:o.message},`toast-${n}`))}),p=a(u)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,g=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],T=()=>t(p,{toasts:g});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Default};

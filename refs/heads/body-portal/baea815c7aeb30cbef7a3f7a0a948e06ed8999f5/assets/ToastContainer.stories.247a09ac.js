import{s as r,C as n,a as t}from"./index.cb3a5b89.js";import{B as m}from"./BodyPortal.04eb14a2.js";import{T as d}from"./Toast.966f987a.js";import{z as l}from"./theme.2fe8deb0.js";import"./palette.15e4d008.js";const c=r(m)`
  ${e=>!e.inline&&n`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${l.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,f=({toasts:e,onDismissToast:a,inline:s=!1})=>t(c,{inline:s,"aria-live":"polite",slot:"toast",children:e.map((o,i)=>t(d,{onDismiss:a,inline:s,...o,children:o.message},`toast-${i}`))}),u=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],h=()=>t(f,{toasts:u});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};

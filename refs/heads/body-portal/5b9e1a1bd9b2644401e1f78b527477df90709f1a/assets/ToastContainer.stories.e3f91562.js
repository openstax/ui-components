import{s as r,C as n,a as t}from"./index.eb7b38b1.js";import{B as m}from"./BodyPortal.47903540.js";import{T as d}from"./Toast.1e3eab39.js";import{z as l}from"./theme.b57e9cd5.js";import"./palette.15e4d008.js";const c=r(m)`
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

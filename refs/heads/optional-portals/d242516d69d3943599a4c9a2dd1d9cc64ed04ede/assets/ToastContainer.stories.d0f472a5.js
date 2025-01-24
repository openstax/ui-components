import{s as a,C as d,a as t}from"./index.9701bee5.js";import{B as l}from"./BodyPortal.253dceba.js";import{T as c}from"./Toast.61ff6e0f.js";import{z as u}from"./theme.282d57fd.js";import"./palette.15e4d008.js";const f=a(l)`
  ${e=>!e.inline&&d`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${u.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,p=({toasts:e,onDismissToast:i,inline:s=!1,portal:r=!0,className:n})=>t(f,{inline:s,"aria-live":"polite",portal:r,slot:"toast",className:n,children:e.map((o,m)=>t(c,{onDismiss:i,inline:s,...o,children:o.message},`toast-${m}`))}),g=a(p)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,y=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],v=()=>t(g,{toasts:y});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as Default};

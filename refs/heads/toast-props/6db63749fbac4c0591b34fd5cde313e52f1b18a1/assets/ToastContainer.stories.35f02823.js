import{z as r}from"./theme.dcd31e2c.js";import{s as m,C as d,a as s}from"./index.8ced7031.js";import{T as c}from"./Toast.a650a8f2.js";import"./palette.15e4d008.js";const l=m.div`
  ${e=>!e.inline&&d`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${r.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,u=({toasts:e,onDismissToast:a,inline:t=!1,...o})=>s(l,{inline:t,...o,children:e.map((i,n)=>s(c,{onDismiss:a,inline:t,...i,children:i.message},`toast-${n}`))}),f=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>s(u,{toasts:f});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};

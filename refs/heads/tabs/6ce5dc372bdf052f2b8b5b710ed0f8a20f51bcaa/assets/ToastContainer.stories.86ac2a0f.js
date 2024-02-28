import{z as n}from"./theme.31ecaead.js";import{s as r,C as m,a as s}from"./index.beec7e28.js";import{T as d}from"./Toast.fc04890e.js";import"./palette.15e4d008.js";const c=r.div`
  ${e=>!e.inline&&m`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${n.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,l=({toasts:e,onDismissToast:a,inline:t=!1})=>s(c,{inline:t,children:e.map((i,o)=>s(d,{onDismiss:a,inline:t,...i,children:i.message},`toast-${o}`))}),u=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],w=()=>s(l,{toasts:u});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};

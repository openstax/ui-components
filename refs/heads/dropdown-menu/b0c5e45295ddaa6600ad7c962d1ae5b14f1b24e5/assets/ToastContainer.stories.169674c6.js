import{z as n}from"./theme.4c49e29a.js";import{s as r,C as m,a as s}from"./index.9b1a8d3d.js";import{T as d}from"./Toast.4eeda25e.js";import"./palette.15e4d008.js";const c=r.div`
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

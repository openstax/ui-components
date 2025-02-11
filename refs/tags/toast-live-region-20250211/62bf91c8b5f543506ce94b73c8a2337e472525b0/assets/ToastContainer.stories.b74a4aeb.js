import{s as r,C as m,a}from"./index.b1193cf1.js";import{B as c}from"./BodyPortal.6b4028a9.js";import{T as y}from"./Toast.681efd5d.js";import{z as f}from"./theme.89304e3c.js";import"./palette.15e4d008.js";const i=t=>t`
  ${e=>!e.inline&&m`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${f.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,p=i(r.div),u=i(r(c)),n=(t,e,s)=>t.map((o,d)=>a(y,{onDismiss:s,inline:e,...o,children:o.message},`toast-${d}`)),g=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(p,{inline:s,role:"alert","aria-live":"polite",className:o,children:n(t,s,e)}),T=({toasts:t,onDismissToast:e,inline:s=!1,className:o})=>a(u,{inline:s,role:"alert","aria-live":"polite",slot:"toast",className:o,children:n(t,s,e)}),C=r(T)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,h=r(g)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,l=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],x=()=>a(C,{toasts:l}),$=()=>a(h,{toasts:l});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as UsingBodyPortal,$ as WithoutBodyPortal};

import{s as i,C as d,a as e}from"./index.ab5ff1f7.js";import{B as f}from"./BodyPortal.3adf368a.js";import{T as m}from"./Toast.432b53a2.js";import{z as l}from"./theme.75f8fe72.js";import"./palette.15e4d008.js";const p=i.div`
  ${t=>!t.inline&&d`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${l.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,u=i(f)`
  ${t=>!t.inline&&d`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${l.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,y=({toasts:t,onDismissToast:a,inline:s=!1,className:r})=>e(p,{inline:s,"aria-live":"polite",slot:"toast",className:r,children:t.map((o,n)=>e(m,{onDismiss:a,inline:s,...o,children:o.message},`toast-${n}`))}),g=({toasts:t,onDismissToast:a,inline:s=!1,className:r})=>e(u,{inline:s,"aria-live":"polite",slot:"toast",className:r,children:t.map((o,n)=>e(m,{onDismiss:a,inline:s,...o,children:o.message},`toast-${n}`))}),h=i(g)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,C=i(y)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,c=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],w=()=>e(h,{toasts:c}),P=()=>e(C,{toasts:c});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as UsingBodyPortal,P as WithoutBodyPortal};

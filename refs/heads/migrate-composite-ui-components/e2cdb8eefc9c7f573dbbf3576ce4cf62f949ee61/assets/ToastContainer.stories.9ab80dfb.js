import{c as i,a as n,R as u,s as c}from"./index.9732b206.js";import{B as f}from"./BodyPortal.8d5839a4.js";import{T as p}from"./Toast.fd8af3b0.js";import{z as l}from"./theme.469067e1.js";import"./palette.5e342580.js";const m=(e,o,t)=>e.map((s,a)=>n(p,{onDismiss:t,inline:o,...s,children:s.message},`toast-${a}`)),y=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=i("toast-container",{"toast-container-inline":t},s),r={"--toast-container-z-index":l.toasts};return n("div",{className:a,"aria-live":"polite",style:r,children:m(e,t,o)})},g=({toasts:e,onDismissToast:o,inline:t=!1,className:s})=>{const a=i("toast-container",{"toast-container-inline":t},s),r=u.useMemo(()=>({"--toast-container-z-index":l.toasts}),[]);return n(f,{className:a,"aria-live":"polite",slot:"toast",style:r,children:m(e,t,o)})},T=c(g)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,C=c(y)`
  top: 2rem;
  left: 2rem;
  right: unset;
`,d=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],P=()=>n(T,{toasts:d}),z=()=>n(C,{toasts:d});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{P as UsingBodyPortal,z as WithoutBodyPortal};

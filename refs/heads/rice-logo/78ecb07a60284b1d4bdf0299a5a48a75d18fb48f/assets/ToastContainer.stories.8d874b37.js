import{z as a}from"./theme.6c738ccc.js";import{s as m,C as c,j as s}from"./index.107524e4.js";import{T as d}from"./Toast.d6784fcb.js";import"./palette.15e4d008.js";var n="/home/runner/work/ui-components/ui-components/src/components/ToastContainer.tsx";const l=m.div`
  ${e=>!e.inline&&c`
    position: fixed;
    right: 2rem;
  `}
  z-index: ${a.toasts};
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 1vh;
`,u=({toasts:e,onDismissToast:i,inline:t=!1})=>s(l,{inline:t,children:e.map((o,r)=>s(d,{onDismiss:i,inline:t,...o,children:o.message},`toast-${r}`,!1,{fileName:n,lineNumber:22,columnNumber:35},void 0))},void 0,!1,{fileName:n,lineNumber:21,columnNumber:10},void 0);var f="/home/runner/work/ui-components/ui-components/src/components/ToastContainer.stories.tsx";const p=[{title:"Neutral",message:"message"},{title:"Error",message:"message",variant:"failure",dismissAfterMs:4e3},{title:"Success",message:"message",variant:"success",dismissAfterMs:2e3}],w=()=>s(u,{toasts:p},void 0,!1,{fileName:f,lineNumber:9,columnNumber:30},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};

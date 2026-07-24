import{s as e,a as o,j as r}from"./index.3c483d52.js";import{T as m}from"./Tooltip.cb75a3b5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f7f3e362.js";import"./useFocusRing.module.6ffdefe6.js";import"./context.module.b668c7b5.js";import"./useButton.module.5f5b8403.js";import"./OverlayArrow.module.6c9a9247.js";import"./Info.1e9ece62.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};

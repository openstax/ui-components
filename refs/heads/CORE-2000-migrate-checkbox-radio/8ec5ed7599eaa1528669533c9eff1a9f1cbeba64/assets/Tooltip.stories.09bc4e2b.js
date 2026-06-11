import{s as e,a as o,j as r}from"./index.d815c62a.js";import{T as m}from"./Tooltip.96ffcb56.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b45c4673.js";import"./useFocusRing.module.5097aff4.js";import"./context.module.cc14a4fa.js";import"./useButton.module.8f45d5bc.js";import"./OverlayArrow.module.1b4d88d9.js";import"./Info.31ce82a2.js";const n=e.div`
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

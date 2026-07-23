import{s as e,a as o,j as r}from"./index.d9384ca4.js";import{T as m}from"./Tooltip.9cd052b5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.7bae6b4c.js";import"./useFocusRing.module.77bb5a5a.js";import"./context.module.7b6fd9a1.js";import"./useButton.module.c84be9ec.js";import"./OverlayArrow.module.f794e854.js";import"./Info.556aa394.js";const n=e.div`
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

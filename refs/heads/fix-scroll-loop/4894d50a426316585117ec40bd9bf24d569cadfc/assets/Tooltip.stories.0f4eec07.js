import{s as e,a as o,j as r}from"./index.0f552bb7.js";import{T as m}from"./Tooltip.22e1dec5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.7d779fc1.js";import"./useFocusRing.module.6be01e39.js";import"./context.module.4490ff1e.js";import"./useButton.module.41d66f7f.js";import"./OverlayArrow.module.c47d6744.js";import"./Info.19bf3ef7.js";const n=e.div`
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

import{s as e,a as o,j as r}from"./index.ff576309.js";import{T as m}from"./Tooltip.e2563a78.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.98482c48.js";import"./useFocusRing.module.c80986a4.js";import"./context.module.3791cb9b.js";import"./useButton.module.23007894.js";import"./OverlayArrow.module.baf29b15.js";import"./Info.c4316416.js";const n=e.div`
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

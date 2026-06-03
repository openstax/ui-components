import{s as e,a as o,j as r}from"./index.d64a7b16.js";import{T as m}from"./Tooltip.f34f674b.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.970e0ec6.js";import"./useFocusRing.module.7cc4433c.js";import"./context.module.6366e4b3.js";import"./useButton.module.d51b1bb6.js";import"./OverlayArrow.module.38855c55.js";import"./Info.c8f5bcf8.js";const n=e.div`
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

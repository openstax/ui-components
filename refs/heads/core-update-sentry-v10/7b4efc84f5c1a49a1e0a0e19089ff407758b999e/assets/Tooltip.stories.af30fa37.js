import{s as e,a as o,j as r}from"./index.dbe3a13e.js";import{T as m}from"./Tooltip.c189cc79.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f51dd030.js";import"./useFocusRing.module.e6d9a4a6.js";import"./context.module.95785d1e.js";import"./useButton.module.0aa12332.js";import"./OverlayArrow.module.7a14183b.js";import"./Info.ef25d628.js";const n=e.div`
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

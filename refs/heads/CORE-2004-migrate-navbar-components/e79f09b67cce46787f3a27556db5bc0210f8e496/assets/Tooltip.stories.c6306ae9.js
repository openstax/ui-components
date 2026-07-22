import{s as e,a as o,j as r}from"./index.6188c728.js";import{T as m}from"./Tooltip.c258059e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f3c1ea4c.js";import"./useFocusRing.module.ccbdfcb9.js";import"./context.module.4f2a89dc.js";import"./useButton.module.ba397f4b.js";import"./OverlayArrow.module.ff9fe4a3.js";import"./Info.13756a87.js";const n=e.div`
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

import{s as e,a as o,j as r}from"./index.91f12c85.js";import{T as m}from"./Tooltip.a00dd86c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.3643134f.js";import"./useFocusRing.module.839c6e05.js";import"./context.module.31374f1e.js";import"./useButton.module.cdaad12c.js";import"./OverlayArrow.module.c0005718.js";import"./Info.fff5983f.js";const n=e.div`
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

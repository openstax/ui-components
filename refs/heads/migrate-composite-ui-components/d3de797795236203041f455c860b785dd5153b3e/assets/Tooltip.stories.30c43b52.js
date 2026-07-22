import{s as e,a as o,j as r}from"./index.6eef170d.js";import{T as m}from"./Tooltip.5a1a5352.js";import"./Button.module.8357fec4.js";import"./useFocusRing.module.12193b3d.js";import"./Hidden.module.a5303c19.js";import"./useButton.module.2c6c0793.js";import"./OverlayArrow.module.36c05b0d.js";import"./context.module.e2dce8e1.js";import"./Info.c8330efc.js";import"./palette.5e342580.js";const n=e.div`
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

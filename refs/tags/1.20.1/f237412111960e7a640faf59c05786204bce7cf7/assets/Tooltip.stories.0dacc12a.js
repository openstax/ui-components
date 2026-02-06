import{s as e,a as o,j as r}from"./index.7f352088.js";import{T as m}from"./Tooltip.81f01dbd.js";import"./theme.cc28a4ee.js";import"./palette.5e342580.js";import"./Button.module.c825950a.js";import"./useFocusRing.module.036f809c.js";import"./context.module.d43e93cd.js";import"./useButton.module.816184ba.js";import"./OverlayArrow.module.5bf4d33b.js";import"./Info.e8b67ae7.js";const n=e.div`
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
